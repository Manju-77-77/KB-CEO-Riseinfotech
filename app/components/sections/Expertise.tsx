"use client";
const expertise = [
  {
    title: "SAP S/4HANA",
    description: "On-Premise, Private Cloud & Public Cloud implementations.",
  },
  {
    title: "SAP MM",
    description: "Procurement, inventory and material management expertise.",
  },
  {
    title: "SAP Fiori",
    description: "Modern SAP user experiences and application delivery.",
  },
  {
    title: "SAP SolMan",
    description: "Application lifecycle management and support operations.",
  },
  {
    title: "Global Rollouts",
    description: "Enterprise-scale SAP deployments across regions.",
  },
  {
    title: "Data Migration",
    description: "LSMW, LTMC and SAP Migration Cockpit expertise.",
  },
  {
    title: "AMS Support",
    description: "Application maintenance and post-go-live support.",
  },
  {
    title: "SAP Training",
    description: "Corporate training and placement-focused programs.",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Core Expertise
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Enterprise SAP Solutions &
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            Delivering enterprise-grade SAP solutions, consulting,
            implementation and training services across industries.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

