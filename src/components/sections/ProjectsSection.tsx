"use client";

import { motion } from "framer-motion";
import { ExternalLink, Server } from "lucide-react";
import { GithubIcon } from "../shared/Icons";
import Image from "next/image";
import projectsData from "../../data/projects.json";

export function ProjectsSection() {
  const projects = projectsData;

  return (
    <section id="projects" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#f5b331] font-extrabold text-3xl md:text-4xl tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#18181b] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#f5b331] transition-all duration-300 aspect-[4/3] max-h-[400px]"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
                <iframe
                  src={p.live}
                  title={p.title}
                  loading="lazy"
                  className="absolute top-0 left-0 w-[400%] h-[400%] border-none origin-top-left scale-[0.25] group-hover:scale-[0.26] transition-transform duration-500 pointer-events-none"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                {/* Overlay to catch interactions and improve contrast */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/5 via-transparent to-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Hover Overlay details */}
              <div className="absolute inset-0 bg-[#121212]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 z-20 text-center">
                <h3 className="text-white font-bold text-2xl tracking-tight mb-2">{p.title}</h3>
                <p className="text-[#a0a0a0] text-sm font-medium mb-4">{p.subtitle}</p>
                <p className="text-[#eeeeee] text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#111111] border border-[#333] text-[#a0a0a0] text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center flex-wrap gap-4 pt-6 border-t border-[#2a2a2a]/50">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#f5b331] text-sm font-bold hover:underline pointer-events-auto"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={p.client}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[#eeeeee] text-sm font-bold hover:text-[#f5b331] transition-colors pointer-events-auto"
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                  {p.server && (
                    <a
                      href={p.server}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[#eeeeee] text-sm font-bold hover:text-[#f5b331] transition-colors pointer-events-auto"
                    >
                      <Server className="w-4 h-4" /> Backend
                    </a>
                  )}
                </div>
              </div>

              {/* Pill Bar overlay at the bottom - matches the requested design */}
              <div className="absolute bottom-6 left-6 right-6 z-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/80 dark:bg-[#e2e8f0]/90 backdrop-blur-md px-6 py-4 rounded-full flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
                  <p className="text-[#333333] font-bold text-sm">
                    {p.date}
                  </p>
                  <h3 className="text-black font-extrabold text-lg tracking-tight">
                    {p.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
