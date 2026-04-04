'use client';
import { useEffect, useState } from 'react';
import MessageList from '@/components/dashboard/MessageList';
import { Mail, RefreshCw } from 'lucide-react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

type Message = {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
};

export default function DashboardMessagesPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:5000/api/contact');
                const data = await res.json();
                
                if (!res.ok) throw new Error(data.message || 'Failed to fetch messages');
                
                if (data.success) {
                    setMessages(data.data);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [refreshKey]);

    if (loading && messages.length === 0) return (
        <div className="flex h-[60vh] items-center justify-center">
            <LoadingSpinner size="lg" />
        </div>
    );
    
    if (error && messages.length === 0) return (
        <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl text-red-400 font-medium">
                Error: {error}
            </div>
            <button 
                onClick={() => setRefreshKey(prev => prev + 1)}
                className="text-sm text-cyan-500 hover:text-cyan-400 font-bold"
            >
                Try Again
            </button>
        </div>
    );

    return (
        <div className="h-full">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                        <Mail className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-white">Inbox</h1>
                        <p className="text-gray-500 text-sm font-medium">Manage your contact inquiries</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="px-4 py-1.5 bg-gray-900 border border-white/5 rounded-full text-xs font-bold text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                        {messages.length} Messages
                    </div>
                    <button 
                        onClick={() => setRefreshKey(prev => prev + 1)}
                        className="p-2.5 bg-gray-900 border border-white/5 rounded-xl text-gray-400 hover:text-cyan-500 hover:border-cyan-500/30 transition-all"
                        title="Refresh messages"
                    >
                        <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>
            </div>
            
            {messages.length === 0 ? (
                <div className="bg-gray-900/30 border border-dashed border-white/10 rounded-3xl p-16 text-center">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-10 h-10 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No messages yet</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">When people contact you via your website, their messages will appear here.</p>
                </div>
            ) : (
                <MessageList messages={messages} />
            )}
        </div>
    );
}

