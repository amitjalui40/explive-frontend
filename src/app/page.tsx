import { features } from "@/config/features";
import { homepageData } from "@/config/homepageData";
import { EventCategories } from "@/components/EventCategories";
import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/Hero";
import { UpcomingShows } from "@/components/UpcomingShows";
import { Footer } from "@/components/Footer";
import { UpcomingShowsGrid } from "@/components/UpcomingShowsGrid";
import { UpcomingShowsStack } from "@/components/UpcomingShowsStack";

export default function Home() {
  return (
    <main className="w-full">
      {/* Modular Hero Section Component */}
      <Hero />

      {features.showUpcomingShowsGrid && <UpcomingShowsGrid />}
      <UpcomingShowsStack />

      {/* Dynamic Event Types Grid (Bento Box) */}
      {/* Modular Event Categories Section */}
      <EventCategories />

      {/* Modular About Us Section */}
      <AboutUs />

      {/* Featured Spotlight Section (Glassmorphism Hierarchy) */}
      {features.showFeaturedSpotlight && (
      <section id="featured-spotlight" className="relative py-24 md:py-32 w-full max-w-[120rem] mx-auto overflow-hidden bg-zinc-50 dark:bg-zinc-950">

        {/* Abstract Glowing Orbs & Disco Light Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Sweeping Volumetric Disco Lasers - Cranked up intensity */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] opacity-80 dark:opacity-60 dark:mix-blend-screen animate-[spin_40s_linear_infinite]" style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(236,72,153,0.8) 45deg, transparent 90deg, rgba(6,182,212,0.8) 135deg, transparent 180deg, rgba(16,185,129,0.8) 225deg, transparent 270deg, rgba(236,72,153,0.8) 315deg, transparent 360deg)'
          }} />

          {/* Ambient Glowing Orbs - Cranked up intensity */}
          <div className="absolute top-[10%] left-[5%] w-[60vw] h-[60vw] bg-fuchsia-500/40 dark:bg-fuchsia-500/30 blur-[120px] dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '7s' }} />
          <div className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] bg-cyan-500/40 dark:bg-cyan-500/30 blur-[120px] dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
        </div>

        <div className="relative z-10 md:px-16 xl:px-24 flex flex-col gap-12">

          {/* Section Header & Actions */}
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

          {/* Container: Horizontal Carousel (Mobile) / Custom Grid (Desktop) */}
          <div
            className="flex md:grid md:grid-cols-2 gap-6 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-8 md:pb-0 px-6 md:px-0"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

            {/* The Headliner (Show #1) - Full Width on Desktop */}
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

            {/* Show #2 */}
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

            {/* Show #3 */}
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

            {/* Invisible Mobile Spacer to ensure the last card can be scrolled cleanly into view with right padding */}
            <div className="md:hidden shrink-0 w-1" />

          </div>
        </div>
      </section>
      )}

      {/* Modular Upcoming Shows Component */}
      {/* <UpcomingShows /> */}



      {/* 
        ========================================================
        NEW SECTION: DISCO FLASHY IMPACT ANALYTICS
        Highlights the legacy of what Explive has done till now
        ========================================================
      */}
      <section className="relative w-full py-32 md:py-48 bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/10 z-0">

        {/* Flashy Disco Background 
            Creates an intense, moving, vibrant neon dance-floor aesthetic 
        */}
        <div className="absolute inset-0 pointer-events-none opacity-90 z-0">
          {/* Crazy moving neon blurred blobs for the Strobe light effect */}
          <div className="absolute top-[-10%] left-[-10%] w-[70vw] md:w-[50vw] h-[50vw] bg-fuchsia-600 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '2s' }} />
          <div className="absolute top-[20%] right-[-10%] w-[80vw] md:w-[60vw] h-[60vw] bg-cyan-500 blur-[120px] md:blur-[140px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-[-20%] left-[10%] w-[90vw] md:w-[70vw] h-[50vw] bg-yellow-500 blur-[100px] md:blur-[130px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />

          {/* Geometric Laser Grid (Synthwave/Disco Floor) */}
          <div className="absolute inset-0 z-10 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '60px 60px', transform: 'perspective(1000px) rotateX(60deg) scale(2.5) translateY(-100px)', transformOrigin: 'top center' }} />
        </div>

        {/* Content Container */}
        <div className="relative w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24 z-20 flex flex-col items-center text-center">

          <span className="px-6 py-2 border border-white/40 rounded-full font-black uppercase tracking-[0.3em] text-white backdrop-blur-md bg-white/10 mb-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            The Explive Legacy
          </span>

          <h2 className="text-6xl md:text-8xl xl:text-[140px] font-black uppercase tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-20 leading-[0.85] mix-blend-overlay">
            Create <br /> Elevate <br /> Celebrate
          </h2>

          {/* Architectural Typography Stats (No bounding boxes) */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-16 lg:gap-8 pt-16 md:pt-24 border-t border-white/20">

            <div className="flex flex-col items-center md:items-start group cursor-default w-full md:w-1/3">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-2.5 h-2.5 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)] animate-pulse" />
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">Celebrity Events</p>
              </div>
              {/* Hollow text effect allowing background to shine through */}
              <h4 className="text-8xl lg:text-[140px] font-black leading-none text-transparent transition-all duration-500 hover:text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                100<span className="text-fuchsia-500 text-6xl lg:text-8xl font-medium -ml-2">+</span>
              </h4>
            </div>

            <div className="flex flex-col items-center md:items-start group cursor-default w-full md:w-1/3 md:border-l md:border-white/10 md:pl-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">Total Global Reach</p>
              </div>
              <h4 className="text-8xl lg:text-[140px] font-black leading-none text-transparent transition-all duration-500 hover:text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                350<span className="text-cyan-500 text-6xl lg:text-8xl font-medium -ml-1">M</span>
              </h4>
            </div>

            <div className="flex flex-col items-center md:items-start group cursor-default w-full md:w-1/3 md:border-l md:border-white/10 md:pl-12">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-pulse" />
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">Verified Attendees</p>
              </div>
              <h4 className="text-8xl lg:text-[140px] font-black leading-none text-transparent transition-all duration-500 hover:text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                60<span className="text-yellow-500 text-6xl lg:text-8xl font-medium -ml-1">K</span>
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* Modular Premium Footer */}
      <Footer />

    </main>
  );
};
