"use client";

import { motion } from "framer-motion";

export default function TitleLoader() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#20160F] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
    >
      {/* SVG DRAWING */}
      <motion.svg
        width="700"
        height="300"
        viewBox="0 0 700 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-cream-100"
      >
        {/* TITLE OUTLINE */}
        <motion.text
          x="50%"
          y="45%"
          textAnchor="middle"
          fontSize="64"
          fontFamily="Georgia, serif"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Generational Trauma
        </motion.text>

        {/* SUBTITLE SWISH UNDERLINE */}
        <motion.line
          x1="150"
          y1="200"
          x2="550"
          y2="200"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}
