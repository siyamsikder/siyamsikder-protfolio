export default function Projects() {
    const projects = [
        {
            title: 'Neon E-Commerce',
            description: 'A full-stack e-commerce platform with stripe payment integration and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB'],
            colors: { react: 'blue', node: 'green', mongo: 'yellow' },
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80'
        },
        {
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization dashboard with dark mode and customizable widgets.',
            tech: ['Tailwind', 'Next.js'],
            colors: { tailwind: 'cyan', next: 'purple' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80'
        },
        {
            title: 'Chat Application',
            description: 'Real-time messaging app with group chats, file sharing, and end-to-end encryption.',
            tech: ['Socket.io', 'React'],
            colors: { socket: 'red', react: 'blue' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80'
        }
    ];

    const getTechColor = (techName) => {
        const map = {
            'React': 'blue',
            'Node.js': 'green',
            'MongoDB': 'yellow',
            'Tailwind': 'cyan',
            'Next.js': 'purple',
            'Socket.io': 'red'
        };
        return map[techName] || 'gray';
    };

    return (
        <section id="projects" className="py-24 bg-dark-light/30">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Portfolio</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Recent Projects</h3>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        View All <i className="ph-bold ph-arrow-right"></i>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden glass-card">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.map((t) => {
                                        const color = getTechColor(t);
                                        return (
                                            <span key={t} className={`px-3 py-1 text-xs rounded-full bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
                                                {t}
                                            </span>
                                        );
                                    })}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-slate-400 text-sm mb-6">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="flex-1 py-2 text-center rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 transition-colors">
                                        Live Demo
                                    </a>
                                    <a href="#" className="flex-1 py-2 text-center rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 transition-colors">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        View All <i className="ph-bold ph-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
