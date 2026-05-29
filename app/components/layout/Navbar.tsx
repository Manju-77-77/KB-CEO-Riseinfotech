"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              KB
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Kumaresh Bidari
              </h2>
              <p className="text-xs text-gray-400">
                Founder & CEO
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
             
            >
              Schedule Consultation
              
            </button>
          </div>

          {/* Mobile */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
             title="Toggle navigation menu"
            aria-label="Toggle navigation menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0B1020] p-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}