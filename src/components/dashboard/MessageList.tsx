'use client';
import { useState } from 'react';
import { Mail, User, Calendar, MessageSquare, Trash2, ChevronRight, Search } from 'lucide-react';

type Message = {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
};

export default function MessageList({ messages }: { messages: Message[] }) {
    const [selectedId, setSelectedId] = useState<string | null>(messages[0]?._id || null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMessages = messages.filter(msg => 
        msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectedMessage = messages.find(m => m._id === selectedId);

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
            {/* Left Column: Message List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Search messages..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-900/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:border-cyan-500/50 outline-none transition-all"
                    />
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    {filteredMessages.map((msg) => (
                        <button
                            key={msg._id}
                            onClick={() => setSelectedId(msg._id)}
                            className={`w-full text-left p-4 rounded-xl border transition-all group ${
                                selectedId === msg._id 
                                ? 'bg-cyan-500/10 border-cyan-500/50' 
                                : 'bg-gray-900/30 border-white/5 hover:border-white/20'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`font-semibold truncate ${selectedId === msg._id ? 'text-cyan-400' : 'text-gray-200'}`}>
                                    {msg.name}
                                </h4>
                                <span className="text-[10px] text-gray-500 whitespace-nowrap ml-2">
                                    {new Date(msg.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 truncate font-medium mb-1">{msg.subject}</p>
                            <p className="text-[11px] text-gray-500 truncate line-clamp-1">{msg.message}</p>
                        </button>
                    ))}
                    {filteredMessages.length === 0 && (
                        <div className="text-center py-10 text-gray-500 text-sm">No messages found</div>
                    )}
                </div>
            </div>

            {/* Right Column: Message Detail */}
            <div className="flex-1 bg-gray-900/40 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                {selectedMessage ? (
                    <>
                        <div className="p-6 border-b border-white/10 flex justify-between items-start bg-gray-900/20">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">{selectedMessage.subject}</h2>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <User className="w-4 h-4 text-cyan-500/70" />
                                        <span>{selectedMessage.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Mail className="w-4 h-4 text-cyan-500/70" />
                                        <a href={`mailto:${selectedMessage.email}`} className="hover:text-cyan-400 transition-colors">
                                            {selectedMessage.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Calendar className="w-4 h-4 text-cyan-500/70" />
                                        <span>{new Date(selectedMessage.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 p-8 overflow-y-auto bg-black/10">
                            <div className="flex gap-4">
                                <div className="w-1 h-auto bg-cyan-500/30 rounded-full" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-500/50 uppercase tracking-widest mb-4">
                                        <MessageSquare className="w-3 h-3" />
                                        Content
                                    </div>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-base">
                                        {selectedMessage.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-10">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                            <Mail className="w-8 h-8 opacity-20" />
                        </div>
                        <p>Select a message to read</p>
                    </div>
                )}
            </div>
        </div>
    );
}
