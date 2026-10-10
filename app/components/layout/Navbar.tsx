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

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=919110455125&text=Hi%2C+I%E2%80%99m+interested+in+SAP+training+at+Rise+Infotech.+Please+share+course+details%2C+fees%2C+and+upcoming+batch+timings.&type=phone_number&app_absent=0";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 110;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, sectionPosition - navbarOffset),
      behavior: "smooth",
    });
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
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-white">
      {/* Navbar outer container */}
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Navbar panel */}
        <div className="mt-4 flex min-h-[72px] items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-md lg:px-8">

          {/* Logo */}
          <a
            href="/#hero"
            onClick={handleLogoClick}
            className="flex shrink-0 items-center gap-3"
            aria-label="Kumaresh Bidari - Go to homepage hero section"
          >
            <div>
              <h2 className="text-base font-extrabold tracking-tight sm:text-lg">
                <span className="text-blue-900">Kumaresh</span>{" "}
                <span className="text-blue-900">Bidari</span>
              </h2>

              <p className="text-xs font-medium tracking-wider text-blue-600">
                Founder &amp; CEO
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
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

          {/* Desktop Connect with Me */}
          <div className="hidden shrink-0 lg:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center whitespace-nowrap
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
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="shrink-0 text-slate-900 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
            <div className="flex flex-col gap-3">
              {/* Mobile Navigation Links */}
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

              {/* Mobile Connect with Me */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  mt-2 rounded-xl bg-gradient-to-r
                  from-blue-600 to-cyan-500 px-5 py-3
                  text-center text-sm font-semibold text-white
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-200
                "
              >
                Connect with me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}