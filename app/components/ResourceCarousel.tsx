"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  subtitle?: string;
  body?: string;
}

interface Props {
  slides: Slide[];
}

export default function ResourceCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);

  // auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg bg-[#523624]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col justify-center px-8 sm:px-10"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-cream-300/80 mb-3">
              Featured Resource
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-cream-50 mb-3">
              {current.title}
            </h2>
            {current.subtitle && (
              <p className="text-cream-200 text-sm sm:text-base mb-1">
                {current.subtitle}
              </p>
            )}
            {current.body && (
              <p className="text-cream-200/90 text-xs sm:text-sm md:text-base max-w-2xl">
                {current.body}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-cream-100" : "bg-cream-100/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
