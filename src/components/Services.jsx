export default function Services() {
    const services = [
        {
            id: "01",
            title: "Database Design",
            description: "Optimized database schemas using MongoDB. Ensuring data integrity, scalability, and performance.",
            icon: "database",
            colorClass: "icon-blue"
        },
        {
            id: "02",
            title: "API Development",
            description: "Robust RESTful APIs with Node.js & Express. Secure authentication (JWT) and efficient endpoints.",
            icon: "plugs-connected",
            colorClass: "icon-purple"
        },
        {
            id: "03",
            title: "Frontend Dev",
            description: "Responsive interaction using React.js. Modern animations and intuitive UX.",
            icon: "browser",
            colorClass: "icon-cyan"
        },
        {
            id: "04",
            title: "Backend Dev",
            description: "Server-side logic and integration. High-performance microservices and cloud deployment.",
            icon: "server",
            colorClass: "icon-green"
        }
    ];

    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">What I Do</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">My Services</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="glass-card p-8 rounded-2xl group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                            <div className="text-6xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors">
                                {service.id}
                            </div>
                            <div className={`w-14 h-14 rounded-xl ${service.colorClass} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                <i className={`ph-fill ph-${service.icon}`}></i>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
