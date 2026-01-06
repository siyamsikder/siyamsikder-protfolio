import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Education', href: '/education' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold tracking-tight text-white group">
                    <span className="text-primary group-hover:text-secondary transition-colors">&lt;</span>
                    Siyam
                    <span className="text-primary group-hover:text-secondary transition-colors">/&gt;</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-300'}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink
                        to="/contact"
                        className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                    >
                        Hire Me
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-white focus:outline-none">
                    <i className={`ph-bold ${isOpen ? 'ph-x' : 'ph-list'}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-300'}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
