"use client";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Kumaresh Bidari
            </h2>

            <p className="leading-relaxed text-gray-400">
              Founder & CEO of Rise Infotech helping organizations and
              professionals achieve excellence through SAP innovation and
              enterprise transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
              <a href="#skills" className="hover:text-white transition">
                Expertise
              </a>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 9110421024</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>kumaresh.bidari@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Bengaluru, Karnataka, India</span>
              </div>

              <a
                href="https://www.linkedin.com/in/kumaresh-bidari074"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>

            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kumaresh Bidari. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}