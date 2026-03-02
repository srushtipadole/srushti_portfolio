import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SkillHoverCard from "@/components/homepage/SkillHoverCard";

// import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap");

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main
      id="about"
      className="bg-black text-white pt-24 sm:pt-32 pb-16 sm:pb-24"
      // ── COPY PROTECTION ──────────────────────────────────────────
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}
      // ─────────────────────────────────────────────────────────────
    >
      <h1 className="text-center text-3xl sm:text-5xl font-extrabold text-white mb-10 sm:mb-16 px-4">
        About Me
      </h1>

      {/* ================= SECTION 1: INTRO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start">

          {/* LEFT: IMAGE */}
          <div className="flex justify-center lg:ml-15 shrink-0">
            <div className="relative group">
              {/* Glow Border */}
              <div
                className="absolute inset-0 rounded-4xl
                opacity-0 group-hover:opacity-100 transition duration-500
                pointer-events-none
                shadow-[0_0_25px_6px_rgba(255,255,255,0.9)]"
              ></div>
              {/* Image */}
              <img
                src="/assets/sru_photo.jpeg"
                alt="Srushti Padole"
                className="relative w-[230px] h-[300px] sm:w-[290px] sm:h-[380px] md:w-[360px] md:h-[520px]
                object-cover rounded-4xl
                border border-white/30
                transition duration-500 group-hover:scale-105
                select-none pointer-events-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* RIGHT: BIO + SKILL CARDS */}
          <div className="flex flex-col justify-center gap-8 lg:gap-10 lg:ml-18 w-full">
            {/* BIO CARD */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0">
              <div
                className="led-card"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                }}
              >
                <p className="italic leading-relaxed font-[Playfair_Display] text-white text-sm sm:text-base">
                  "Computer Engineering undergraduate with hands-on experience in full-stack development, delivering accessible and responsive interfaces integrated with scalable backend systems. I believe great technology speaks a language everyone can understand — and what truly drives me is the ability to connect, communicate, and bring ideas to life through thoughtful design and clean code.
                  <br />
                  My curiosity extends beyond code. As an avid traveller, I draw inspiration from diverse cultures and perspectives, while singing keeps me expressive and grounded. These experiences shape my approach to building solutions that are not just functional, but truly human-centered — crafted with empathy, clarity, and purpose."
                </p>
              </div>
            </div>

            {/* SKILL CARDS ROW */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scroll-smooth w-full">
              <SkillHoverCard
                label="Confidence"
                image="/assets/conference.jpg"
                title="Public Speaking & Leadership"
                description="Presented projects at conferences, led technical demos, and communicated ideas confidently to industry professionals."
                side="top"
              />
              <SkillHoverCard
                label="Communication"
                image="/assets/communication.png"
                title="Clear & Effective Communication"
                description="Strong verbal and written communication developed through teamwork, presentations, and collaboration."
                side="top"
              />
              <SkillHoverCard
                label="Problem Solving"
                image="/assets/problem-solving.png"
                title="Analytical Thinking"
                description="Break down complex problems and design scalable, efficient solutions."
                side="top"
              />
              <SkillHoverCard
                label="Team Player"
                image="/assets/team-work.jpg"
                title="Collaborative Mindset"
                description="Worked in teams, reviewed code, shared ideas, and supported peers."
                side="top"
              />
              <SkillHoverCard
                label="Adaptability"
                image="/assets/adaptability.png"
                title="Quick Learner"
                description="Comfortable adapting to new tools, technologies, and environments."
                side="top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: EXPERIENCE + JOURNEY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: EXPERIENCE */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-xl font-bold text-[#d8c195] flex items-center gap-2">
              <span>(●'◡'●)</span> Experiences
            </h2>

            {[
              {
                role: "UI/UX Developer Intern",
                org: "Internship Studio",
                time: "Jul 2023 – Sept 2023",
                desc: "Designed end-to-end UI/UX for a grocery shopping application, focusing on usability, visual hierarchy, and user experience.",
                tag: "Internship",
                action: "View Certificate →",
                image: "/certificates/InternshipStudio.jpg",
              },
              {
                role: "Women Mentorship Program",
                org: "Persistent Systems, Nagpur",
                time: "2024",
                desc: "Selected for the Women Mentorship Program under the guidance of industry mentors, focusing on professional growth and industry readiness.",
                tag: "Mentorship",
                action: "View Certificate →",
                image: "/certificates/Persistent.jpg",
              },
              {
                role: "MERN Stack Developer",
                org: "WebguruKul",
                time: "Oct 2025 - Feb 2026",
                desc: "Built full-stack applications and APIs using MongoDB, Express, React, and Node.js in a team together. My role was to build seamless frontend interfaces and integrate them with robust backend services, ensuring a smooth user experience.",
                tag: "Training & Internship",
                action: "View Certificate →",
                image: "/certificates/MERN.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-6
                  bg-white/5 border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1"
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-base sm:text-lg font-semibold">{item.role}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {item.org} · {item.time}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 shrink-0 whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelectedCert(item.image)}
                  className="mt-4 text-xs sm:text-sm border border-white/30 px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition"
                >
                  {item.action}
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT: MY JOURNEY */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#d8c195] flex items-center gap-2 pb-6 sm:pb-8">
              <span>(●'◡'●)</span> My Journey
            </h2>

            <div className="rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 bg-white/5 border border-white/10">
              <div>
                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="font-semibold text-sm sm:text-base">B.Tech Computer Engineering</h3>
                  <span className="text-xs bg-black/40 px-3 py-1 rounded-full shrink-0">2022 – 2026</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">CGPA: 7.2</p>
                <p className="text-xs sm:text-sm text-gray-400">Cummins College of Engineering for Women, Nagpur</p>
              </div>

              <div>
                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="font-semibold text-sm sm:text-base">HSC</h3>
                  <span className="text-xs bg-black/40 px-3 py-1 rounded-full shrink-0">2020 – 2022</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">Score: 88.5%</p>
                <p className="text-xs sm:text-sm text-gray-400">Smt. Nankibai Wadhwani Jr. Science College, Yavatmal</p>
              </div>

              <div>
                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="font-semibold text-sm sm:text-base">SSC</h3>
                  <span className="text-xs bg-black/40 px-3 py-1 rounded-full shrink-0">2019 – 2020</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">Score: 96.8%</p>
                <p className="text-xs sm:text-sm text-gray-400">Free Methodist English High School, Yavatmal</p>
              </div>
            </div>

            {/* ================= CERTIFICATES ================= */}
            <div className="mt-12 sm:mt-20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-8 tracking-wide">
                📜 Certifications
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-6">
                <button onClick={() => setSelectedCert("/certificates/Coursera.png")} className="cert-btn">Coursera - [ HTML, CSS , JS ] →</button>
                <button onClick={() => setSelectedCert("/certificates/MERN.jpg")} className="cert-btn">MERN Stack Certification →</button>
                <button onClick={() => setSelectedCert("/certificates/C++.png")} className="cert-btn">Coding Ninjas - [ C++ Programming ] →</button>
                <button onClick={() => setSelectedCert("/certificates/GenAi.png")} className="cert-btn">GenAI Intro →</button>
                <button onClick={() => setSelectedCert("/certificates/iitg-excellence.jpg")} className="cert-btn">IITG - [ Certificate of Excellence ] →</button>
                <button onClick={() => setSelectedCert("/certificates/Abhyudaya.jpg")} className="cert-btn">Abhyudaya Hackathon →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHARED POPUP MODAL ================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm 
                       flex items-center justify-center z-50 p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full 
                         bg-[#0b0b0b] border border-white/20 
                         rounded-2xl p-3 sm:p-4 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-white/70 
                           hover:text-white text-lg z-10"
              >
                ✕
              </button>

              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg select-none pointer-events-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
