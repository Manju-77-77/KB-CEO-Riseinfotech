"use client";

const metrics = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "200+",
    label: "Successful Placements",
  },
  {
    value: "100+",
    label: "Students Trained",
  },
  {
    value: "50+",
    label: "Enterprise Clients",
  },
];

export default function ImpactMetrics() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-12 md:py-14"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-900" />

      {/* Glow */}
      <div
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-100">
            Impact & Achievements
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Delivering Measurable
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>

        </div>

        {/* Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/10
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/15
              "
            >
              <h3 className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-4xl font-bold text-transparent">
                {metric.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-white">
                {metric.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}