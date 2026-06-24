"use client";

const metrics = [
  {
    value: "10+",
    label: "SAP Industry Experience",
  },
  {
    value: "5+",
    label: "SAP MM Training Experience",
  },
  
  {
    value: "SAP",
    label: "S/4HANA Expertise",
  },
  {
    value: "6+",
    label: "Industries Served",
  },
];

export default function ImpactMetrics() {
  return (
    <section
  id="achievements"
  className="relative overflow-hidden py-12 md:py-14"
>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />

  {/* Glow Effects */}
  <div
    className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/50 blur-[120px]"
    aria-hidden="true"
  />

  <div
    className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-200/50 blur-[120px]"
    aria-hidden="true"
  />

  <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="mx-auto mb-10 max-w-2xl text-center">

      <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-700 shadow-sm">
        Impact & Achievements
      </span>

      <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        Delivering Measurable
        <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Business Impact
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
        Driving enterprise transformation through SAP expertise,
        corporate training, implementation excellence, and measurable
        business outcomes.
      </p>

    </div>

    {/* Metrics */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="
            rounded-3xl
            border
            border-blue-100
            bg-white
            p-6
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-300
            hover:shadow-xl
            hover:shadow-blue-100
          "
        >
          <h3 className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
            {metric.value}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-600">
            {metric.label}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
  );
}