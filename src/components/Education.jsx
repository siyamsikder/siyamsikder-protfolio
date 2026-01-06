export default function Education() {
    return (
        <section id="education" className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                            <i className="ph-fill ph-graduation-cap text-primary"></i> Education
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-white/10">
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-dark border-2 border-primary"></div>
                                <span className="text-xs font-semibold text-primary tracking-wide uppercase">2023 - Present</span>
                                <h4 className="text-xl font-bold text-white mt-1">B.Sc in Computer Science</h4>
                                <p className="text-slate-400 text-sm mt-1">University of Technology</p>
                                <p className="text-slate-500 text-sm mt-3">Specializing in Software Engineering and Artificial Intelligence. Dean's List for 3 consecutive semesters.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-dark border-2 border-slate-600 group-hover:border-primary transition-colors"></div>
                                <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">2022</span>
                                <h4 className="text-xl font-bold text-white mt-1">Full Stack Certfication</h4>
                                <p className="text-slate-400 text-sm mt-1">Programming Hero</p>
                                <p className="text-slate-500 text-sm mt-3">Intensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.</p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Project (Large) */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                            <i className="ph-fill ph-star text-yellow-400"></i> Featured Project
                        </h3>
                        <div className="glass-card rounded-2xl overflow-hidden group">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-primary text-dark text-xs font-bold rounded-lg shadow-lg">Featured</span>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?fit=crop&w=800&q=80"
                                    alt="SaaS"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-slate-400 text-sm">October 2023</span>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i key={star} className="ph-fill ph-star text-yellow-400 text-sm"></i>
                                        ))}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3">Project Management SaaS</h4>
                                <p className="text-slate-400 mb-6">A complete solution for agile teams. Features include kanban boards, real-time collaboration, and automated reporting.</p>
                                <a href="#" className="text-primary font-semibold hover:text-white transition-colors inline-flex items-center gap-2">
                                    Read Case Study <i className="ph-bold ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
