"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 lg:px-10">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white">
                KB
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Kumaresh Bidari
                </h2>

                <p className="text-sm text-slate-400">
                  Founder & CEO, Rise Infotech
                </p>
              </div>

            </div>

            <p className="max-w-md leading-relaxed text-slate-400">
              SAP S/4HANA Consultant, Corporate Trainer, and Founder of
              Rise Infotech, helping organizations accelerate digital
              transformation and empowering professionals to build
              successful SAP careers.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3">

              <a
                href="#about"
                className="text-slate-400 transition hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#experience"
                className="text-slate-400 transition hover:text-blue-400"
              >
                Experience
              </a>

              <a
                href="#expertise"
                className="text-slate-400 transition hover:text-blue-400"
              >
                Expertise
              </a>

              <a
                href="#services"
                className="text-slate-400 transition hover:text-blue-400"
              >
                Services
              </a>

              <a
                href="#insights"
                className="text-slate-400 transition hover:text-blue-400"
              >
                Insights
              </a>

              <a
                href="#contact"
                className="text-slate-400 transition hover:text-blue-400"
              >
                Contact
              </a>

            </nav>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Information
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3 text-slate-400">
                <Phone
                  size={18}
                  className="mt-1 text-blue-400"
                />
                <span>+91 9110421024</span>
              </div>

              <div className="flex items-start gap-3 text-slate-400">
                <Mail
                  size={18}
                  className="mt-1 text-blue-400"
                />
                <span>kumaresh.bidari@gmail.com</span>
              </div>

              <div className="flex items-start gap-3 text-slate-400">
                <MapPin
                  size={18}
                  className="mt-1 text-blue-400"
                />
                <span>Bengaluru, Karnataka, India</span>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8">

              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Connect
              </p>

              <div className="flex items-center gap-4">

                <a
                  href="https://www.linkedin.com/in/kumaresh-bidari074"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    border border-slate-700
                    bg-slate-900
                    text-[#0A66C2]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#0A66C2]
                    hover:shadow-lg
                    hover:shadow-[#0A66C2]/20
                  "
                >
                  <FaLinkedin size={24} />
                </a>

                <a
                  href="https://www.instagram.com/kumaresh.bidari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    border border-slate-700
                    bg-slate-900
                    text-[#E1306C]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#E1306C]
                    hover:shadow-lg
                    hover:shadow-[#E1306C]/20
                  "
                >
                  <FaInstagram size={24} />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Kumaresh Bidari. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by Rise Infotech
          </p>

        </div>

      </div>
    </footer>
  );
}