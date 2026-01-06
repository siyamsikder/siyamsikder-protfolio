import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const validate = () => {
        const newErrors = {};
        if (formData.name.trim().length < 2) newErrors.name = 'Name is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 chars';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('sent');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Get in Touch</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h3>
                            <p className="text-slate-400 text-lg">
                                Have a project in mind or want to discuss the latest tech? Feel free to send me a message!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: 'envelope-simple', title: 'Email Me', value: 'hello@siyam.dev', iconClass: 'icon-primary' },
                                { icon: 'phone-call', title: 'Call Me', value: '+880 1234 567 890', iconClass: 'icon-secondary' },
                                { icon: 'map-pin', title: 'Location', value: 'Dhaka, Bangladesh', iconClass: 'icon-green' }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card p-6 rounded-xl flex items-center gap-5">
                                    <div className={`w-12 h-12 rounded-full ${item.iconClass} flex items-center justify-center text-2xl`}>
                                        <i className={`ph-fill ph-${item.icon}`}></i>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">{item.title}</div>
                                        <div className="text-white font-medium text-lg">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass-card p-8 rounded-2xl border-t border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full bg-dark/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full bg-dark/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Discussion"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`w-full bg-dark/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 disabled:opacity-70"
                            >
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map (Visual Only) */}
                <div className="mt-16 rounded-2xl overflow-hidden h-64 opacity-60 hover:opacity-100 transition-opacity border border-white/10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.009707928!2d90.3492858167883!3d23.78077774447387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1714234567890!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
