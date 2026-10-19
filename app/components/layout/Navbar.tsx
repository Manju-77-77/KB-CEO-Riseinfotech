"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Achievements", href: "#achievements" },
  { name: "Rise Infotech", href: "#rise-infotech" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const header = document.querySelector("body > main > header");
  const headerHeight = header?.getBoundingClientRect().height ?? 88;
  const extraGap = 16;

  const targetPosition =
    section.getBoundingClientRect().top +
    window.scrollY -
    headerHeight +
    extraGap;

  window.scrollTo({
    top: Math.max(0, targetPosition),
    behavior: "smooth",
  });
};




  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#${sectionId}`
      );

      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );

      scrollToSection("hero");
    } else {
      router.push("/#hero");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 shadow-[0_3px_14px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1700px] items-center justify-between gap-4 px-5 sm:px-8 lg:min-h-[88px] lg:px-10 xl:px-14">

        {/* Logo */}
        <a
          href="/#hero"
          onClick={handleLogoClick}
          aria-label="Kumaresh Bidari - Go to homepage hero section"
          className="flex shrink-0 items-center"
        >
          <div>
            <h2 className="whitespace-nowrap text-base font-extrabold tracking-tight text-blue-900 sm:text-lg lg:text-xl">
              Kumaresh Bidari
            </h2>
            <p className="mt-0.5 text-[11px] font-medium tracking-wider text-blue-600 sm:text-xs">
              Founder &amp; CEO
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-9"
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(event) =>
                handleNavClick(event, item.href.slice(1))
              }
              className="relative whitespace-nowrap py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-all after:duration-300 hover:after:w-full xl:text-base"
            >
              {item.name}
            </a>
          ))}
        </nav>

        
        {/* Desktop CTA */}
        <div className="hidden shrink-0 lg:block">
          <a
            href="#consultation-form"
            className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 xl:px-7"
          >
            Connect with me
          </a>
        </div>


        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200/70 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-xl sm:px-8 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) =>
                  handleNavClick(event, item.href.slice(1))
                }
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          
            <a
              href="#consultation-form"
              onClick={(event) =>
                handleNavClick(event, "consultation-form")
              }
              className="mt-3 flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-200"
            >
              Connect with me
            </a>

        </div>
      )}
    </header>
  );
}