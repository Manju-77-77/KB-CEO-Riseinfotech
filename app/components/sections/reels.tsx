"use client";

import Image from "next/image";
import { FaInstagram, FaPlay } from "react-icons/fa";

const reels = [
  {
    title: "SAP MM Career Insights",
    description:
      "Learn how to build a successful career in SAP S/4HANA MM with industry-oriented guidance and practical insights.",
    image: "/assets/reel1.png",
    link: "https://www.instagram.com/reel/DTj8VBlAL6x/",
  },
  {
    title: "SAP Training & Learning",
    description:
      "Explore real-time project-based SAP training approaches and professional growth opportunities.",
    image: "/assets/reel2.png",
    link: "https://www.instagram.com/reel/DThnqmaDIm3/",
  },
  {
    title: "Industry Experience & Consulting",
    description:
      "Gain insights into SAP consulting, implementation projects, and enterprise best practices.",
    image: "/assets/reel3.png",
    link: "https://www.instagram.com/reel/DTdUd41DPD3/",
  },
  {
    title: "Leadership & Transformation",
    description:
      "Thoughts on leadership, digital transformation, and building successful careers in SAP.",
    image: "/assets/reel4.png",
    link: "https://www.instagram.com/reel/DTAAkgql877/",
  },
];

export default function InstagramInsights() {
  return (
    <section
      id="instagram-insights"
      className="relative overflow-hidden bg-slate-50 py-12 md:py-14 lg:py-16"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-pink-600">
            Instagram Highlights
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            SAP Insights, Leadership &
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Explore SAP consulting insights, career guidance,
            leadership lessons, industry expertise and business
            transformation knowledge shared by Kumaresh Bidari.
          </p>

          <a
            href="https://www.instagram.com/kumaresh_bidari/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex items-center gap-2 rounded-xl
              bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
              px-6 py-3 font-semibold text-white
              transition-all duration-300 hover:scale-105
            "
          >
            <FaInstagram size={18} />
            Follow on Instagram
          </a>

        </div>

        {/* Reels Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {reels.map((reel, index) => (
            <a
              key={reel.title}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group overflow-hidden rounded-2xl
                border border-slate-200 bg-white
                shadow-sm transition-all duration-300
                hover:-translate-y-2
                hover:border-pink-200
                hover:shadow-xl
              "
            >

              {/* Thumbnail */}
              <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden">

                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Reel Number */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-slate-900 shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-full bg-white/95 shadow-lg
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    <FaPlay
                      size={18}
                      className="ml-1 text-pink-600"
                    />
                  </div>

                </div>

                {/* Instagram Badge */}
                <div
                  className="
                    absolute bottom-4 left-4
                    flex items-center gap-2
                    rounded-full bg-white
                    px-3 py-1 text-xs font-medium
                    text-slate-700 shadow-md
                  "
                >
                  <FaInstagram size={12} />
                  Instagram Reel
                </div>

              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-base font-semibold text-slate-900">
                  {reel.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {reel.description}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-sm font-medium text-pink-600">
                    Watch Reel
                  </span>

                  <FaInstagram
                    size={18}
                    className="text-pink-600"
                  />

                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}