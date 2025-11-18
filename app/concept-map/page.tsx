"use client";

import CanvasMap from "../components/CanvasMap";

export default function ConceptMapPage() {
  return (
    <div className="min-h-screen bg-[#694a2f] pt-20">
      <h2 className="text-center text-4xl font-serif font-bold text-cream-100 mb-8">
        Explore the Concept Map of Generational Trauma
      </h2>

      <div className="w-screen h-screen overflow-hidden">
        <CanvasMap />
      </div>
    </div>
  );
}
