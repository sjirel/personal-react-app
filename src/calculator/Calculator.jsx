import { useEffect, useState } from 'react'

const CONSUMABLES_PCT = 0.03 // locked
const PROFIT_PCT = 0.3 // locked
const OUR_PRINTER = 'A1'
const RATES_KEY = 'print-calc-rates'

const DEFAULT_RATES = {
  filament: '2',
  elecRate: '12',
  elecPower: '0.1',
  depr: '52.50',
  labor: '30',
  packaging: '5',
}

const num = (v) => parseFloat(v) || 0
const fmt = (n) =>
  'Rs ' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const fmtDuration = (seconds) => {
  const mins = Math.round(seconds / 60)
  return `${Math.floor(mins / 60)}h ${String(mins % 60).padStart(2, '0')}m`
}
const round2 = (n) => String(Math.round(n * 100) / 100)

// Print cost before packaging/extras: filament + electricity + depreciation + labor + consumables
function printCost(grams, hours, rates) {
  const filament = grams * num(rates.filament)
  const elec = num(rates.elecPower) * hours * num(rates.elecRate)
  const depr = num(rates.depr) * hours
  const labor = num(rates.labor) * hours
  const consumables = (filament + elec + depr + labor) * CONSUMABLES_PCT
  return { filament, elec, depr, labor, consumables, total: filament + elec + depr + labor + consumables }
}

function parseMakerWorldUrl(input) {
  const s = input.trim()
  const id = s.match(/models\/(\d+)/)?.[1] || (/^\d+$/.test(s) ? s : null)
  const profileId = s.match(/profileId-(\d+)/)?.[1]
  return { id, profileId: profileId ? Number(profileId) : null }
}

const pickPrinter = (profile) =>
  (profile.printers.find((p) => p.name === OUR_PRINTER) || profile.printers[0]).name

function loadRates() {
  try {
    return { ...DEFAULT_RATES, ...JSON.parse(localStorage.getItem(RATES_KEY)) }
  } catch {
    return DEFAULT_RATES
  }
}

