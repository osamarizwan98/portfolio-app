"use client";

import { useEffect, useRef } from "react";

// One observer shared by every Reveal on the page.
let observer;
function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        const first = !target.dataset.reveal;
        if (isIntersecting) {
          // Already on screen at load: leave it visible, no animation.
          if (!first) target.dataset.reveal = "shown";
          observer.unobserve(target);
        } else if (first) {
          target.dataset.reveal = "hidden";
        }
      }
    },
    { rootMargin: "0px 0px -80px 0px" },
  );
  return observer;
}

/**
 * Fades + rises its content into view once.
 * Content is visible by default (no JS = no hidden content); the hidden state is applied
 * only after hydration, and only to elements the observer reports as off-screen.
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag ref={ref} className={className} style={{ "--d": delay }}>
      {children}
    </Tag>
  );
}
