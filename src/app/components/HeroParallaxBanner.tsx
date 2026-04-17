"use client";

import { useEffect, useMemo, useState } from "react";

export function HeroParallaxBanner() {
  const images = useMemo(
    () => [
      "/images/banners1.png",
       "/images/banners7.png",
      "/images/banners2.png",
      "/images/banners3.png",
      "/images/banners4.png",
      "/images/banners5.png",
      
    ],
    [],
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Muliya banner"
            className={
              "w-full h-auto object-cover transition-opacity duration-500 " +
              (idx === active ? "opacity-100" : "opacity-0 absolute inset-0")
            }
          />
        ))}

        <button
          type="button"
          onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
          aria-label="Previous banner"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/25 hover:bg-black/40 transition-colors flex items-center justify-center text-white"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setActive((i) => (i + 1) % images.length)}
          aria-label="Next banner"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/25 hover:bg-black/40 transition-colors flex items-center justify-center text-white"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Go to banner ${idx + 1}`}
              className={
                "h-2 w-2 rounded-full transition-colors " +
                (idx === active ? "bg-white" : "bg-white/50 hover:bg-white/70")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
