"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <div className="absolute top-0 w-full z-50 pt-6">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[#f5b331]">
              Siyam Sikder
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ color: "#f5b331" }}>
                  <Link
                    href={item.href}
                    className="text-[#eeeeee] hover:text-[#f5b331] transition-colors duration-300 text-sm font-medium">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 focus:outline-none">
              <span className={`h-0.5 w-6 bg-[#eeeeee] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-6 bg-[#eeeeee] transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 bg-[#eeeeee] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0 }}
            style={{ overflow: "hidden" }}>
            <div className="flex flex-col gap-4 pt-4 pb-6 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#eeeeee] hover:text-[#f5b331] transition-colors text-sm font-medium">
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
