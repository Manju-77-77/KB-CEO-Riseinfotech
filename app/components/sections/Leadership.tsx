
"use client";

const insights = [
  {
    title: "SAP S/4HANA Transformation",
    description:
      "Helping organizations modernize ERP landscapes through SAP S/4HANA adoption and enterprise-wide digital transformation initiatives.",
  },
  {
    title: "Digital Supply Chain",
    description:
      "Building intelligent supply chains through automation, analytics, and next-generation SAP innovations.",
  },
  {
    title: "Enterprise Transformation",
    description:
      "Aligning technology, people, and business processes to drive operational excellence and sustainable growth.",
  },
];

export default function ThoughtLeadership() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-slate-50 py-14 md:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
            Thought Leadership
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Insights, Innovation &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Industry Perspectives
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Strategic insights on SAP transformation, enterprise technology,
            digital supply chains, and business innovation.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {insights.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                shadow-slate-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
                hover:shadow-blue-100
              "
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Number */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

