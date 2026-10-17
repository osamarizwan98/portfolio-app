"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/ui/icons";
import { createTabKeyHandler } from "@/lib/tabKeys";

/** Accessible tablist: hover (mouse), focus, click, tap and arrow keys all select. */
export function ServicesConsole({ items, panels }) {
  const [selected, setSelected] = useState(0);
  const stageRef = useRef(null);
  const onKeyDown = createTabKeyHandler(setSelected);

  // Only the visible diagram runs its SVG (SMIL) animations; none run under reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    stageRef.current?.querySelectorAll(".panel").forEach((panel, i) => {
      panel.querySelectorAll("svg").forEach((svg) => {
        if (i === selected && !reduce) svg.unpauseAnimations();
        else svg.pauseAnimations();
      });
    });
  }, [selected]);

  return (
    <div className="mt-9 grid grid-cols-1 gap-7 md:mt-14 lg:grid-cols-[400px_minmax(0,1fr)]">
      <div role="tablist" aria-label="Services" aria-orientation="vertical" className="flex flex-col self-start border-b border-line">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`svc-tab-${item.id}`}
            aria-selected={selected === i}
            aria-controls={`svc-panel-${item.id}`}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onFocus={() => setSelected(i)}
            onPointerEnter={(e) => e.pointerType === "mouse" && setSelected(i)}
            onKeyDown={onKeyDown}
            className="svc-row"
          >
            <span className="mono flex-none">0{i + 1}</span>
            <span className="min-w-0 flex-1">
              <span className="svc-title">{item.name}</span>
              <span className="mono mt-2 block">{item.sub}</span>
            </span>
            <span className="svc-arrow" aria-hidden="true">
              <ArrowRight size={18} />
            </span>
          </button>
        ))}
      </div>

      <div ref={stageRef} className="stage">
        {items.map((item, i) => {
          const active = selected === i;
          return (
            <div
              key={item.id}
              role="tabpanel"
              id={`svc-panel-${item.id}`}
              aria-labelledby={`svc-tab-${item.id}`}
              aria-hidden={!active}
              inert={!active}
              className={`panel${active ? " is-active" : ""}`}
            >
              {panels[i]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
