"use client";

import { motion } from "framer-motion";
import React from "react";

interface Slide {
  title: string;
  subtitle?: string;
  bg: string;
  textColor?: string;
  content?: React.ReactNode; // NEW — full JSX content here
}

interface Props {
  slides: Slide[];
}

export default function SlideSectionThree({ slides }: Props) {
  return (
    <div className="relative w-full font-serif">
      {slides.map((slide, index) => (
        <section
          key={index}
          className="sticky top-0 h-screen flex items-center justify-center px-10"
          style={{
            backgroundColor: slide.bg,
            color: slide.textColor || "white",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5, once: false }}
            className="max-w-3xl text-center"
          >
            <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>

            {slide.subtitle && (
              <p className="text-xl opacity-80 mb-6">{slide.subtitle}</p>
            )}

            {/* NEW: support full JSX content */}
            {slide.content && (
              <div className="text-lg leading-relaxed space-y-4">
                {slide.content}
              </div>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  );
}
