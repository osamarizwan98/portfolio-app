"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

export function ReviewsSlider({ heading, children }) {
  const trackRef = useRef(null);

  const slide = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: dir * Math.max(320, track.clientWidth * 0.7), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6">
        {heading}
        <div className="flex gap-3">
          <button type="button" className="nav-btn" aria-label="Previous review" aria-controls="reviews-track" onClick={() => slide(-1)}>
            <ArrowLeft />
          </button>
          <button type="button" className="nav-btn" aria-label="Next review" aria-controls="reviews-track" onClick={() => slide(1)}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        id="reviews-track"
        className="rev-track mt-9 md:mt-12"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Client reviews from Fiverr"
      >
        {children}
      </div>
    </>
  );
}
