"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 font-serif text-lg transition ${
      pathname === path
        ? "text-cream-100 border-b-2 border-cream-200"
        : "text-cream-300 hover:text-cream-100"
    }`;

  return (
    <nav className="w-full bg-[#2b1d0d]/95 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif text-cream-100 tracking-wide">
          Healing Forward
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-cream-100 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link className={linkClass("/")} href="/">Home</Link>
          <Link className={linkClass("/concept-map")} href="/concept-map">Concept Map</Link>
          <Link className={linkClass("/evidence")} href="/evidence">Evidence</Link>
          <Link className={linkClass("/solutions")} href="/solutions">How We Help</Link>
          <Link className={linkClass("/resources")} href="/resources">Resources</Link>
          <Link className={linkClass("/about")} href="/about">About Us</Link>
          <Link className={linkClass("/sources")} href="/sources">Sources Cited</Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#2b1d0d] border-t border-cream-300/20">
          <Link className={linkClass("/")} href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className={linkClass("/concept-map")} href="/concept-map" onClick={() => setOpen(false)}>Concept Map</Link>
          <Link className={linkClass("/evidence")} href="/evidence" onClick={() => setOpen(false)}>Evidence</Link>
          <Link className={linkClass("/solutions")} href="/solutions" onClick={() => setOpen(false)}>How We Help</Link>
          <Link className={linkClass("/resources")} href="/resources" onClick={() => setOpen(false)}>Resources</Link>
          <Link className={linkClass("/about")} href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link className={linkClass("/sources")} href="/sources" onClick={() => setOpen(false)}>Sources Cited</Link>
        </div>
      )}
    </nav>
  );
}
