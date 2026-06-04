
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Services", href: "#services" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-lg shadow-slate-100 backdrop-blur-xl">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white shadow-lg shadow-blue-200">
              KB
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-900 sm:text-base">
                Kumaresh Bidari
              </h2>

              <p className="text-xs text-slate-500">
                Founder & CEO
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">

            <button
              className="
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-700
                hover:shadow-lg
                hover:shadow-blue-200
              "
            >
              Schedule Consultation
            </button>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-900 lg:hidden"
            aria-label="Toggle navigation menu"
            title="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100 lg:hidden">

            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:text-blue-600
                  "
                >
                  {item.name}
                </a>
              ))}

              <button
                className="
                  mt-2
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Schedule Consultation
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}