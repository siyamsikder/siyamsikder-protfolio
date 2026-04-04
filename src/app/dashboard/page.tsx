'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/dashboard/messages');
    }, [router]);

    return (
        <div className="flex h-[50vh] items-center justify-center">
            <p className="text-gray-400">Loading messages...</p>
        </div>
    );
}
