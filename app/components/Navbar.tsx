"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-cream-300 transition-colors duration-200 ${
      pathname === path ? "text-cream-400 underline" : "text-cream-100"
    }`;

  return (
   <nav className="w-full bg-[#2b1d0d]/95 backdrop-blur-sm fixed top-0 left-0 z-[9999] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif text-cream-100 tracking-wide hover:text-cream-300"
        >
          Healing Forward
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/concept-map" className={linkClass("/concept-map")}>
            Concept Map
          </Link>

          <Link href="/evidence" className={linkClass("/evidence")}>
            Evidence
          </Link>

          <Link href="/solutions" className={linkClass("/solutions")}>
            How We Help
          </Link>

          <Link href="/resources" className={linkClass("/resources")}>
            Resources
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>

          <Link href="/sources" className={linkClass("/sources")}>
            Sources Cited
          </Link>
        </div>

      </div>
    </nav>
  );
}
