
"use client";

const metrics = [
  {
    value: "10+",
    label: "Years Experience",
    description:
      "Enterprise SAP consulting and transformation projects.",
  },
  {
    value: "200+",
    label: "Successful Placements",
    description:
      "Professionals placed across leading organizations.",
  },
  {
    value: "100+",
    label: "Students Trained",
    description:
      "Industry-focused SAP training and mentorship.",
  },
  {
    value: "50+",
    label: "Enterprise Clients",
    description:
      "Businesses supported through SAP consulting services.",
  },
];

export default function ImpactMetrics() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-20 md:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900" />

      {/* Glow Effects */}
      <div
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-100 sm:text-sm">
            Impact & Achievements
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Delivering Results That
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Create Lasting Impact
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-blue-100/80 sm:text-lg">
            A proven track record of enterprise consulting,
            professional development, and successful digital
            transformation initiatives.
          </p>

        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/10
                p-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/15
              "
            >
              <h3 className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-5xl font-bold text-transparent">
                {metric.value}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-white">
                {metric.label}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
                {metric.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

