"use client";
const insights = [
  {
    title: "SAP S/4HANA Transformation",
    description:
      "Helping organizations modernize ERP landscapes through SAP S/4HANA adoption.",
  },
  {
    title: "Digital Supply Chain",
    description:
      "Building intelligent supply chains through automation and SAP innovations.",
  },
  {
    title: "Enterprise Transformation",
    description:
      "Aligning technology and business processes for sustainable growth.",
  },
];

export default function ThoughtLeadership() {
  return (
    <section
      id="insights"
      className="relative bg-[#071021] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400">
            Thought Leadership
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Insights, Innovation &
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Industry Perspectives
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

