// Proxies MakerWorld's public design API (no CORS headers, so the browser can't
// call it directly) and trims the ~200 KB response down to what the calculator needs.
// Also used by the Vite dev server — see vite.config.js.

const API = 'https://api.bambulab.com/v1/design-service/design/'

const json = (body, status = 200, extraHeaders = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extraHeaders },
  })

const normalizePlates = (plates = []) =>
  plates.map((p) => ({
    index: p.index,
    name: p.name || `Plate ${p.index}`,
    thumbnail: p.thumbnail?.url || null,
    grams: Number(p.weight) || 0,
    seconds: Number(p.prediction) || 0,
    filaments: (p.filaments || []).map((f) => ({
      type: f.type,
      color: f.color,
      grams: Number(f.usedG) || 0,
    })),
  }))

const printerName = (c) =>
  c.nozzleDiameter && c.nozzleDiameter !== 0.4
    ? `${c.devProductName} (${c.nozzleDiameter} nozzle)`
    : c.devProductName

function normalizeProfile(instance) {
  const ext = instance.extention || {}
  const main = ext.modelInfo || {}
  const printers = []

  if (main.compatibility && main.plates?.length) {
    printers.push({
      name: printerName(main.compatibility),
      primary: true,
      plates: normalizePlates(main.plates),
    })
  }
  for (const other of ext.otherCompatibilityModelInfo || []) {
    const info = other.modelInfo
    if (!info?.plates?.length) continue
    printers.push({
      name: printerName(info.compatibility || other),
      primary: false,
      plates: normalizePlates(info.plates),
    })
  }

  return {
    id: instance.id,
    title: instance.titleTranslated || instance.title,
    printers,
  }
}

export default async (req) => {
  const id = new URL(req.url).searchParams.get('id')
  if (!/^\d+$/.test(id || '')) {
    return json({ error: 'Missing or invalid model id' }, 400)
  }

  let res
  try {
    res = await fetch(API + id, { headers: { 'user-agent': 'Mozilla/5.0' } })
  } catch {
    return json({ error: 'Could not reach MakerWorld' }, 502)
  }
  if (res.status === 404) return json({ error: 'Model not found on MakerWorld' }, 404)
  if (!res.ok) return json({ error: `MakerWorld returned ${res.status}` }, 502)

  const d = await res.json()
  return json(
    {
      id: d.id,
      title: d.titleTranslated || d.title,
      cover: d.coverUrl,
      url: `https://makerworld.com/en/models/${d.id}-${d.slug}`,
      defaultProfileId: d.defaultInstanceId,
      profiles: (d.instances || []).map(normalizeProfile).filter((p) => p.printers.length),
    },
    200,
    { 'cache-control': 'public, max-age=600' },
  )
}

export const config = { path: '/api/makerworld' }
