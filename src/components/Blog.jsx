export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: 'Mastering React Hooks',
            date: 'Jan 06, 2026',
            category: 'Tech',
            description: 'A deep dive into useEffect, useState, and custom hooks for better state management.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80',
            type: 'standard'
        },
        {
            id: 2,
            title: 'MongoDB Indexing 101',
            date: 'mongo_tips.js',
            category: 'JS',
            description: 'Why your queries are slow and how to fix them instantly.',
            type: 'code',
            code: `const optimizeDB = () => {
  // Indexing is key
  return "Faster Queries!";
}`
        },
        {
            id: 3,
            title: 'Securing Node.js APIs',
            date: 'Dec 20, 2025',
            category: 'Security',
            description: 'Best practices for authentication, rate limiting, and preventing injection attacks.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=800&q=80',
            type: 'standard'
        }
    ];

    return (
        <section id="blog" className="py-24 bg-dark-light/30">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">My Thoughts</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Latest Blog</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        blog.type === 'code' ? (
                            // Code Editor Style Card
                            <div key={blog.id} className="glass-card rounded-xl overflow-hidden border-t-4 border-secondary font-mono relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-dark/50 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2 text-xs text-slate-500">{blog.date}</span>
                                </div>
                                <div className="p-6 text-sm">
                                    <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs mb-4">
                                        {blog.code}
                                    </pre>

                                    <h4 className="text-lg font-bold text-white mt-6 mb-2 font-sans group-hover:text-secondary transition-colors">
                                        {blog.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4 font-sans">
                                        {blog.description}
                                    </p>
                                    <a href="#" className="text-sm font-medium text-white hover:text-secondary transition-colors font-sans">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ) : (
                            // Standard Card
                            <div key={blog.id} className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                                            {blog.category}
                                        </span>
                                        <span className="text-xs text-slate-500">{blog.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {blog.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {blog.description}
                                    </p>
                                    <a href="#" className="text-sm font-medium text-white hover:text-primary transition-colors">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}
