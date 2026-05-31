import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* ── SEO: Structured background (decorative, hidden from a11y) ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-5 pt-24 sm:px-6 lg:px-10 lg:pt-28">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-10">

          {/* ── TEXT CONTENT ── */}
          <div className="order-2 lg:order-1">

            {/* Badge — semantic landmark, aria-label describes role */}
            <div
              className="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-lg"
              aria-label="Current role"
            >
              <span className="text-xs font-medium text-blue-400 sm:text-sm">
                Founder &amp; CEO • Rise Infotech
              </span>
            </div>

            {/* SEO: h1 = person's name (primary keyword) */}
            <h1 className="mb-4 max-w-[700px] text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
              {profile.name}
            </h1>

            {/* SEO: h2 = value proposition / headline keyword phrase */}
            <h2 className="mb-6 max-w-[700px] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl xl:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {profile.headline}
              </span>
            </h2>

            {/* SEO: descriptive paragraph for crawlers */}
            <p className="mb-8 max-w-[650px] text-base leading-relaxed text-gray-400 sm:text-lg">
              {profile.subtitle}
            </p>

            {/* Experience Tags — semantic list for accessibility & SEO */}
            <ul
              className="mb-10 flex flex-wrap gap-3 list-none p-0"
              aria-label="Professional experience highlights"
            >
              {["Ex-TCS", "IBM", "NTT DATA", "SAP S/4HANA Expert"].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-md sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons — descriptive aria-labels for screen readers */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] sm:w-auto"
                aria-label="Schedule a consultation with the founder"
              >
                Schedule Consultation
              </button>

              <button
                className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-lg transition-all duration-300 hover:bg-white/10 sm:w-auto"
                aria-label="View professional journey and career highlights"
              >
                View Journey
              </button>
            </div>

            {/* Stats — semantic list with accessible labels */}
            <ul
              className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 list-none p-0"
              aria-label="Key professional statistics"
            >
              {profile.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
                >
                  {/* SEO: h3 for nested heading hierarchy */}
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── IMAGE CONTENT ── */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">

            {/* Decorative glow — hidden from a11y */}
            <div
              className="absolute h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]"
              aria-hidden="true"
            />

            {/* Profile Image — descriptive alt text for SEO */}
            <div className="relative h-[320px] w-[240px] overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_0_80px_rgba(37,99,235,0.15)] sm:h-[400px] sm:w-[300px] lg:h-[520px] lg:w-[400px] lg:rounded-[32px]">
              <Image
                src={profile.image}
                alt={`${profile.name} — Founder & CEO of Rise Infotech, SAP S/4HANA Expert`}
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 400px"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating Card 1 — aria-label for screen readers */}
            <div
              className="absolute left-[-40px] top-24 hidden rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl lg:block"
              aria-label="10+ years of professional experience"
            >
              <p className="text-sm text-gray-400">Experience</p>
              <h3 className="text-2xl font-bold">10+ Years</h3>
            </div>

            {/* Floating Card 2 */}
            <div
              className="absolute right-[-30px] bottom-24 hidden rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl lg:block"
              aria-label="SAP S/4HANA expertise"
            >
              <p className="text-sm text-gray-400">SAP Expertise</p>
              <h3 className="text-2xl font-bold">S/4HANA</h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}