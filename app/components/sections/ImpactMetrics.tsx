"use client";
const metrics = [
  {
    value: "10+",
    label: "Years Experience",
    description: "Enterprise SAP consulting and transformation projects.",
  },
  {
    value: "200+",
    label: "Successful Placements",
    description: "Professionals placed across leading organizations.",
  },
  {
    value: "100+",
    label: "Students Trained",
    description: "Industry-focused SAP training and mentorship.",
  },
  {
    value: "50+",
    label: "Enterprise Clients",
    description: "Businesses supported through SAP consulting services.",
  },
];

export default function ImpactMetrics() {
  return (
    <section
      id="achievements"
      className="relative bg-[#071021] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Impact & Achievements
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Delivering Results That
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Create Lasting Impact
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            A track record of enterprise consulting, professional
            development and successful digital transformation initiatives.
          </p>

        </div>

        {/* Metrics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
            >
              <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-5xl font-bold text-transparent">
                {metric.value}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-white">
                {metric.label}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {metric.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

