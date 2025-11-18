"use client";
import React, { useEffect, useRef } from "react";
import panzoom from "panzoom";

export default function CanvasMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/concept-map.png";

    img.onload = () => {
      const originalWidth = img.width;
      const originalHeight = img.height;

      // Set canvas to full resolution of image
      canvas.width = originalWidth;
      canvas.height = originalHeight;

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);

      const pan = panzoom(canvas, {
        maxZoom: 15,
        minZoom: 0.02,
        smoothScroll: true,
        zoomSpeed: 0.065,
        filterKey: () => true,
      });

      // Fit to the screen **by width**, NOT height (for huge images)
      const fitScale = Math.min(
        window.innerWidth / originalWidth,
        window.innerHeight / originalHeight
      );

      const centerX = originalWidth / 2;
      const centerY = originalHeight / 2;

      // 1️⃣ zoom first
      pan.zoomAbs(centerX, centerY, fitScale);

      // 2️⃣ then move to center
      pan.moveTo(
        window.innerWidth / 2 - centerX * fitScale,
        window.innerHeight / 2 - centerY * fitScale
      );
    };
  }, []);

  return (
    <div
      id="map-container"
      className="w-full h-screen overflow-hidden relative bg-branch"
    >
      <canvas
        ref={canvasRef}
        id="map-canvas"
        className="block cursor-grab"
      />
    </div>
  );
}
