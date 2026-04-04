import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#121212] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#a0a0a0] text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Siyam Sikder. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[
            { icon: <GithubIcon className="w-4 h-4" />, href: "https://github.com/siyamsikder" },
            { icon: <LinkedinIcon className="w-4 h-4" />, href: "https://www.linkedin.com/in/siyamsikder" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#333] bg-[#111111] flex items-center justify-center text-[#a0a0a0] hover:text-[#111111] hover:border-[#f5b331] hover:bg-[#f5b331] transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div className="flex gap-6 text-[#a0a0a0] text-xs font-bold uppercase tracking-widest">
          <Link href="/dashboard" className="hover:text-[#f5b331] transition-colors">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
