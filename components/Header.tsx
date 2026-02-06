"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Start" },
  { href: "#uber-tommy", label: "Über Tommy" },
  { href: "#philosophie", label: "Philosophie" },
  { href: "#kreationen", label: "Kreationen" },
  { href: "#events-angebote", label: "Events" },
  { href: "#contacto", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone/20">
      <div className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <Link
          href="#hero"
          className="font-serif text-lg sm:text-xl font-medium text-carbon hover:text-gold transition-colors"
        >
          Tommy Eder
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-carbon-soft text-sm font-medium hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#projekte"
            className="text-white text-sm font-medium bg-carbon px-4 py-2 rounded-sm hover:bg-[#2A2A28] transition-colors"
          >
            SOY & SOUL
          </Link>
        </nav>

        {/* Hamburger button - min 44px touch target */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 min-h-[44px] min-w-[44px] rounded-md text-carbon hover:bg-stone/10 transition-colors"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <span
            className={`block w-5 h-0.5 bg-carbon rounded transition-transform ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-carbon rounded my-1 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-carbon rounded transition-transform ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-4 pb-4 pt-2 border-t border-stone/20 flex flex-col gap-1"
          aria-label="Navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-carbon-soft font-medium hover:text-gold hover:bg-stone/5 rounded-md transition-colors min-h-[44px] flex items-center"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#projekte"
            onClick={() => setOpen(false)}
            className="py-3 px-2 text-white font-medium bg-carbon hover:bg-[#2A2A28] rounded-md transition-colors min-h-[44px] flex items-center"
          >
            SOY & SOUL
          </Link>
        </nav>
      </div>
    </header>
  );
}
