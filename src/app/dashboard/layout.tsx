'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const navItems = [
    { href: '/dashboard/messages', label: 'Messages' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, loading, logout } = useAuth();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const isAuthPage = pathname === '/dashboard/login';

    useEffect(() => {
        if (!isAuthPage && !loading && !user) {
            router.replace('/dashboard/login');
        }
    }, [isAuthPage, loading, user, router]);

    const activePath = useMemo(() => pathname || '/dashboard', [pathname]);

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            await logout();
            router.replace('/dashboard/login');
        } finally {
            setIsLoggingOut(false);
        }
    };

    if (isAuthPage) {
        return <>{children}</>;
    }

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-[240px_1fr] md:p-6">
                <aside className="rounded-2xl border border-white/10 bg-gray-900/50 p-4">
                    <p className="text-xl font-black tracking-tight text-[#f5b331] mb-1">Siyam Sikder</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-6">Admin Panel</p>
                    
                    <div className="bg-black/20 rounded-xl p-3 border border-white/5 mb-6">
                        <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">Logged in as</p>
                        <p className="truncate text-xs text-gray-200 font-medium">{user.email}</p>
                    </div>

                    <nav className="mt-6 space-y-1">
                        {navItems.map((item) => {
                            const active = activePath === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                                        active ? 'bg-cyan-500 text-black' : 'text-gray-300 hover:bg-white/5'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="mt-6 w-full rounded-lg border border-red-400/40 px-3 py-2 text-sm text-red-300 transition hover:bg-red-500/10 disabled:opacity-60"
                    >
                        {isLoggingOut ? 'Logging out...' : 'Logout'}
                    </button>
                </aside>

                <section className="rounded-2xl border border-white/10 bg-gray-900/30 p-4 md:p-6">{children}</section>
            </div>
        </div>
    );
}
