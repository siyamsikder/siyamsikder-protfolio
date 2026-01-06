export default function Footer() {
    return (
        <footer className="peer-checked:bg-dark-light border-t border-white/5 py-12 bg-dark-light/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center">
                <a href="#" className="text-2xl font-bold tracking-tight text-white inline-block mb-6">
                    <span className="text-primary">&lt;</span>Siyam<span className="text-primary">/&gt;</span>
                </a>
                <div className="flex justify-center gap-6 mb-8">
                    {[
                        { icon: 'github-logo', color: 'primary' },
                        { icon: 'linkedin-logo', color: 'blue-600' },
                        { icon: 'twitter-logo', color: 'sky-500' },
                        { icon: 'instagram-logo', color: 'pink-600' }
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className={`w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-${item.color} transition-all duration-300`}
                        >
                            <i className={`ph-fill ph-${item.icon}`}></i>
                        </a>
                    ))}
                </div>
                <p className="text-slate-500 text-sm">
                    &copy; 2026 Siyam. All rights reserved. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
