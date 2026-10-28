
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const highlights = [
  {
    title: "SAP Training & Consulting",
    subtitle: "S/4HANA Expertise",
    link: "https://www.riseinfotech.in/courses/sap-mm/",
  },
  {
    title: "Corporate Training",
    subtitle: "Industry Focused",
    link: "https://www.riseinfotech.in/courses/corporate-training/",
  },
  {
    title: "Career Support",
    subtitle: "Professional Guidance",
    link: "#consultation-form",
  },
  {
    title: "ERP Solutions",
    subtitle: "Digital Transformation",
    link: "https://kumareshbidari.com/services",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/rise_infotech/",
    Icon: FaInstagram,
    brandColor: "text-[#E4405F]",
    hoverColor: "hover:border-pink-300 hover:bg-pink-50",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/rise-infotech/",
    Icon: FaLinkedin,
    brandColor: "text-[#0A66C2]",
    hoverColor: "hover:border-blue-300 hover:bg-blue-50",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@rise_infotech",
    Icon: FaYoutube,
    brandColor: "text-[#FF0000]",
    hoverColor: "hover:border-red-300 hover:bg-red-50",
  },
];

export default function RiseInfotech() {
  return (
    <section
      id="rise-infotech"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Background accents */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-50 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-cyan-50/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-12">
          {/* Left: Company information */}
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              Rise Infotech
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Empowering Businesses &amp;
              <span className="mt-1 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Future SAP Professionals
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Rise Infotech is a Bengaluru-based SAP consulting and training
              organization founded by Kumaresh Bidari. The company helps
              enterprises accelerate digital transformation while enabling
              professionals to build successful careers through practical
              learning, real-world exposure, and industry guidance.
            </p>

            {/* Clickable company highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const isInternalLink = item.link.startsWith("#");

                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target={isInternalLink ? undefined : "_blank"}
                    rel={
                      isInternalLink ? undefined : "noopener noreferrer"
                    }
                    aria-label={`${item.title} - ${item.subtitle}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                    className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_12px_35px_-10px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {item.subtitle}
                    </p>

                    {/* Redirect indicator */}
                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    >
                      ↗
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="https://www.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200/70"
              >
                Visit Rise Infotech Website

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.riseinfotech.in/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Contact Us
              </a>

              {/* Social media icons */}
              <div
                className="flex items-center justify-center gap-2.5 sm:ml-2"
                aria-label="Follow Rise Infotech on social media"
              >
                {socialLinks.map(
                  ({ name, href, Icon, brandColor, hoverColor }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Rise Infotech on ${name}`}
                      title={name}
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${brandColor} ${hoverColor}`}
                    >
                      <Icon size={23} aria-hidden="true" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Office image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-100 via-transparent to-cyan-100 opacity-80 blur-sm" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)]">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/assets/rise2.jpeg"
                  alt="Rise Infotech Office"
                  width={1200}
                  height={800}
                  className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[340px] lg:h-[460px]"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 left-5 rounded-2xl border border-slate-200 bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm sm:left-8">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Consulting &amp; Training
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                Rise Infotech
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