export default function Calculator() {
  const [showSettings, setShowSettings] = useState(false)
  const [rates, setRates] = useState(loadRates)

  const [name, setName] = useState('Joystick')
  const [weight, setWeight] = useState('132.98')
  const [time, setTime] = useState('7')
  const [qty, setQty] = useState('1')

  const [extrasOn, setExtrasOn] = useState(false)
  const [extras, setExtras] = useState({ acrylicPcs: '0', acrylicPrice: '0', lights: '0', adapter: '0' })

  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [model, setModel] = useState(null)
  const [profileId, setProfileId] = useState(null)
  const [printer, setPrinter] = useState(null)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    try {
      localStorage.setItem(RATES_KEY, JSON.stringify(rates))
    } catch {}
  }, [rates])

  const profile = model?.profiles.find((p) => p.id === profileId)
  const plates = profile?.printers.find((p) => p.name === printer)?.plates || []

  // Selected plates drive the weight/time fields (still editable by hand afterwards)
  function applySelection(nextPlates, nextSelected) {
    const chosen = nextPlates.filter((p) => nextSelected.includes(p.index))
    setSelected(nextSelected)
    setWeight(round2(chosen.reduce((s, p) => s + p.grams, 0)))
    setTime(round2(chosen.reduce((s, p) => s + p.seconds, 0) / 3600))
  }

  function selectProfile(data, id) {
    const prof = data.profiles.find((p) => p.id === id) || data.profiles[0]
    const printerName = pickPrinter(prof)
    setProfileId(prof.id)
    setPrinter(printerName)
    const nextPlates = prof.printers.find((p) => p.name === printerName).plates
    applySelection(nextPlates, nextPlates.map((p) => p.index))
  }

  function selectPrinter(printerName) {
    setPrinter(printerName)
    const nextPlates = profile.printers.find((p) => p.name === printerName).plates
    applySelection(nextPlates, selected.filter((i) => nextPlates.some((p) => p.index === i)))
  }

  function togglePlate(index) {
    applySelection(
      plates,
      selected.includes(index) ? selected.filter((i) => i !== index) : [...selected, index].sort((a, b) => a - b),
    )
  }

  async function importModel(e) {
    e.preventDefault()
    const { id, profileId: urlProfileId } = parseMakerWorldUrl(url)
    if (!id) {
      setError('That doesn’t look like a MakerWorld model URL (…/models/12345-name).')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/makerworld?id=${id}`)
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`)
      if (!data.profiles?.length) throw new Error('This model has no print profiles with plate data.')
      setModel(data)
      setName(data.title)
      selectProfile(data, urlProfileId || data.defaultProfileId)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function clearModel() {
    setModel(null)
    setProfileId(null)
    setPrinter(null)
    setSelected([])
    setUrl('')
  }

  // Receipt
  const hours = num(time)
  const units = parseInt(qty) || 1
  const base = printCost(num(weight), hours, rates)
  const packaging = num(rates.packaging)
  const extrasTotal = extrasOn
    ? num(extras.acrylicPcs) * num(extras.acrylicPrice) + num(extras.lights) + num(extras.adapter)
    : 0
  const totalCost = base.total + packaging + extrasTotal
  const profit = totalCost * PROFIT_PCT
  const sellPrice = totalCost + profit

  const rateField = (key, label, step = '0.01') => (
    <div>
      <label htmlFor={`r-${key}`}>{label}</label>
      <input
        type="number"
        id={`r-${key}`}
        value={rates[key]}
        step={step}
        onChange={(e) => setRates({ ...rates, [key]: e.target.value })}
      />
    </div>
  )

  const extrasField = (key, label, step = '0.01') => (
    <div>
      <label htmlFor={`e-${key}`}>{label}</label>
      <input
        type="number"
        id={`e-${key}`}
        value={extras[key]}
        placeholder="0"
        step={step}
        onChange={(e) => setExtras({ ...extras, [key]: e.target.value })}
      />
    </div>
  )

  const selectedPlates = plates.filter((p) => selected.includes(p.index))

  return (
    <div className="wrap">
      <header>
        <div>
          <p className="brand-eyebrow">Nozzle → Cost → Price</p>
          <h1>Print Cost Calculator</h1>
        </div>
        <button className="settings-toggle" onClick={() => setShowSettings(!showSettings)}>
          ⚙ Rates &amp; Settings
        </button>
      </header>

      <div className="grid">
        <div>
          {/* SETTINGS */}
          <div className={`card${showSettings ? ' show' : ''}`} id="settingsPanel">
            <div className="section-label">Adjustable rates</div>
            <div className="rates-grid">
              {rateField('filament', 'Filament (Rs/g)')}
              {rateField('elecRate', 'Electricity (Rs/kWh)')}
              {rateField('elecPower', 'Printer power (kW)')}
              {rateField('depr', 'Depreciation (Rs/hr)')}
              {rateField('labor', 'Labor (Rs/hr)')}
              {rateField('packaging', 'Packaging (Rs, flat)')}
            </div>
            <div className="rate-note">
              These are the only editable knobs, saved in this browser. Consumables/failed-prints is fixed at 3% and
              profit margin is fixed at 30%, matching your standard formula.{' '}
              <button className="btn-ghost" onClick={() => setRates(DEFAULT_RATES)}>
                Reset to defaults
              </button>
            </div>
            <div className="section-label">Locked rates</div>
            <div className="rates-grid">
              <div className="locked-rate">
                <span>Consumables &amp; failed prints</span>
                <span className="val">3%</span>
              </div>
              <div className="locked-rate">
                <span>Profit margin</span>
                <span className="val">30%</span>
              </div>
            </div>
            <div className="rate-note">
              Consumables % is applied to (Filament + Electricity + Depreciation + Labor). Profit % is applied to the
              full total cost, including packaging, consumables, and any extras below.
            </div>
          </div>

          {/* MAKERWORLD IMPORT */}
          <div className="card">
            <div className="section-label">Import from MakerWorld</div>
            <form className="import-row" onSubmit={importModel}>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://makerworld.com/en/models/…"
                aria-label="MakerWorld model URL"
              />
              <button className="btn" type="submit" disabled={loading || !url.trim()}>
                {loading ? 'Loading…' : 'Fetch'}
              </button>
            </form>
            {error && <div className="import-error">{error}</div>}

            {model && profile && (
              <>
                <div className="model-head">
                  {model.cover && <img src={model.cover} alt="" />}
                  <div>
                    <div className="title">{model.title}</div>
                    <a href={model.url} target="_blank" rel="noreferrer">
                      View on MakerWorld ↗
                    </a>{' '}
                    <button className="btn-ghost" onClick={clearModel}>
                      Clear
                    </button>
                  </div>
                </div>

                <div className="field-row">
                  <div>
                    <label htmlFor="mwProfile">Print profile</label>
                    <select id="mwProfile" value={profileId} onChange={(e) => selectProfile(model, Number(e.target.value))}>
                      {model.profiles.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mwPrinter">Printer (times &amp; grams)</label>
                    <select id="mwPrinter" value={printer} onChange={(e) => selectPrinter(e.target.value)}>
                      {profile.printers.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                          {p.name === OUR_PRINTER ? ' — ours' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {!profile.printers.some((p) => p.name === OUR_PRINTER) && (
                  <div className="import-note warn">
                    This profile has no {OUR_PRINTER} data, so times are from the {printer}. Try another profile, or
                    adjust the print time by hand.
                  </div>
                )}

                <div className="plates-head">
                  <div className="section-label">
                    Plates · {selectedPlates.length}/{plates.length}
                  </div>
                  <div className="plates-actions">
                    <button className="btn-ghost" onClick={() => applySelection(plates, plates.map((p) => p.index))}>
                      All
                    </button>
                    <button className="btn-ghost" onClick={() => applySelection(plates, [])}>
                      None
                    </button>
                  </div>
                </div>
                <div className="plates">
                  {plates.map((p) => {
                    const on = selected.includes(p.index)
                    const cost = printCost(p.grams, p.seconds / 3600, rates).total
                    return (
                      <label key={p.index} className={`plate${on ? ' on' : ''}`}>
                        <input type="checkbox" checked={on} onChange={() => togglePlate(p.index)} />
                        {p.thumbnail ? <img src={p.thumbnail} alt="" loading="lazy" /> : <span />}
                        <div>
                          <div className="p-name">
                            {p.index}. {p.name}
                          </div>
                          <div className="p-meta">
                            <span>{p.grams} g</span>
                            <span>{fmtDuration(p.seconds)}</span>
                            <span className="swatches">
                              {p.filaments.map((f, i) => (
                                <span
                                  key={i}
                                  className="swatch"
                                  style={{ background: f.color }}
                                  title={`${f.type} ${f.color} · ${f.grams} g`}
                                />
                              ))}
                            </span>
                          </div>
                        </div>
                        <div className="p-cost">
                          <div className="sell">{fmt(cost * (1 + PROFIT_PCT))}</div>
                          <div className="cost">cost {fmt(cost)}</div>
                        </div>
                      </label>
                    )
                  })}
                </div>
                <div className="plates-total">
                  <span>
                    Selected: <b>{round2(selectedPlates.reduce((s, p) => s + p.grams, 0))} g</b> ·{' '}
                    <b>{fmtDuration(selectedPlates.reduce((s, p) => s + p.seconds, 0))}</b>
                  </span>
                  <span>per plate excl. packaging</span>
                </div>
              </>
            )}
            {!model && (
              <div className="import-note">
                Paste a model link to pull each plate’s grams and {OUR_PRINTER} print time into the calculator below.
              </div>
            )}
          </div>

          {/* MAIN INPUT */}
          <div className="card">
            <div className="section-label">Product</div>
            <div className="field-row">
              <div style={{ gridColumn: '1/-1' }}>
                <label htmlFor="pName">Product name</label>
                <input type="text" id="pName" placeholder="e.g. Joystick" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className="field-row triple">
              <div>
                <label htmlFor="pWeight">Weight (grams)</label>
                <input type="number" id="pWeight" placeholder="0" value={weight} step="0.01" onChange={(e) => setWeight(e.target.value)} />
              </div>
              <div>
                <label htmlFor="pTime">Print time (hours)</label>
                <input type="number" id="pTime" placeholder="0" value={time} step="0.01" onChange={(e) => setTime(e.target.value)} />
              </div>
              <div>
                <label htmlFor="pQty">Quantity</label>
                <input type="number" id="pQty" placeholder="1" value={qty} step="1" min="1" onChange={(e) => setQty(e.target.value)} />
              </div>
            </div>

            <label className="extras-toggle">
              <input type="checkbox" checked={extrasOn} onChange={(e) => setExtrasOn(e.target.checked)} />
              Add extras (acrylic, lights, adapter, etc.)
            </label>

            <div id="extrasFields" className={extrasOn ? 'show' : ''}>
              <div className="field-row">
                {extrasField('acrylicPcs', 'Acrylic pieces', '1')}
                {extrasField('acrylicPrice', 'Acrylic price / piece (Rs)')}
              </div>
              <div className="field-row">
                {extrasField('lights', 'Lights cost (Rs)')}
                {extrasField('adapter', 'Adapter cost (Rs)')}
              </div>
            </div>
          </div>
        </div>

        {/* RECEIPT */}
        <div className="receipt-outer">
          <div className="receipt">
            <div className="receipt-head">
              <div className="name">{name.trim() || 'Untitled Product'}</div>
              <div className="sub">
                {model
                  ? `${selectedPlates.length}/${plates.length} plates · ${printer} · Per Unit`
                  : 'Cost Breakdown · Per Unit'}
              </div>
            </div>
            <div className="dashed"></div>

            <div className="r-line"><span className="lbl">Filament</span><span className="val">{fmt(base.filament)}</span></div>
            <div className="r-line"><span className="lbl">Electricity</span><span className="val">{fmt(base.elec)}</span></div>
            <div className="r-line"><span className="lbl">Depreciation</span><span className="val">{fmt(base.depr)}</span></div>
            <div className="r-line"><span className="lbl">Labor</span><span className="val">{fmt(base.labor)}</span></div>
            <div className="r-line"><span className="lbl">Consumables (3%)</span><span className="val">{fmt(base.consumables)}</span></div>
            <div className="r-line"><span className="lbl">Packaging</span><span className="val">{fmt(packaging)}</span></div>
            {extrasOn && extrasTotal > 0 && (
              <div className="r-line"><span className="lbl">Extras</span><span className="val">{fmt(extrasTotal)}</span></div>
            )}

            <div className="dashed"></div>
            <div className="r-line total"><span className="lbl">Total cost / unit</span><span className="val">{fmt(totalCost)}</span></div>
            <div className="r-line profit"><span className="lbl">Profit (30%)</span><span className="val">{fmt(profit)}</span></div>
            <div className="r-line sell"><span className="lbl">Sell / unit</span><span className="val">{fmt(sellPrice)}</span></div>

            <div className="r-line qty-total">
              <span className="lbl">× {units} {units === 1 ? 'unit' : 'units'}</span>
              <span className="val">{fmt(sellPrice * units)}</span>
            </div>

            <div className="barcode"></div>
            <div className="receipt-foot">Thank you · Prices in NPR</div>
          </div>
        </div>
      </div>
    </div>
  )
}
