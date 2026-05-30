
"use client";
const certifications = [
  {
    title: "SAP Certified Application Associate",
    subtitle: "SAP S/4HANA Sourcing & Procurement",
    category: "SAP Certification",
  },
  {
    title: "Supply Chain & Logistics Management",
    subtitle: "Materials Management Specialization",
    category: "Professional Certification",
  },
  {
    title: "Chemicals & Petroleum Insights",
    subtitle: "Industry Domain Expertise",
    category: "Industry Certification",
  },
  {
    title: "SAP Consulting Expertise",
    subtitle: "Implementation & Transformation Projects",
    category: "Professional Experience",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-[#071021] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Certifications & Credentials
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Recognized Expertise &
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Professional Credentials
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            Industry-recognized certifications and professional
            achievements supporting enterprise SAP consulting
            and digital transformation initiatives.
          </p>

        </div>

        {/* Certification Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
            >
              <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                {cert.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {cert.title}
              </h3>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />

              <p className="mt-5 text-gray-400 leading-relaxed">
                {cert.subtitle}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
