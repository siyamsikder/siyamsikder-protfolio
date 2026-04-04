"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-20 overflow-hidden bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-left z-10"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#eeeeee] leading-[1.15] mb-4 tracking-tight">
                Hey, I&apos;m <span className="text-[#f5b331]">Siyam Sikder</span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#dddddd]">
                  a web developer from <span className="lowercase">dhaka</span>
                </span>
              </h1>

              <p className="text-[#a0a0a0] text-lg mb-8 font-medium max-w-lg">
                specialize in building modern, high-performance web applications.
              </p>

              <div className="font-mono text-sm md:text-base font-bold mb-10 overflow-hidden whitespace-nowrap">
                <span className="text-[#f5b331]">#</span>{" "}
                <span className="text-[#00ff00]">i develop tools for </span>
                <span className="text-[#ff00ff]">web applications</span>
                <span className="inline-block w-2 bg-[#ff00ff] animate-pulse ml-1">&nbsp;</span>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-extrabold text-[#111111] bg-[#f5b331] rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,179,49,0.3)] active:scale-95"
                >
                  Hire Me
                </a>
                <a
                  href="https://drive.google.com/file/d/19ZOYSYUEKSD5KvXuT72ei-IVhKHi8aTQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-[#eeeeee] border border-[#f5b331]/30 bg-[#f5b331]/5 rounded-xl transition-all hover:bg-[#f5b331]/10 hover:border-[#f5b331]/60 group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mr-2 text-[#f5b331] group-hover:translate-y-0.5 transition-transform"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#f5b331]/20 bg-[#18181b]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#f5b331]/10 bg-[#f5b331]/5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-mono text-[#f5b331]/50 italic">siyam.dev — bash</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-[#f5b331]">➜</span>
                      <span className="text-[#eeeeee]">~ /portfolio</span>
                      <span className="text-[#00ff00] animate-pulse">git status</span>
                    </div>
                    <div className="text-gray-500 italic ml-6">On branch main...</div>
                    <div className="flex gap-3">
                      <span className="text-[#f5b331]">➜</span>
                      <span className="text-[#eeeeee]">~ </span>
                      <span className="text-[#f5b331]">npm run innovate</span>
                    </div>

                    <div className="py-2 px-4 rounded bg-[#f5b331]/5 border border-[#f5b331]/10 transform transition-transform group-hover:scale-[1.02] duration-500">
                      <pre className="text-xs sm:text-sm">
                        <code className="text-[#f5b331]">
                          {`const developer = {
  name: "Siyam Sikder",
  role: "Web Developer",
  skills: ["MERN", "Next.js", "AI"],
  passion: "Innovation"
};`}
                        </code>
                      </pre>
                    </div>

                    <div className="flex gap-2 items-center text-[#00ff00]/70 text-[10px] sm:text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#00ff00] animate-ping" />
                      <span>Local server running on port 3000...</span>
                    </div>
                  </div>
                </div>

                {/* Decorative background glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#f5b331]/10 blur-[100px] rounded-full z-0" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar directly below hero */}
      <section className="relative -mt-10 mb-20 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#18181b] rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#2a2a2a]/0 md:divide-[#2a2a2a]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-[#f5b331] mb-2">4+</span>
                <span className="text-[#a0a0a0] text-sm font-semibold max-w-[120px] mx-auto leading-tight">Projects Completed from scratch</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-[#f5b331] mb-2">1+</span>
                <span className="text-[#a0a0a0] text-sm font-semibold max-w-[120px] mx-auto leading-tight">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-[#f5b331] mb-2">MERN</span>
                <span className="text-[#a0a0a0] text-sm font-semibold max-w-[120px] mx-auto leading-tight">Core Tech Stack</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-[#f5b331] mb-2">Frontend</span>
                <span className="text-[#a0a0a0] text-sm font-semibold max-w-[120px] mx-auto leading-tight">Primary Focus Area</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
