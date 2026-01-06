import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 top-0 ${isScrolled ? 'glass-nav py-3' : 'py-4'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tight text-white group">
                    <span className="text-primary">&lt;</span>Siyam<span className="text-primary">/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {['Home', 'Services', 'Projects', 'Education', 'Blog'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-white focus:outline-none"
                >
                    {isOpen ? <i className="ph ph-x"></i> : <i className="ph ph-list"></i>}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl text-white">
                    <i className="ph ph-x"></i>
                </button>
                {['Home', 'Services', 'Projects', 'Education', 'Blog'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-medium text-white hover:text-primary"
                    >
                        {item}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                    Contact Me
                </a>
            </div>
        </nav>
    );
}
