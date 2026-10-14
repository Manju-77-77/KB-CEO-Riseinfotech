"use client";

import { motion, useReducedMotion } from "framer-motion";

const industries = [
  {
    title: "Oil & Gas",
    description:
      "SAP implementations and enterprise transformation for energy and petroleum operations.",
  },
  {
    title: "Energy & Utilities",
    description:
      "Process optimization and ERP modernization for utility organizations.",
  },
  {
    title: "Chemical",
    description:
      "Enterprise SAP solutions supporting manufacturing and supply chain operations.",
  },
  {
    title: "Healthcare",
    description:
      "Business process automation and operational excellence through SAP solutions.",
  },
  {
    title: "Electronics",
    description:
      "Supporting procurement, inventory and production management processes.",
  },
  {
    title: "Food & Beverages",
    description:
      "End-to-end SAP consulting for manufacturing and distribution environments.",
  },
];

export default function Industries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-14 md:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        {/* Header - Original Layout */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
            Industries Served
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Delivering SAP Solutions
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Across Multiple Industries
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Extensive experience helping organizations streamline
            operations, improve efficiency, and accelerate digital
            transformation through enterprise SAP solutions.
          </p>
        </motion.div>

        {/* Grid - Original Dimensions and Spacing */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{
                opacity: 0,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : (index % 3) * 0.12,
                ease: "easeOut",
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-md
                shadow-slate-100
                transition-[border-color,box-shadow]
                duration-500
                hover:border-blue-400
                hover:shadow-2xl
                hover:shadow-slate-900/15
              "
            >
              {/* Animated Top Border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-300 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transform-none"
              />

              {/* Hover Glow - No Layout Change */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/70 via-transparent to-cyan-50/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative z-10">
                {/* Number - Original Dimensions */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-sm font-bold text-blue-600 transition-colors duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title - Stationary */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {industry.title}
                </h3>

                {/* Divider - Original Position */}
                <div className="mt-3 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

                {/* Description - Stationary */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {industry.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}