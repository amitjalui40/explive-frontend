import type { Metadata } from "next";
import { features } from "@/config/features";
import { siteConfig, seoConfig, homepageData } from "@/config/siteData";
import { EventCategories } from "@/components/EventCategories";
import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { UpcomingShowsGrid } from "@/components/UpcomingShowsGrid";
import { UpcomingShowsStack } from "@/components/UpcomingShowsStack";
import { UpcomingShowsVerticalCard } from "@/components/UpcomingShowsVerticalCard";

const eventSchemas = homepageData.upcomingShowsGrid.items.map((item) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": item.title,
  "startDate": item.isoDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": item.venue,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
    },
  },
  "organizer": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
  },
  "url": siteConfig.url,
}));

export const metadata: Metadata = {
  title: { absolute: seoConfig.pages.home.title },
  description: seoConfig.pages.home.description,
  openGraph: {
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main className="w-full">
      {eventSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Hero />

      {features.showUpcomingShowsVerticalCard && <UpcomingShowsVerticalCard />}
      {features.showUpcomingShowsGrid && <UpcomingShowsGrid />}
      {features.showUpcomingShowsStack && <UpcomingShowsStack />}

      <EventCategories />
      <AboutUs />

      {features.showFeaturedSpotlight && (
      <section id="featured-spotlight" className="relative py-24 md:py-32 w-full max-w-[120rem] mx-auto overflow-hidden bg-zinc-50 dark:bg-zinc-950">

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] opacity-80 dark:opacity-60 dark:mix-blend-screen animate-[spin_40s_linear_infinite]" style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(236,72,153,0.8) 45deg, transparent 90deg, rgba(6,182,212,0.8) 135deg, transparent 180deg, rgba(16,185,129,0.8) 225deg, transparent 270deg, rgba(236,72,153,0.8) 315deg, transparent 360deg)'
          }} />
          <div className="absolute top-[10%] left-[5%] w-[60vw] h-[60vw] bg-fuchsia-500/40 dark:bg-fuchsia-500/30 blur-[120px] dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '7s' }} />
          <div className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] bg-cyan-500/40 dark:bg-cyan-500/30 blur-[120px] dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
        </div>

        <div className="relative z-10 md:px-16 xl:px-24 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 w-full px-6 md:px-0">
            <div className="flex flex-col gap-2">
              <span className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-500">Upcoming Events</span>
              <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-zinc-900 dark:text-zinc-50">
                Featured <br className="hidden md:block" /> Spotlight
              </h2>
            </div>
            <button className="group flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 transition-colors">
              View More Upcoming
              <span className="block transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
            </button>
          </div>

          <div
            className="flex md:grid md:grid-cols-2 gap-6 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-8 md:pb-0 px-6 md:px-0"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            <div className="shrink-0 snap-center w-[85vw] md:w-auto md:col-span-2 group relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 md:p-12 cursor-pointer bg-white/60 dark:bg-zinc-900/40 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="https://images.unsplash.com/photo-1540039155732-d6741b687cb8?q=80&w=2000&auto=format&fit=crop"
                alt="Main Event"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay dark:mix-blend-normal dark:opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/90 via-zinc-100/20 to-transparent dark:from-black/90 dark:via-black/20" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 mb-4 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Next Event</span>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white drop-shadow-sm">Neon Dreams Festival</h3>
                <p className="mt-4 text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-300 max-w-2xl whitespace-normal">A transcendent audio-visual experience featuring top electronic artists from around the globe.</p>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-400">Oct 24, 2026</span>
                  <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span className="text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-400">Grand Arena</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 snap-center w-[85vw] md:w-auto group relative h-[450px] md:h-[400px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 cursor-pointer bg-white/60 dark:bg-zinc-900/40 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=1000&auto=format&fit=crop"
                alt="Supporting Event 1"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay dark:mix-blend-normal dark:opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/90 via-zinc-100/20 to-transparent dark:from-black/90 dark:via-black/20" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white">Midnight Synth</h3>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-400">Nov 12, 2026</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 snap-center w-[85vw] md:w-auto group relative h-[450px] md:h-[400px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 cursor-pointer bg-white/60 dark:bg-zinc-900/40 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
                alt="Supporting Event 2"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay dark:mix-blend-normal dark:opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/90 via-zinc-100/20 to-transparent dark:from-black/90 dark:via-black/20" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white">Echoes Live</h3>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-400">Dec 05, 2026</span>
                </div>
              </div>
            </div>

            <div className="md:hidden shrink-0 w-1" />
          </div>
        </div>
      </section>
      )}

      <Footer />
    </main>
  );
}
