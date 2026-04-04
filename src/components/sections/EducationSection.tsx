"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function EducationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      id: "diploma",
      tabLabel: "NIET",
      dateLabel: "2023 - 2027",
      role: "Diploma in Computer Science",
      company: "National Institute of Engineering & Technology",
      details: [
        "Currently pursuing a comprehensive curriculum covering core computer science fundamentals.",
        "Gaining hands-on experience in data structures, algorithms, web development, and software engineering principles.",
      ],
      companyUrl: "https://niet.edu.bd",
    },
    {
      id: "web-dev",
      tabLabel: "Frontend Dev",
      dateLabel: "2023 - PRESENT",
      role: "Self-Taught Developer",
      company: "MERN Stack Focus",
      details: [
        "Built responsive real-world applications using modern libraries like React, Next.js, and Tailwind CSS.",
        "Developed full-stack projects including LifeNotes and PetNest, utilizing MongoDB and Express for backend architecture.",
      ],
      companyUrl: "#",
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#f5b331] font-extrabold text-3xl md:text-4xl tracking-tight">
            My Timeline
          </h2>
        </div>

        {/* Timeline Tabs */}
        <div className="relative mb-16">
          {/* Connecting line behind tabs */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#2a2a2a] -translate-y-1/2 z-0 hidden md:block" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            {timelineData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={item.id} className="relative flex flex-col items-center w-full md:w-auto">
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full md:w-64 py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#f5b331] text-[#111111] shadow-[0_0_15px_rgba(245,179,49,0.4)]"
                        : "bg-[#111111] text-[#eeeeee] border border-[#333] hover:border-[#f5b331]"
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                  {/* Date below pill */}
                  <span className="mt-4 text-[#ff00ff] font-mono text-xs font-bold uppercase tracking-widest hidden md:block">
                    {item.dateLabel}
                  </span>
                  
                  {/* Active indicator dot and line */}
                  {isActive && (
                    <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-3 h-3 bg-[#ff00ff] rounded-full shadow-[0_0_10px_rgba(255,0,255,0.6)]" />
                      <div className="w-0.5 h-6 bg-[#ff00ff]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row justify-between gap-10 mt-8"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
              {timelineData[activeIndex].role}
            </h3>
            <div className="space-y-5">
              {timelineData[activeIndex].details.map((desc, i) => (
                <p key={i} className="text-[#a0a0a0] leading-relaxed text-sm">
                  {desc}
                </p>
              ))}
            </div>
          </div>
          
          <div className="flex-shrink-0 md:w-1/3 md:text-right flex flex-col md:items-end">
            <div className="flex items-center gap-3 mb-2 justify-start md:justify-end">
              <div className="w-8 h-8 rounded bg-[#f5b331] flex items-center justify-center text-[#111111] font-black text-xl shrink-0">
                {timelineData[activeIndex].company.charAt(0)}
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {timelineData[activeIndex].company.split(' ')[0]}
              </span>
            </div>
            {timelineData[activeIndex].companyUrl !== "#" && (
              <a
                href={timelineData[activeIndex].companyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#f5b331] text-xs hover:underline font-mono"
              >
                {timelineData[activeIndex].companyUrl.replace("https://", "www.")}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
