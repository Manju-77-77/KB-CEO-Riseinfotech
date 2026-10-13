
"use client";

import Experience from "./Experience";
import Expertise from "./Expertise";
import Industries from "./Industries";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const timeline = [
  { year: "2015", title: "SAP Consulting Career", desc: "Started professional journey in SAP consulting, focusing on enterprise solutions, procurement processes, and business transformation." },
  { year: "2018", title: "TCS", desc: "Worked as SAP Consultant delivering SAP implementations, support engagements, and business process optimization for enterprise clients." },
  { year: "2022", title: "IBM", desc: "Served as Advisory Consultant contributing to SAP transformation programs, solution design, and enterprise modernization initiatives." },
  { year: "2024", title: "NTT DATA", desc: "Worked as Lead Consultant driving SAP implementations, global rollout programs, and large-scale enterprise transformation projects." },
  { year: "2025", title: "Rise Infotech", desc: "Founded Rise Infotech to empower organizations and professionals through SAP consulting, corporate training, and career development programs." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef<number | null>(null);
  const secondFrameRef = useRef<number | null>(null);
  const hasReachedFinalRef = useRef(false);
  const finalBlinkTimeoutRef = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(timeline.map(() => false));
  const [progress, setProgress] = useState(0);
  const [journeyCompleted, setJourneyCompleted] = useState(false);
  const [finalCardBlink, setFinalCardBlink] = useState(false);
  const [lineBounds, setLineBounds] = useState({ top: 16, height: 0 });

  const updateLineBounds = useCallback(() => {
    const list = listRef.current;
    const first = markerRefs.current[0];
    const last = markerRefs.current[timeline.length - 1];

    if (
      !list || !first || !last ||
      getComputedStyle(first).display === "none" ||
      getComputedStyle(last).display === "none"
    ) return;

    const listTop = list.getBoundingClientRect().top;
    const firstRect = first.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    const firstCenter = firstRect.top + firstRect.height / 2 - listTop;
    const lastCenter = lastRect.top + lastRect.height / 2 - listTop;

    setLineBounds({
      top: firstCenter,
      height: Math.max(0, lastCenter - firstCenter),
    });
  }, []);

  const updateTimeline = useCallback(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const activationPoint = window.innerHeight * 0.43;
    const sectionRect = section.getBoundingClientRect();
    let nextActive = 0;

    if (sectionRect.top <= activationPoint && sectionRect.bottom > 0) {
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const marker = markerRefs.current[index];
        const markerVisible = !!marker && getComputedStyle(marker).display !== "none";
        const rect = markerVisible
          ? marker!.getBoundingClientRect()
          : item.getBoundingClientRect();
        const position = markerVisible ? rect.top + rect.height / 2 : rect.top;

        if (position <= activationPoint) nextActive = index;
      });

      setRevealed(previous => {
        let changed = false;
        const next = previous.map((shown, index) => {
          if (index <= nextActive && !shown) {
            changed = true;
            return true;
          }
          return shown;
        });
        return changed ? next : previous;
      });
    }

    if (
      nextActive === timeline.length - 1 &&
      !hasReachedFinalRef.current
    ) {
      hasReachedFinalRef.current = true;
      setJourneyCompleted(true);
      setFinalCardBlink(true);

      finalBlinkTimeoutRef.current = window.setTimeout(() => {
        setFinalCardBlink(false);
        finalBlinkTimeoutRef.current = null;
      }, 900);
    }

    setActive(previous => previous === nextActive ? previous : nextActive);

    const first = markerRefs.current[0];
    const current = markerRefs.current[nextActive];

    if (
      first && current &&
      getComputedStyle(first).display !== "none" &&
      getComputedStyle(current).display !== "none"
    ) {
      const listTop = list.getBoundingClientRect().top;
      const firstRect = first.getBoundingClientRect();
      const currentRect = current.getBoundingClientRect();
      const firstCenter = firstRect.top + firstRect.height / 2 - listTop;
      const currentCenter = currentRect.top + currentRect.height / 2 - listTop;
      const nextProgress = Math.max(0, currentCenter - firstCenter);

      setProgress(previous =>
        Math.abs(previous - nextProgress) > 0.5 ? nextProgress : previous
      );
    } else {
      setProgress(0);
    }
  }, []);

  useEffect(() => {
    const scheduleUpdate = () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (secondFrameRef.current !== null) cancelAnimationFrame(secondFrameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        secondFrameRef.current = requestAnimationFrame(() => {
          secondFrameRef.current = null;
          updateTimeline();
          updateLineBounds();
        });
      });
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateTimeline();
        updateLineBounds();
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);

      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (secondFrameRef.current !== null) cancelAnimationFrame(secondFrameRef.current);
      if (finalBlinkTimeoutRef.current !== null) {
        window.clearTimeout(finalBlinkTimeoutRef.current);
      }
    };
  }, [updateTimeline, updateLineBounds]);

  useEffect(() => {
    updateLineBounds();
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver(updateLineBounds);
    observer.observe(list);
    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    window.addEventListener("scroll", updateLineBounds, { passive: true });
    window.addEventListener("resize", updateLineBounds);
    window.addEventListener("load", updateLineBounds);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateLineBounds);
      window.removeEventListener("resize", updateLineBounds);
      window.removeEventListener("load", updateLineBounds);
    };
  }, [updateLineBounds]);

  return (
    <>
      <section id="about" ref={sectionRef} className="relative bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
                Executive Profile
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Driving Enterprise
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  SAP Transformation
                </span>
              </h2>

              <div className="relative mt-7 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_45px_-15px_rgba(15,30,61,0.18)]">
                <div className="relative h-[320px] w-full sm:h-[380px]">
                  <Image
                    src="/assets/CEO- KB image.jpeg"
                    alt="Kumaresh Bidari at Rise Infotech"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-bottom"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-5 py-4">
                    <p className="text-sm font-semibold text-white">Kumaresh Bidari</p>
                    <p className="text-xs text-white/80">Founder &amp; CEO, Rise Infotech</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Kumaresh Bidari is an SAP S/4HANA Consultant, Corporate Trainer,
                and Founder &amp; CEO of Rise Infotech with over 10 years of
                industry experience. Having worked with leading organizations
                including TCS, IBM, and NTT DATA, he has successfully delivered
                SAP implementations, global rollouts, data migration, and
                digital transformation initiatives while mentoring aspiring
                SAP professionals through practical, real-time training
                programs and helping them build successful careers in SAP
                S/4HANA.
              </p>
            </div>

            <div ref={listRef} className="relative space-y-5">
              <div
                className="absolute left-4 hidden w-[2px] -translate-x-1/2 rounded-full bg-slate-200/80 md:block"
                style={{ top: `${lineBounds.top}px`, height: `${lineBounds.height}px` }}
              />

              <div
                className="absolute left-4 hidden w-[2px] -translate-x-1/2 overflow-hidden rounded-full md:block"
                style={{
                  top: `${lineBounds.top}px`,
                  height: `${Math.min(progress, lineBounds.height)}px`,
                  transition: "height 850ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="h-full w-full rounded-full bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-400" />
              </div>

              {timeline.map((item, index) => {
                const isActive = active === index;
                const isFinalCard = index === timeline.length - 1;
                const isGreen = journeyCompleted && isFinalCard;

                return (
                  <div
                    key={item.year}
                    ref={element => { itemRefs.current[index] = element; }}
                    className={`group relative transition-[opacity,transform,filter] duration-1000 ease-out motion-reduce:transition-none md:pl-14 ${
                      revealed[index]
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-10 opacity-0 blur-[2px]"
                    }`}
                  >
                    <div
                      ref={element => { markerRefs.current[index] = element; }}
                      className={`absolute left-0 top-1.5 z-10 hidden h-8 w-8 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-colors duration-300 md:flex ${
                        isGreen
                          ? "timeline-heartbeat border-emerald-400 bg-emerald-400 text-white"
                          : "border-blue-600 bg-blue-600 text-white shadow-sm"
                      } ${
                        isFinalCard && finalCardBlink ? "timeline-final-blink" : ""
                      }`}
                    >
                      {item.year.slice(2)}
                    </div>

                    <span
                      className={`mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 md:hidden ${
                        isActive
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {item.year}
                    </span>

                    <div
                      className={`rounded-2xl border bg-white p-5 transition-[border-color,box-shadow,background-color] duration-500 ease-out ${
                        isActive
                          ? "border-blue-200 bg-blue-50/[0.12] shadow-[0_12px_32px_-18px_rgba(37,99,235,0.35)]"
                          : "border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="hidden text-xs font-medium text-blue-500 md:inline">
                          {item.year}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Expertise />
      <Industries />
    </>
  );
}
