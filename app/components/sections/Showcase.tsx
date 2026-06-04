 
"use client";

export default function RiseInfotech() {
  return (
    <section
      id="rise-infotech"
      className="relative overflow-hidden bg-white py-14 md:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
              Rise Infotech
            </span>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Building Future SAP
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Professionals & Enterprises
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Rise Infotech is a leading SAP Training and IT Consulting
              organization headquartered in Bengaluru, helping
              professionals build successful careers while enabling
              businesses to achieve digital transformation through
              enterprise SAP solutions.
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Through practical training, real-time projects,
              implementation support, and placement assistance,
              Rise Infotech bridges the gap between industry
              requirements and professional readiness.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700">
                Explore Services
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-100">
                Contact Rise Infotech
              </button>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
              <h3 className="text-4xl font-bold text-blue-600">
                200+
              </h3>

              <p className="mt-3 font-medium text-slate-900">
                Successful Placements
              </p>

              <p className="mt-2 text-sm text-slate-600">
                SAP professionals placed across leading organizations.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
              <h3 className="text-4xl font-bold text-blue-600">
                SAP
              </h3>

              <p className="mt-3 font-medium text-slate-900">
                Corporate Training
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Industry-focused learning programs with real-world projects.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
              <h3 className="text-4xl font-bold text-blue-600">
                ERP
              </h3>

              <p className="mt-3 font-medium text-slate-900">
                Consulting Services
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Enterprise SAP consulting and digital transformation solutions.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
              <h3 className="text-4xl font-bold text-blue-600">
                100%
              </h3>

              <p className="mt-3 font-medium text-slate-900">
                Placement Support
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Career guidance, interview preparation, and hiring support.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

