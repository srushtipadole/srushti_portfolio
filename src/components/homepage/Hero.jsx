import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Srushti Padole | Full Stack Developer</title>
        <meta
          name="description"
          content="Srushti Padole is a Full Stack Developer skilled in React, Node.js, Tailwind CSS, and MongoDB."
        />
      </Helmet>

      {/* HERO */}
      <section
        id="home"
        className="relative bg-black text-white pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center"
      >
        {/* Subtle background grain/texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Soft glow behind image on large screens */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-[#d8c195]/5 blur-[120px] rounded-full pointer-events-none hidden md:block" />

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left order-2 md:order-1">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#d8c195]">
              <span className="w-2 h-2 bg-[#d8c195] rounded-full animate-pulse" />
              Available for work
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-tight">
              Hi, I'm{" "}
              <span className="text-[#d8c195]">Srushti</span>.
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-300 tracking-wide">
              MERN Stack Developer
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
              I build scalable frontend interfaces and robust backend systems
              with clean, maintainable code.
            </p>

            {/* Buttons — uncomment when ready */}
            {/* <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Button className="bg-[#d8c195] text-black hover:bg-[#cbb07d]">
                View Work
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-white/5">
                Contact Me
              </Button>
            </div> */}
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative group">

              {/* Glow Border on Hover */}
              <div
                className="absolute inset-0 rounded-sm
                opacity-0 group-hover:opacity-100 transition duration-500
                pointer-events-none
                shadow-[0_0_25px_6px_rgba(255,255,255,0.9)]"
              />

              {/* Image */}
              <img
                src="/assets/AI-Profile.png"
                alt="Srushti Padole AI Profile"
                className="relative
                w-[240px] h-[360px]
                sm:w-[280px] sm:h-[420px]
                md:w-[320px] md:h-[480px]
                lg:w-[360px] lg:h-[520px]
                object-cover rounded-sm
                border border-white/30
                transition duration-500 group-hover:scale-105
                select-none pointer-events-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}