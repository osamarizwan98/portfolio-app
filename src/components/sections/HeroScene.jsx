"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/content/site";

const MAX_X = 8; // deg
const MAX_Y = 12; // deg

export function HeroScene() {
  const stageRef = useRef(null);
  const worldRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const world = worldRef.current;
    const canTilt = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!stage || !world || !canTilt) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      world.style.transform = `rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg)`;
      const settled = Math.abs(target.x - current.x) < 0.01 && Math.abs(target.y - current.y) < 0.01;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      target.x = -((e.clientY - r.top) / r.height - 0.5) * 2 * MAX_X;
      target.y = ((e.clientX - r.left) / r.width - 0.5) * 2 * MAX_Y;
      start();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      start();
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-stage rise" style={{ "--delay": "0.2s" }}>
      <div aria-hidden="true" className="hero-glow" />
      <div aria-hidden="true" className="world-scale">
        <div ref={worldRef} className="world">
          <div className="scene">
            {hero.layers.map((label, i) => (
              <div key={label} className={`layer layer-${i + 1}`}>
                <span className="mono">{label}</span>
              </div>
            ))}
          </div>
          <div className="ring">
            {hero.orbit.map((chip, i) => (
              <span key={chip} className="orbit-chip" style={{ "--a": `${i * 60}deg` }}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="float-chip top-2 left-0 sm:top-11">
        <span className="mono block text-accent">Live</span>
        SmartBundle · Shopify App Store
      </div>
      <div aria-hidden="true" className="float-chip right-0 bottom-2 sm:bottom-9" style={{ animationDelay: "-3s" }}>
        <span className="mono block">Karachi · UTC+5</span>
        Remote or hybrid
      </div>
    </div>
  );
}
