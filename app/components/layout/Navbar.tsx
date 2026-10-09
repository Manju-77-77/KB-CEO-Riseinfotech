
"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Industries", href: "#industries" },
  { name: "Services", href: "#services" },
  { name: "Rise Infotech", href: "#rise-infotech" },
  { name: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-md backdrop-blur-md lg:px-6">

          {/* Logo */}
          <div
            className="flex shrink-0 cursor-pointer items-center gap-3"
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <div>
              <h2 className="text-base font-extrabold tracking-tight sm:text-lg">
                <span className="text-blue-900">Kumaresh</span>{" "}
                <span className="text-blue-900">Bidari</span>
              </h2>

              <p className="text-xs font-medium tracking-wider text-blue-600">
                Founder & CEO
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7 2xl:gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative shrink-0 whitespace-nowrap
                  text-md font-medium text-black-600
                  transition-colors duration-300
                  hover:text-blue-600
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-blue-600
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden shrink-0 lg:block">
            <a
              href="https://api.whatsapp.com/send/?phone=919110455125&text=Hi%2C+I%E2%80%99m+interested+in+SAP+training+at+Rise+Infotech.+Please+share+course+details%2C+fees%2C+and+upcoming+batch+timings.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500
                px-5 py-3 text-sm font-semibold text-white
                transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-blue-200
              "
            >
              Connect with me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-900 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg px-3 py-2 text-sm font-medium
                    text-slate-700 transition
                    hover:bg-blue-50 hover:text-blue-600
                  "
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://enroll.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2 rounded-xl bg-gradient-to-r
                  from-blue-600 to-cyan-500 px-5 py-3
                  text-center text-sm font-semibold text-white
                "
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
