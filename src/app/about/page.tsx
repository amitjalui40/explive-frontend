import React from 'react';
import type { Metadata } from 'next';
import { homepageData } from '@/config/homepageData';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us",
  description: "Exp Live Entertainment is focused on shaping the future of India's festivals and live entertainment culture. We organize music festivals, concerts, artist tours, and IP experiences across India.",
  openGraph: {
    title: "About Us | Exp Live Entertainment",
    description: "Exp Live Entertainment is focused on shaping the future of India's festivals and live entertainment culture.",
    url: "https://explive.in/about",
  },
  alternates: {
    canonical: "https://explive.in/about",
  },
};

export default function AboutPage() {
  const { aboutFull, eventCategories } = homepageData;

  return (
    <main className="w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden">

      {/* Navbar spacer */}
      <div className="h-24 md:h-32" />

      {/* ── HEADER ── single line, minimal ── */}
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex items-start justify-between pb-6 border-b border-zinc-200 dark:border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500">About</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700 text-xs select-none">—</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight">Exp Live Entertainment</span>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 shrink-0">Mumbai · 2026</span>
        </div>
      </div>

      {/* ── BIG OPENING — no label, just weight ── */}
      <section className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24 pt-16 md:pt-24 pb-12 md:pb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
          We turn events into powerful{' '}
          <span className="text-emerald-500 dark:text-emerald-400">live</span> experiences.
        </h1>
      </section>

      {/* ── BODY — 2 equal columns, no header label ── */}
      <section className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
          <div className="flex flex-col gap-7">
            <p>{aboutFull.descriptions[0]}</p>
            <p>{aboutFull.descriptions[1]}</p>
          </div>
          <div className="flex flex-col gap-7">
            <p>{aboutFull.descriptions[2]}</p>
            <p>{aboutFull.descriptions[3]}</p>
          </div>
        </div>
      </section>

      {/* ── MISSION CALLOUT — subtle bg shift, no label ── */}
      <section className="w-full bg-zinc-100 dark:bg-zinc-900 py-16 md:py-24">
        <div className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-900 dark:text-white leading-snug tracking-tight max-w-4xl">
            {aboutFull.descriptions[5]}
          </p>
        </div>
      </section>

      {/* ── SERVICES — horizontal type, diamond separators ── */}
      <section className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24 py-16 md:py-24">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600 mb-8">
          Experiences We Curate
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-3">
          {eventCategories.cards.map((card, i) => (
            <React.Fragment key={card.id}>
              <span className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-zinc-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 cursor-default">
                {card.title}
              </span>
              {i < eventCategories.cards.length - 1 && (
                <span className="hidden sm:inline text-emerald-500 text-sm mx-4 md:mx-6 select-none">◆</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24 py-16 md:py-24">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-600 mb-10">
          Common Questions
        </p>
        <dl className="flex flex-col divide-y divide-zinc-100 dark:divide-white/5">
          {[
            {
              q: "What kind of events does Exp Live Entertainment organise?",
              a: "We organise music festivals, artist solo tours, concerts, and unique IP-driven cultural experiences across India — from large multi-day outdoor festivals to intimate curated shows."
            },
            {
              q: "Where does Exp Live operate?",
              a: "We are based in Thane, Maharashtra, and primarily organise events in Mumbai. We work across India and are focused on building India's live entertainment culture."
            },
            {
              q: "Does Exp Live manage artists?",
              a: "Yes. We offer artist management services including live bookings, strategic collaborations, and curated entertainment partnerships, backed by a strong network across the Indian music industry."
            },
            {
              q: "How can I get in touch for an event or collaboration?",
              a: "Reach out via email at info@explive.in or use the contact form at explive.in/contact. We'd love to hear about your event, collaboration idea, or booking enquiry."
            },
            {
              q: "What upcoming events is Exp Live organising?",
              a: "Our upcoming events include Seasona Festival 2026 (23rd May 2026 at Bandra Fort, Mumbai) and Ehsaas e Shaam (10th July 2026 at Dome at NSCI, Mumbai)."
            },
          ].map(({ q, a }) => (
            <div key={q} className="py-7">
              <dt className="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-3">{q}</dt>
              <dd className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{a}</dd>
            </div>
          ))}
        </dl>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What kind of events does Exp Live Entertainment organise?", "acceptedAnswer": { "@type": "Answer", "text": "We organise music festivals, artist solo tours, concerts, and unique IP-driven cultural experiences across India — from large multi-day outdoor festivals to intimate curated shows." } },
                { "@type": "Question", "name": "Where does Exp Live operate?", "acceptedAnswer": { "@type": "Answer", "text": "We are based in Thane, Maharashtra, and primarily organise events in Mumbai. We work across India and are focused on building India's live entertainment culture." } },
                { "@type": "Question", "name": "Does Exp Live manage artists?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer artist management services including live bookings, strategic collaborations, and curated entertainment partnerships, backed by a strong network across the Indian music industry." } },
                { "@type": "Question", "name": "How can I get in touch for an event or collaboration?", "acceptedAnswer": { "@type": "Answer", "text": "Reach out via email at info@explive.in or use the contact form at explive.in/contact." } },
                { "@type": "Question", "name": "What upcoming events is Exp Live organising?", "acceptedAnswer": { "@type": "Answer", "text": "Upcoming events include Seasona Festival 2026 (23rd May 2026 at Bandra Fort, Mumbai) and Ehsaas e Shaam (10th July 2026 at Dome at NSCI, Mumbai)." } },
              ]
            })
          }}
        />
      </section>

      {/* ── CLOSING — dark, no kicker label ── */}
      <section className="w-full py-24 md:py-36 bg-zinc-950 dark:bg-zinc-900">
        <div className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-snug tracking-tight max-w-2xl mb-10 md:mb-12">
            Ready to create something people will remember?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white border border-white/25 px-8 py-4 rounded-full hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 group"
          >
            Get In Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
