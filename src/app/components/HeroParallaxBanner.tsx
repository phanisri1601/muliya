"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface Slide {
  id: number;
  leftImage: string;
  rightImage: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    leftImage: "/images/ringwithperson.png",
    rightImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    eyebrow: "PRISMARA",
    title: "RINGS",
    subtitle: "ELEGANCE ON YOUR FINGERS",
    description: "From delicate bands to statement pieces, our rings are crafted to symbolize moments that matter most.",
    cta: "SHOP RINGS",
    href: "/products",
  },
  {
    id: 2,
    leftImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
    rightImage: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    eyebrow: "PRISMARA",
    title: "EARRINGS",
    subtitle: "ELEGANCE IN EVERY DETAIL",
    description: "From everyday essentials to show-stopping chandeliers, our earrings are designed to captivate and complement every moment.",
    cta: "SHOP EARRINGS",
    href: "/products",
  },
  {
    id: 3,
    leftImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    rightImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    eyebrow: "PRISMARA",
    title: "NECKLACES",
    subtitle: "GRACE REDEFINED",
    description: "Elevate every look with our exquisite necklaces. From pendants to chokers, these designs add sophistication to any style.",
    cta: "SHOP NECKLACES",
    href: "/products",
  },
];

const smoothEase = [0.4, 0, 0.2, 1] as const;

export function HeroParallaxBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-[#1a1a1a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* LEFT PANEL - 50% width */}
          <div className="relative w-1/2 h-full overflow-hidden bg-[#2a2a2a]">
            {/* Left Background Image - comes from TOP to DOWN first */}
            <motion.div
              className="absolute inset-0"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.2, ease: smoothEase }}
            >
              <img
                src={slide.leftImage}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Left Text Content - comes AFTER image (delayed 1s) */}
            <div className="absolute inset-0 flex flex-col justify-center px-12 lg:px-20 text-white z-10">
              {/* Eyebrow - appears after image settles */}
              <motion.p
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: smoothEase }}
                className="text-white/70 text-xs tracking-[0.4em] mb-6"
              >
                {slide.eyebrow}
              </motion.p>

              {/* Main Title */}
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: smoothEase }}
                className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-wide mb-4"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: smoothEase }}
                className="text-white/60 text-sm tracking-[0.3em] uppercase mb-8"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>

          {/* RIGHT PANEL - 50% width with beige/taupe background */}
          <div className="relative w-1/2 h-full overflow-hidden bg-[#a89f91]">
            {/* Right Background - comes from BOTTOM to UP first */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#b8aea0] to-[#9a9185]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: smoothEase }}
            />

            {/* Right Content Container - all comes AFTER backgrounds */}
            <div className="relative h-full flex flex-col items-center justify-center px-12 lg:px-16 z-10">
              
              {/* Product Image - arch shape frame */}
              <motion.div
                className="relative w-full max-w-[300px] h-[340px] mb-8"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
              >
                {/* Arch frame container - circular top */}
                <div className="relative w-full h-full overflow-hidden bg-[#c4b8a8]" style={{ borderRadius: '50% 50% 0 0 / 40% 40% 0 0' }}>
                  <img
                    src={slide.rightImage}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
                {/* Arch border line */}
                <div 
                  className="absolute inset-0 border border-white/50 pointer-events-none"
                  style={{ borderRadius: '50% 50% 0 0 / 40% 40% 0 0' }}
                />
              </motion.div>

              {/* Description - appears after image (1.1s delay) */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: smoothEase }}
                className="text-center text-white/90 text-sm leading-relaxed max-w-sm mb-8"
              >
                {slide.description}
              </motion.p>

              {/* CTA Button - last to appear (1.3s delay) */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.3, ease: smoothEase }}
              >
                <Link
                  href={slide.href}
                  className="inline-block border border-white/40 px-8 py-3 text-xs tracking-[0.2em] text-white hover:bg-white hover:text-[#5a5248] transition-all duration-500"
                >
                  {slide.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Center Right */}
      <div className="absolute right-8 lg:right-12 bottom-1/2 translate-y-1/2 z-20 flex flex-col gap-4">
        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          whileHover={{ y: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </div>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`text-xs tracking-widest transition-all duration-300 ${
              current === i 
                ? "text-white" 
                : "text-white/40 hover:text-white/60"
            }`}
          >
            {String(i + 1).padStart(2, '0')}
          </button>
        ))}
      </div>
    </section>
  );
}
