"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // If we've reached the end, gently snap back to the beginning
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    }
  };

  // Auto-scroll logic (Pauses automatically if mouse is hovering over carousel)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      scrollRight();
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Cloudinary Extremely Optimized Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 h-full w-full object-cover z-0 bg-zinc-950"
          poster="https://res.cloudinary.com/dgrmsleyc/video/upload/so_0,w_800,q_auto/v1776357410/Dancing_Club_Stock_Video_Free_qeyiim.jpg"
        >
          {/* WebM loads 10x faster on modern browsers. We explicitly request it from Cloudinary and scale it down to 1080p width */}
          <source src="https://res.cloudinary.com/dgrmsleyc/video/upload/w_1080,q_auto,f_webm/v1776357410/Dancing_Club_Stock_Video_Free_qeyiim.webm" type="video/webm" />
          {/* Fallback to optimized MP4 for older iPhones */}
          <source src="https://res.cloudinary.com/dgrmsleyc/video/upload/w_1080,q_auto,f_mp4/v1776357410/Dancing_Club_Stock_Video_Free_qeyiim.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-white md:text-8xl drop-shadow-xl">
            Explive
          </h1>
          <p className="mt-6 text-xl text-zinc-200 md:text-2xl max-w-2xl drop-shadow-md">
            The canvas is ready for your full-screen video experience.
          </p>
        </div>
      </section>

      {/* Modern Upcoming Shows Carousel */}
      <section className="relative py-24 md:py-32 w-full max-w-[120rem] mx-auto overflow-hidden bg-zinc-50 dark:bg-zinc-950">

        {/* Immersive Club Background Elements */}
        {/* Structural Grid to completely eliminate "blank" empty space */}
        <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Enhanced Stage Lighting Blurs (Pulled much closer to the center) */}
          <div className="absolute top-[10%] left-[10%] md:left-[20%] w-[70vw] md:w-[60vw] h-[40vw] bg-fuchsia-500/20 dark:bg-fuchsia-500/10 blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-[20%] right-[5%] md:right-[15%] w-[80vw] md:w-[50vw] h-[50vw] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[100px] md:blur-[160px] mix-blend-multiply dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[0%] left-1/2 w-[100vw] md:w-[80vw] h-[30vw] -translate-x-1/2 bg-emerald-500/15 dark:bg-emerald-500/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen rounded-full animate-pulse" style={{ animationDuration: '7s' }} />


          {/* Minimal Disco Star Background Graphics */}
          <div className="absolute top-0 right-[-10%] w-[50vw] max-w-[800px] aspect-square opacity-[0.03] dark:opacity-[0.02] text-zinc-900 dark:text-zinc-50" style={{ animation: 'spin 90s linear infinite' }}>
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] max-w-[600px] aspect-square opacity-[0.03] dark:opacity-[0.02] text-zinc-900 dark:text-zinc-50" style={{ animation: 'spin 60s linear infinite reverse' }}>
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
            </svg>
          </div>


        </div>

        {/* Section Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-baseline justify-between px-6 md:px-16 xl:px-24 mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-zinc-900 dark:text-zinc-50">
            Upcoming <br className="hidden md:block" /> Shows
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-auto justify-between md:justify-end">
            <button className="group flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 transition-colors">
              View Complete Roster
              <span className="block transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Navigation & Carousel Wrapper */}
        <div
          className="relative z-10 w-full group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Left Arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll Left"
            className="hidden md:flex absolute left-4 xl:left-8 top-[40%] -translate-y-1/2 z-10 h-16 w-16 rounded-full items-center justify-center bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="w-8 h-8 ml-[-2px]" />
          </button>

          {/* Floating Right Arrow */}
          <button
            onClick={scrollRight}
            aria-label="Scroll Right"
            className="hidden md:flex absolute right-4 xl:right-8 top-[40%] -translate-y-1/2 z-10 h-16 w-16 rounded-full items-center justify-center bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight className="w-8 h-8 mr-[-2px]" />
          </button>

          {/* Editorial Snap Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 md:gap-12 overflow-x-auto px-6 md:px-16 xl:px-24 pb-12 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Workaround for global hidden scrollbars in Webkit */}
            <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-[85vw] min-w-[280px] md:w-[380px] lg:w-[420px] shrink-0 snap-center group cursor-pointer"
              >
                {/* Minimal Image Frame */}
                <div className="relative aspect-[4/5] bg-zinc-200 dark:bg-zinc-900 overflow-hidden mb-5 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out">
                  <img
                    src={`https://images.pexels.com/photos/${1190298 + i}/pexels-photo-${1190298 + i}.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load`}
                    alt="Event"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop'; }}
                  />

                  {/* Minimalist Floating Badge */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 dark:bg-black/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                    Limited Tickets
                  </div>
                </div>

                {/* Stark Typography */}
                <div className="flex flex-row items-start justify-between gap-4 mt-1">
                  <div>
                    <p className="text-xs md:text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Oct {20 + i} • 8:00 PM
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
                      Oasis Festival {i}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-medium mt-3">
                      Metropolis Warehouse • Miami, FL
                    </p>
                  </div>

                  <div className="shrink-0 pt-0">
                    <span className="text-2xl md:text-3xl font-black font-mono text-zinc-900 dark:text-white block text-right mt-1">
                      $45
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        NEW SECTION: ASYMMETRICAL BENTO GRID EXPERIENCE PORTAL
        Extremely modern, futuristic, and fully responsive
        ========================================================
      */}
      <section className="relative w-full py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl">
              Curated <br className="hidden md:block"/> Experiences
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 md:text-right max-w-sm font-medium tracking-widest uppercase text-xs md:text-sm">
              Discover unique sub-cultures, hidden venues, and VIP access across our exclusive underground network.
            </p>
          </div>

          {/* 
            Bento Grid Layout 
            Mobile: 2-Column Interlocking Mosaic -> Desktop: 4 Columns
          */}
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto lg:grid-rows-[400px_400px] gap-3 md:gap-6 w-full">
            
            {/* Feature 1: The Massive Monolith (Spans 2 cols on mobile, 2 cols 2 rows on desktop) */}
            <div className="group relative col-span-2 lg:row-span-2 overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-200 dark:bg-zinc-900 cursor-pointer h-[350px] lg:h-full">
              <img 
                src="https://images.unsplash.com/photo-1574391855214-41d8e13f4124?q=80&w=2835&auto=format&fit=crop" 
                alt="Underground Rave"
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                <span className="inline-block px-3 md:px-4 py-1 border border-white/30 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full mb-3 md:mb-4 group-hover:bg-white group-hover:text-black transition-colors">Featured</span>
                <h3 className="text-3xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none mb-2 md:mb-4">Underground <br className="hidden md:block"/> Sessions</h3>
                <p className="text-zinc-300 font-medium text-xs md:text-sm max-w-md line-clamp-2 md:line-clamp-none">Access the most exclusive, hidden locations with our secret lineup of global DJs.</p>
              </div>
            </div>

            {/* Feature 2: High VIP Cell (Spans 1 col on both) */}
            <div className="group relative col-span-1 overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-900 cursor-pointer h-[200px] md:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2940&auto=format&fit=crop" 
                alt="VIP Experience"
                className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
                <h3 className="text-lg md:text-2xl font-black uppercase text-white tracking-tighter mb-1 md:mb-2 group-hover:text-amber-400 transition-colors">VIP Tables & Space</h3>
                <p className="text-zinc-400 text-[10px] md:text-sm hidden md:block">Ultra-premium table service.</p>
              </div>
            </div>

            {/* Feature 3: Tall Cell (Spans 1 col on both, 2 rows on desktop) */}
            <div className="group relative col-span-1 lg:row-span-2 overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-900 cursor-pointer h-[200px] lg:h-full">
              <img 
                src="https://images.unsplash.com/photo-1545128678-299f05ee4c96?q=80&w=2819&auto=format&fit=crop" 
                alt="Afterparty"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
                <h3 className="text-xl md:text-3xl lg:text-5xl font-black uppercase text-white tracking-tighter mb-3 leading-none">The <br/> After <br/> Party</h3>
                <button className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors text-xs md:text-base">
                  &rarr;
                </button>
              </div>
            </div>

            {/* Feature 4: Small Cell (Spans 2 cols on mobile, 1 col on desktop) */}
            <div className="group relative col-span-2 lg:col-span-1 overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-900 cursor-pointer h-[120px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-widest mb-2 md:mb-4">View All <br className="hidden md:block"/> Categories</h3>
                <button className="px-4 py-2 md:px-6 md:py-3 bg-white text-black text-[10px] md:text-sm font-bold uppercase rounded-full group-hover:scale-110 transition-transform">
                  Explore
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

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
            Create <br/> Elevate <br/> Celebrate
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

    </main>
  );
};
