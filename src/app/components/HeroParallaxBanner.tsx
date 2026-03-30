"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface Slide {
  id: number;
  backgroundImage: string;
  productImage: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
}

const slides: Slide[] = [
  {
    id: 1,
    backgroundImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000",
    productImage: "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    title: "Prismara",
    subtitle: "Jewelry Collection",
    description: "Discover our exquisite handcrafted pieces",
    cta: "Explore Now",
    href: "/products",
  },
  {
    id: 2,
    backgroundImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a44ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000",
    productImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    title: "Diamond",
    subtitle: "Elegance Series",
    description: "Timeless brilliance for every occasion",
    cta: "Shop Now",
    href: "/products",
  },
  {
    id: 3,
    backgroundImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000",
    productImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    title: "Golden",
    subtitle: "Heritage Line",
    description: "Traditional craftsmanship meets modern design",
    cta: "Discover",
    href: "/products",
  },
];

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
  exit: { x: -50, opacity: 0, transition: { duration: 0.4 } },
};

const imageVariants = {
  hidden: { scale: 1.3, opacity: 0, x: 100 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  exit: {
    scale: 1.1,
    opacity: 0,
    x: -50,
    transition: { duration: 0.5 },
  },
};

const bgVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" as const },
  },
  exit: { opacity: 0, transition: { duration: 0.6 } },
};

export function HeroParallaxBanner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background Layer - Slight Parallax */}
          <motion.div
            variants={bgVariants}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Text (Slides In) with Stagger */}
              <div className="text-white z-10 pt-20 lg:pt-0">
                <motion.p
                  custom={0}
                  variants={textVariants}
                  className="text-white/70 text-sm tracking-[0.3em] uppercase mb-4"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-white/80 text-lg mb-8 max-w-md"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  custom={3}
                  variants={textVariants}
                >
                  <Link
                    href={slide.href}
                    className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </div>

              {/* Right - Image (Zoom + Fade) */}
              <motion.div
                variants={imageVariants}
                className="relative h-[300px] sm:h-[400px] lg:h-[500px] z-10"
              >
                <motion.img
                  src={slide.productImage}
                  alt={slide.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/20 transition-colors rounded-full"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur hover:bg-white/20 transition-colors rounded-full"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
