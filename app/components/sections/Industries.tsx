"use client";
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
    title: "Food & Bakery",
    description:
      "End-to-end SAP consulting for manufacturing and distribution environments.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#071021] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Industries Served
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Delivering SAP Solutions
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Across Multiple Industries
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            Extensive experience helping organizations streamline operations,
            improve efficiency and accelerate digital transformation through
            enterprise SAP solutions.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Industry Number */}
                <span className="text-sm font-medium text-blue-400">
                  Industry
                </span>

                {/* Title */}
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/60 via-blue-400/20 to-transparent" />

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {industry.description}
                </p>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
