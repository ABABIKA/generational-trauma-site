"use client";

import { motion } from "framer-motion";
import React from "react";

interface Slide {
  title: string;
  subtitle?: string;
  bg?: string;
  textColor?: string;
  content: React.ReactNode;
  image?: React.ReactNode; // <-- image passed in from page
}

interface Props {
  slides: Slide[];
}

export default function SlideSectionTwo({ slides }: Props) {
  return (
    <div className="relative w-full font-serif">
      {slides.map((slide, index) => {
        const isLeft = index % 2 === 0; // alternate animation

        return (
          <section
            key={index}
            className="sticky top-0 h-screen flex items-center justify-center px-10"
            style={{
              backgroundColor: slide.bg || "#402e22",
              color: slide.textColor || "white",
            }}
          >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* TEXT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.4 }}
                className={`space-y-6 ${isLeft ? "" : "order-2 md:order-1"}`}
              >
                <h2 className="text-4xl font-bold">{slide.title}</h2>

                {slide.subtitle && (
                  <p className="text-xl opacity-70">{slide.subtitle}</p>
                )}

                <div className="text-lg leading-relaxed space-y-4">
                  {slide.content}
                </div>
              </motion.div>

              {/* IMAGE SIDE */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.4 }}
                className={`flex items-center justify-center 
                  ${isLeft ? "order-2 md:order-1" : "order-1 md:order-2"}`}
              >
                {slide.image ? (
                  slide.image
                ) : (
                  <div className="w-full h-[300px] md:h-[400px] bg-black/20 border border-white/20 rounded-xl flex items-center justify-center text-white/60">
                    No image provided
                  </div>
                )}
              </motion.div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
