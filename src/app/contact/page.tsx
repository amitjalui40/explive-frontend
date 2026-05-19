"use client";

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { homepageData } from '@/config/siteData';
import { Footer } from '@/components/Footer';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

export default function ContactPage() {
  const { contact } = homepageData;
  const { placeholders } = contact.form;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [pageLoadTime] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cfToken, setCfToken] = useState('');
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  type TurnstileAPI = {
    render: (el: HTMLElement, opts: Record<string, unknown>) => string;
    reset: (id: string) => void;
    remove: (id: string) => void;
  };

  const getTurnstile = () =>
    (window as unknown as Record<string, unknown>)['turnstile'] as TurnstileAPI | undefined;

  useEffect(() => {
    const tryRender = () => {
      const turnstile = getTurnstile();
      if (turnstile && turnstileContainerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'dark',
          // Pass functions directly — string names only work with HTML data attributes
          callback: (token: string) => setCfToken(token),
          'expired-callback': () => setCfToken(''),
          appearance: 'interaction-only',
        });
      }
    };

    // Script already loaded (client-side navigation) — render now
    tryRender();

    // Script not yet loaded — expose a hook for onLoad to call
    const w = window as unknown as Record<string, unknown>;
    w['_turnstileInit'] = tryRender;

    return () => {
      delete w['_turnstileInit'];
      if (widgetIdRef.current) {
        getTurnstile()?.remove?.(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      setCfToken('');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: val }));
    if (val.length > 0 && val.length < 10) {
      setPhoneError('Phone number must be 10 digits');
    } else {
      setPhoneError('');
    }
  };

  const resetTurnstile = () => {
    if (widgetIdRef.current) getTurnstile()?.reset?.(widgetIdRef.current);
    setCfToken('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone && formData.phone.length !== 10) return;
    if (!cfToken) return; // block if Turnstile hasn't completed

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _hp: honeypot, _t: pageLoadTime, _cf: cfToken }),
      });

      const contentType = res.headers.get('content-type') ?? '';
      const json = contentType.includes('application/json') ? await res.json() : {};
      if (!res.ok || !json.success) throw new Error(json.error || `Server error (${res.status})`);

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      resetTurnstile();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
      setCooldown(60);
      const timer = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) { clearInterval(timer); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const inputClass = "w-full bg-transparent border-0 border-b border-white/20 text-white placeholder:text-white/25 py-3 text-base font-medium focus:outline-none focus:border-amber-400 transition-colors duration-300";
  const labelClass = "text-xs font-bold tracking-[0.25em] uppercase text-white/40 mb-2 block";

  return (
    <main className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => {
          const w = window as unknown as Record<string, unknown>;
          const init = w['_turnstileInit'] as (() => void) | undefined;
          init?.();
        }}
      />

      {/* Navbar spacer */}
      <div className="h-24 md:h-32 shrink-0" />

      {/* ── HEADER ── inside container */}
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24 shrink-0">
        <div className="flex items-start justify-between pb-6 border-b border-zinc-200 dark:border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-500">Contact</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700 text-xs select-none">—</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight">Exp Live Entertainment</span>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 shrink-0">Mumbai · 2026</span>
        </div>
      </div>

      {/* ── SPLIT ── contained to match header */}
      <div className="w-full max-w-480 mx-auto flex flex-col lg:flex-row flex-1">

        {/* LEFT — heading + contact info */}
        <div className="lg:w-[45%] px-6 md:px-12 xl:px-24 pt-14 md:pt-20 pb-14 lg:pb-20 flex flex-col gap-10 md:gap-12">

          {/* Heading + subtitle */}
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white leading-[0.88] tracking-tighter mb-6 md:mb-8">
              Let&apos;s talk.
            </h1>
            <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              An event, a collaboration,<br />or just a hello —<br />we&apos;d love to hear from you.
            </p>
          </div>

          {/* Bottom: contact details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-1">Email</p>
              <a
                href={`mailto:${contact.email.value}`}
                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300"
              >
                {contact.email.value}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-600 mb-1">Location</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-xs">
                {contact.location.value}
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT — always-dark form zone */}
        <div className="lg:w-[55%] bg-linear-to-br from-zinc-700 to-zinc-900 dark:from-zinc-900 dark:to-zinc-900 px-6 md:px-12 xl:px-16 pt-14 md:pt-20 pb-14 md:pb-20">

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 h-full">

            {/* Honeypot — invisible to real users, bots fill it */}
            <input
              type="text"
              name="_hp"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none', height: 0, width: 0 }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>First Name <span className="text-amber-500">*</span></label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={placeholders.firstName} required maxLength={50} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last Name <span className="text-amber-500">*</span></label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={placeholders.lastName} required maxLength={50} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>Email <span className="text-amber-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={placeholders.email} required maxLength={100} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handlePhoneChange} placeholder={placeholders.phone} maxLength={10} inputMode="numeric" className={`${inputClass} ${phoneError ? 'border-red-500' : ''}`} />
                {phoneError && <p className="mt-1.5 text-xs text-red-400 font-medium">{phoneError}</p>}
              </div>
            </div>

            <div className="flex-1">
              <label className={labelClass}>Message <span className="text-amber-500">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={placeholders.message}
                required
                rows={6}
                maxLength={2000}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Turnstile mounts here — rendered programmatically so it works on client-side nav too */}
            <div ref={turnstileContainerRef} />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success' || cooldown > 0 || !cfToken}
                className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-fit"
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent ✓' : cooldown > 0 ? `Wait ${cooldown}s` : !cfToken ? 'Verifying...' : 'Send Message'}
                {!isSubmitting && submitStatus !== 'success' && cooldown === 0 && cfToken && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                )}
              </button>
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again.</p>
              )}
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </main>
  );
}
