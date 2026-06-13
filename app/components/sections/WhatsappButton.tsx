"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/9110421024?text=Hi%20Kumaresh,%20I'm%20interested%20in%20SAP%20Consulting%20and%20Training."
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        fixed
        bottom-5
        right-4
        z-50
        flex
        items-center
        gap-2.5
        rounded-full
        border
        border-slate-200/80
        bg-white
        py-2
        pl-2
        pr-4
        shadow-[0_4px_24px_rgba(0,0,0,0.10)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]
        sm:bottom-6
        sm:right-6
        sm:gap-3
        sm:py-2.5
        sm:pl-2.5
        sm:pr-5
      "
    >
      {/* Ping ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]/30 animate-ping"
        style={{ animationDuration: "2s" }}
      />

      {/* Icon circle */}
      <div className="relative flex-shrink-0">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            transition-transform
            duration-300
            group-hover:scale-105
            sm:h-[46px]
            sm:w-[46px]
          "
        >
          <FaWhatsapp size={20} className="sm:hidden" />
          <FaWhatsapp size={22} className="hidden sm:block" />
        </div>

        {/* Online dot */}
        <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
      </div>

      {/* Text — always visible */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] leading-none text-slate-400 sm:text-[11px]">
          Chat with Kumaresh
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[13px] font-semibold leading-none text-slate-900 sm:text-sm">
            WhatsApp
          </span>
          <span className="rounded-full bg-emerald-50 px-1.5 py-px text-[9px] font-semibold text-emerald-700 sm:px-2 sm:text-[10px]">
            Online
          </span>
        </div>
      </div>
    </a>
  );
}