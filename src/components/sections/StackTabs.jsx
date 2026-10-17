"use client";

import { useState } from "react";
import { stack } from "@/content/stack";
import { createTabKeyHandler } from "@/lib/tabKeys";

const pad = (n) => String(n).padStart(2, "0");

export function StackTabs() {
  const [selected, setSelected] = useState(0);
  const onKeyDown = createTabKeyHandler(setSelected);

  return (
    <div className="mt-9 grid grid-cols-1 items-start gap-6 md:mt-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
      <div role="tablist" aria-label="Stack categories" className="grid grid-cols-2 gap-2.5 sm:max-lg:grid-cols-3 lg:grid-cols-1">
        {stack.map((group, i) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            id={`stack-tab-${group.id}`}
            aria-selected={selected === i}
            aria-controls={`stack-panel-${group.id}`}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={onKeyDown}
            className="stack-tab"
          >
            {group.name}
            <span className="font-mono text-xs font-normal text-muted">{pad(group.tools.length)}</span>
          </button>
        ))}
      </div>

      <div className="stack-panels">
        {stack.map((group, i) => {
          const active = selected === i;
          return (
            <div
              key={group.id}
              role="tabpanel"
              id={`stack-panel-${group.id}`}
              aria-labelledby={`stack-tab-${group.id}`}
              aria-hidden={!active}
              inert={!active}
              className={`stack-panel${active ? " is-active" : ""}`}
            >
              <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="serif m-0 text-[36px] leading-none sm:text-[44px]">{group.name}</h3>
                <span className="mono">{group.tagline}</span>
              </div>
              <ul className="m-0 grid list-none grid-cols-1 gap-3.5 p-0 min-[480px]:grid-cols-2 md:grid-cols-3">
                {group.tools.map(([name, description], k) => (
                  <li key={name} className="tile" style={{ "--k": k }}>
                    <span className="mono text-accent">{pad(k + 1)}</span>
                    <h4 className="display mt-3 mb-1.5 text-[22px] leading-tight tracking-[-0.01em]">{name}</h4>
                    <p className="m-0 text-sm leading-normal text-muted">{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
