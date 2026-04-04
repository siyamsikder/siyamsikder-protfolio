'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

type Mode = 'login' | 'register' | 'reset';

export default function DashboardLoginPage() {
    const router = useRouter();
    const { login, register, resetPassword, loginWithGoogle, user, loading } = useAuth();
    const [mode, setMode] = useState<Mode>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const title = useMemo(() => {
        if (mode === 'register') return 'Create account';
        if (mode === 'reset') return 'Reset password';
        return 'Admin login';
    }, [mode]);

    const clearFeedback = () => {
        setError('');
        setMessage('');
    };

    useEffect(() => {
        if (!loading && user) {
            router.replace('/dashboard');
        }
    }, [loading, user, router]);

  const ADMIN_EMAIL = 'siyam0sikder@gmail.com';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    clearFeedback();
    
    // Admin check
    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      setError('Access denied. Only the administrator can log in.');
      return;
    }

    setSubmitting(true);
    try {
      if (mode === 'reset') {
        await resetPassword(email);
        setMessage('Password reset email sent.');
      } else {
        await login(email, password);
        setMessage('Login successful.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center p-6">
      <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6 shadow-xl">
        <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
        <p className="mb-4 text-sm text-gray-400">
          {user ? `Logged in as ${user.email}` : 'Secure administrator login.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-300">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          {mode !== 'reset' && (
            <div>
              <label className="mb-1 block text-sm text-gray-300">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm outline-none focus:border-cyan-400 transition-all"
              />
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400">
              {error}
            </div>
          )}
          {message && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-400">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
          >
            {submitting ? 'Authenticating...' : title}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            clearFeedback();
            loginWithGoogle()
              .then(() => {
                // We'll handle the email check in useEffect if they use Google
              })
              .catch((err) => setError(err.message));
          }}
          className="mt-3 w-full rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5 active:scale-95"
        >
          Continue with Google
        </button>

        <div className="mt-5 flex items-center justify-between text-xs">
          <button 
            onClick={() => { clearFeedback(); setMode(mode === 'reset' ? 'login' : 'reset'); }} 
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            {mode === 'reset' ? 'Back to Login' : 'Forgot password?'}
          </button>
          <span className="text-gray-700 font-mono">Admin Only</span>
        </div>
      </div>
    </main>
  );
}
