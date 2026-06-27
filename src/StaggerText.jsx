import React, { useMemo, useRef } from "react";
import useInView from "./useInView";

const splitNode = (node, ctx, staggerMs) => {
  if (node == null || typeof node === "boolean") return null;
  if (typeof node === "number") node = String(node);

  if (typeof node === "string") {
    const parts = node.split(/(\s+)/);
    return parts.map((part, idx) => {
      if (part === "") return null;
      if (/^\s+$/.test(part)) return part;
      const wordKey = `w${ctx.idx++}`;
      return (
        <span key={wordKey} className="stagger-word">
          {part.split("").map((char, i) => {
            const d = ctx.charIdx++ * staggerMs;
            return (
              <span
                key={i}
                className="stagger-char"
                style={{ transitionDelay: `${d}ms` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={`f${i}`}>
        {splitNode(child, ctx, staggerMs)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    return React.cloneElement(
      node,
      { key: node.key ?? `e${ctx.idx++}` },
      splitNode(node.props.children, ctx, staggerMs)
    );
  }

  return null;
};

const StaggerText = ({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 18,
  threshold = 0.15,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold, delay });
  const splitContent = useMemo(
    () => splitNode(children, { idx: 0, charIdx: 0 }, stagger),
    [children, stagger]
  );

  const cls = `stagger-text ${inView ? "is-visible" : ""} ${className}`.trim();
  return (
    <Tag ref={ref} className={cls}>
      {splitContent}
    </Tag>
  );
};

export default StaggerText;
