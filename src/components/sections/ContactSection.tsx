"use client";

import { Mail, MapPin, Phone, Rocket } from "lucide-react";
import { GithubIcon, LinkedinIcon, } from "../shared/Icons";
import { useState, FormEvent } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong sending your message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success status after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181b] rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-[#1a1a1a] p-10 flex flex-col border-r border-[#2a2a2a]">
              <span className="text-[#ff00ff] font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-[#f5b331] font-black text-3xl mb-6 tracking-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-10">
                Seeking an opportunity to contribute to a professional development team while growing as a software engineer. Feel free to reach out!
              </p>

              <div className="space-y-6 flex-1">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "siyam0sikder@gmail.com" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+880 1343 913 493" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Dhaka-1310, Bangladesh" },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4 items-center group/item">
                    <div className="w-12 h-12 bg-[#111111] border border-[#333] rounded-xl flex items-center justify-center text-[#f5b331] group-hover/item:border-[#f5b331] transition-all">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-[#ff00ff] uppercase font-black tracking-widest mb-1">{c.label}</p>
                      <p className="text-[#eeeeee] text-sm font-semibold">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-12 pt-8 border-t border-[#333]">
                {[
                  { icon: <GithubIcon />, href: "https://github.com/siyamsikder" },
                  { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/siyamsikder" },
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
            </div>

            <div className="lg:col-span-3 p-10 flex flex-col justify-center bg-[#151515]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#a0a0a0] uppercase tracking-widest ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#111111] border border-[#333] rounded-xl p-4 text-white outline-none focus:border-[#f5b331] transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#a0a0a0] uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#111111] border border-[#333] rounded-xl p-4 text-white outline-none focus:border-[#f5b331] transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#a0a0a0] uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tell me about your project"
                    className="w-full bg-[#111111] border border-[#333] rounded-xl p-4 text-white outline-none focus:border-[#f5b331] transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#a0a0a0] uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey Siyam, I have a project in mind..."
                    rows={5}
                    className="w-full bg-[#111111] border border-[#333] rounded-xl p-4 text-white outline-none focus:border-[#f5b331] transition-all resize-none text-sm"
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl text-emerald-400 text-sm font-semibold">
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm font-semibold">
                    {errorMessage || "Failed to send message."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#f5b331] text-[#111111] font-black py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? "Sending..." : "Send Message"} <Rocket className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
