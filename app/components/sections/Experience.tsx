"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "TCS",
    fullName: "Tata Consultancy Services",
    role: "SAP MM Senior Consultant",
    logo: "/assets/tcs.png",
    year: "2012 – 2016",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "IBM",
    fullName: "IBM Corporation",
    role: "Advisory Consultant",
    logo: "/assets/ibm.png",
    year: "2016 – 2019",
    accent: "from-blue-400 to-blue-600",
  },
  {
    name: "NTT DATA",
    fullName: "NTT DATA Services",
    role: "Lead Consultant",
    logo: "/assets/nttdata.png",
    year: "2019 – 2021",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    name: "Rise Infotech",
    fullName: "Rise Infotech",
    role: "Founder & CEO",
    logo: "/assets/riseinfo.jpeg",
    year: "2021 – Present",
    accent: "from-sky-400 to-blue-700",
  },
];

export default function TrustedExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 shadow-sm shadow-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Professional Journey
          </span>

          <h2
            id="experience-heading"
            className="mt-5 text-3xl font-bold leading-tight text-[#0f1e3d] sm:text-4xl lg:text-5xl"
          >
            Trusted Experience Across{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Nearly a decade of SAP consulting, enterprise implementations,
            corporate training and digital transformation across globally
            recognized organizations.
          </p>
        </motion.header>

        {/* Cards */}
        <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company, index) => (
            <motion.li
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md shadow-blue-50 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60">
                {/* Top gradient bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${company.accent}`}
                />

                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Watermark number */}
                <span className="absolute right-4 top-4 select-none text-5xl font-black text-blue-50 transition-colors duration-300 group-hover:text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 p-6">
                  {/* Logo */}
                  <div className="mb-6 flex h-16 items-center">
                    <Image
                      src={company.logo}
                      alt={`${company.fullName} logo`}
                      width={180}
                      height={60}
                      className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-[2px] w-12 rounded-full bg-gradient-to-r ${company.accent} transition-all duration-300 group-hover:w-20`}
                  />

                  {/* Company Name */}
                  <h3 className="mt-4 text-xl font-bold text-[#0f1e3d]">
                    {company.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-1.5 text-sm font-medium text-blue-600">
                    {company.role}
                  </p>

                  {/* Year Badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    <span className="text-[11px] font-semibold tracking-wide text-blue-500">
                      {company.year}
                    </span>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40" />
    </section>
  );
}