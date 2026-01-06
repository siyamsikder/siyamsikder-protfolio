export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1 relative z-10">
                    <div className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium tracking-wide">
                        Available for Work
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        I'm <span className="text-gradient">Siyam</span>
                        <br />
                        <span className="text-3xl md:text-5xl text-slate-400">MERN Developer</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                        Specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products at <span className="text-white">StartUp Inc</span>.
                    </p>

                    <ul className="space-y-3 text-slate-300">
                        {['Full Stack Web Development', 'Interactive UI/UX Design', 'Database Architecture'].map((skill) => (
                            <li key={skill} className="flex items-center gap-3">
                                <i className="ph-fill ph-check-circle text-primary text-xl"></i>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pt-4">
                        <a href="#contact" className="px-8 py-3 rounded-xl bg-primary hover:bg-cyan-400 text-dark font-bold transition-all transform hover:-translate-y-1">
                            Hire Me
                        </a>
                        <a href="#projects" className="px-8 py-3 rounded-xl glass-card text-white hover:bg-white/10 transition-all font-medium">
                            View Work
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-8">
                        {['github-logo', 'linkedin-logo', 'facebook-logo', 'envelope'].map((icon) => (
                            <a key={icon} href="#" className="text-slate-400 hover:text-primary text-2xl transition-colors">
                                <i className={`ph-fill ph-${icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center relative z-10">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                            alt="Profile"
                            className="relative w-full h-full object-cover rounded-[2rem] border-2 border-white/20 shadow-2xl animate-float z-10 filter grayscale hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Floating Experience Card */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-0 md:-left-12 glass-card p-4 rounded-xl flex items-center gap-3 z-20 animate-[float_4s_ease-in-out_1s_infinite]">
                            <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                                <i className="ph-fill ph-code text-xl"></i>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Experience</div>
                                <div className="text-white font-bold">5+ Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
