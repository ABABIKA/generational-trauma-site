"use client";

import { motion } from "framer-motion";

export default function SlideSection({
  title,
  label,
  children,
  image,
}: {
  title: string;
  label: string;
  children: React.ReactNode;
  image?: React.ReactNode;
}) {
  return (
    <section className="sticky top-0 h-screen flex items-center justify-center bg-[#50583a] text-white px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-sm px-4 py-1 bg-black/30 rounded-full">
            {label}
          </span>

          <h2 className="text-6xl font-bold mt-4">{title}</h2>

          <div className="mt-6 p-6 bg-black/20 rounded-xl border border-white/10">
            {children}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center"
        >
          {image ? (
            image
          ) : (
            <div className="w-full h-[350px] md:h-[450px] border border-white/20 rounded-xl flex items-center justify-center text-white/60">
              Image will go here
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
