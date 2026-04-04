"use client";

import { motion } from "framer-motion";
import { Globe2, Server, Wrench } from "lucide-react";

export function SkillsSection() {
  const technicalSkills = [
    {
      category: "Frontend",
      icon: <Globe2 className="w-6 h-6 text-[#f5b331]" />,
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6 text-[#ff00ff]" />,
      items: ["Node.js", "Express.js", "MongoDB", "Prisma ORM", "Supabase", "REST API", "JWT Auth"],
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-[#00ff00]" />,
      items: ["Git", "GitHub", "Firebase", "Axios", "Netlify", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#f5b331] font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
            Skills
          </h2>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            Modern Tech Stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#18181b] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#f5b331] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center border border-[#333]">
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold text-xl">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#111111] border border-[#333] text-[#eeeeee] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
