"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 font-serif text-lg transition ${
      pathname === path
        ? "text-cream-100 border-b-2 border-cream-200"
        : "text-cream-300 hover:text-cream-100"
    }`;

  return (
    <nav className="w-full bg-[#2b1d0d]/95 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-serif text-cream-100 tracking-wide">
          Healing Forward
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link className={linkClass("/")} href="/">
            Home
          </Link>

          <Link className={linkClass("/concept-map")} href="/concept-map">
            Concept Map
          </Link>

          <Link className={linkClass("/evidence")} href="/evidence">
            Evidence
          </Link>

          <Link className={linkClass("/solutions")} href="/solutions">
            How We Help
          </Link>

          <Link className={linkClass("/resources")} href="/resources">
            Resources 
          </Link>

          <Link className={linkClass("/about")} href="/about">
            About Us
          </Link>

          <Link className={linkClass("/sources")} href="/sources">
            Sources Cited
          </Link>
        </div>
      </div>
    </nav>
  );
}
