"use client";
export default function RiseInfotech() {
  return (
    <section
      id="rise-infotech"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
              Rise Infotech
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Building Future SAP
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Professionals & Enterprises
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
              Rise Infotech is a leading SAP Training and IT Consulting
              organization headquartered in Bengaluru, helping
              professionals build successful careers while enabling
              businesses to achieve digital transformation through
              enterprise SAP solutions.
            </p>

            <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
              Through practical training, real-time projects,
              implementation support and placement assistance,
              Rise Infotech bridges the gap between industry
              requirements and professional readiness.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500">
                Explore Services
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/[0.05]">
                Contact Rise Infotech
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-blue-400">
                200+
              </h3>
              <p className="mt-2 text-white font-medium">
                Successful Placements
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-blue-400">
                SAP
              </h3>
              <p className="mt-2 text-white font-medium">
                Corporate Training
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-blue-400">
                ERP
              </h3>
              <p className="mt-2 text-white font-medium">
                Consulting Services
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-blue-400">
                100%
              </h3>
              <p className="mt-2 text-white font-medium">
                Placement Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

