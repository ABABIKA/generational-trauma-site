"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `px-4 py-2 font-serif text-lg transition ${
      pathname === path
        ? "text-cream-100 border-b-2 border-cream-200"
        : "text-cream-300 hover:text-cream-100"
    }`;

  return (
    <nav className="w-full bg-[#2b1d0d]/95 backdrop-blur-sm fixed top-0 left-0 z-[99999] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-serif text-cream-100 tracking-wide"
        >
          Healing Forward
        </Link>

        {/* ---- Desktop Links ---- */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/concept-map" className={linkClass("/concept-map")}>Concept Map</Link>
          <Link href="/evidence" className={linkClass("/evidence")}>Evidence</Link>
          <Link href="/solutions" className={linkClass("/solutions")}>How We Help</Link>
          <Link href="/resources" className={linkClass("/resources")}>Resources</Link>
          <Link href="/about" className={linkClass("/about")}>About Us</Link>
          <Link href="/sources" className={linkClass("/sources")}>Sources Cited</Link>
        </div>

        {/* ---- Mobile Hamburger ---- */}
        <button
          className="md:hidden text-cream-100 text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ---- Mobile Menu ---- */}
      {open && (
        <div className="md:hidden flex flex-col bg-[#2b1d0d]/95 px-6 pb-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>Home</Link>
          <Link href="/concept-map" onClick={() => setOpen(false)} className={linkClass("/concept-map")}>Concept Map</Link>
          <Link href="/evidence" onClick={() => setOpen(false)} className={linkClass("/evidence")}>Evidence</Link>
          <Link href="/solutions" onClick={() => setOpen(false)} className={linkClass("/solutions")}>How We Help</Link>
          <Link href="/resources" onClick={() => setOpen(false)} className={linkClass("/resources")}>Resources</Link>
          <Link href="/about" onClick={() => setOpen(false)} className={linkClass("/about")}>About Us</Link>
          <Link href="/sources" onClick={() => setOpen(false)} className={linkClass("/sources")}>Sources Cited</Link>
        </div>
      )}
    </nav>
  );
}
