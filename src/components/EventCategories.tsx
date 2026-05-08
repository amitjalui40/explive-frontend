import React from 'react';
import { homepageData } from '@/config/homepageData';

export const EventCategories = () => {
  return (
    <section id="event-types" className="relative py-24 md:py-20 w-full max-w-[120rem] mx-auto overflow-hidden bg-zinc-50 dark:bg-zinc-950 px-6 lg:px-12 md:h-screen md:min-h-[700px] flex flex-col justify-center">
      
      {/* Immersive Cinematic Party Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* SVG Noise for Premium Film Grain (Apple-like) */}
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30 dark:opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {/* Custom roaming keyframes for true fluid motion */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes roam1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(25vw, -15vh) scale(1.2); }
            66% { transform: translate(-15vw, 20vh) scale(0.8); }
          }
          @keyframes roam2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-20vw, 25vh) scale(1.3); }
            66% { transform: translate(15vw, -20vh) scale(0.9); }
          }
          @keyframes roam3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15vw, 20vh) scale(0.9); }
            66% { transform: translate(-25vw, -15vh) scale(1.4); }
          }
        `}} />
        
        {/* Volumetric Stage Lighting Beams (Intensified) */}
        <div className="absolute top-[-20%] left-[10%] w-[30vw] h-[150vh] bg-gradient-to-b from-fuchsia-500/40 dark:from-fuchsia-500/30 to-transparent blur-[60px] rotate-[25deg] origin-top animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[-20%] right-[10%] w-[40vw] h-[150vh] bg-gradient-to-b from-cyan-500/40 dark:from-cyan-500/30 to-transparent blur-[80px] -rotate-[35deg] origin-top animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-[-10%] left-[50%] w-[20vw] h-[120vh] bg-gradient-to-b from-emerald-500/30 dark:from-emerald-500/20 to-transparent blur-[50px] rotate-[5deg] origin-top animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '5s', animationDelay: '2s' }} />

        {/* Morphing Liquid Orbs (Aurora Effect) - Now extremely vibrant and roaming */}
        {/* Note: we use inline style to combine the custom roam animations with a slow spin for maximum fluidity */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[50vw] max-w-[600px] aspect-square bg-fuchsia-500/60 dark:bg-fuchsia-500/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen rounded-[40%_60%_70%_30%]" 
          style={{ animation: 'roam1 25s ease-in-out infinite alternate, spin 20s linear infinite' }} 
        />
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[60vw] max-w-[700px] aspect-square bg-emerald-500/60 dark:bg-emerald-500/40 blur-[100px] mix-blend-multiply dark:mix-blend-screen rounded-[70%_30%_50%_50%]" 
          style={{ animation: 'roam2 30s ease-in-out infinite alternate, spin 25s linear infinite reverse' }} 
        />
        <div 
          className="absolute top-[30%] left-[30%] w-[40vw] max-w-[500px] aspect-square bg-cyan-500/60 dark:bg-cyan-500/40 blur-[90px] mix-blend-multiply dark:mix-blend-screen rounded-[50%_50%_60%_40%]" 
          style={{ animation: 'roam3 20s ease-in-out infinite alternate, spin 18s linear infinite' }} 
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row items-baseline justify-between gap-6 w-full mb-10 md:mb-12 shrink-0">
        <div className="flex flex-col gap-2">
          <span className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-500">{homepageData.eventCategories.header.kicker}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-zinc-50 leading-[0.9]">
            {homepageData.eventCategories.header.titleLine1} <br className="hidden md:block" /> {homepageData.eventCategories.header.titleLine2}
          </h2>
        </div>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400 font-medium md:text-right text-sm md:text-base">
          {homepageData.eventCategories.header.description}
        </p>
      </div>

      {/* Expanding Cinematic Accordion */}
      <div className="relative z-10 flex flex-col md:flex-row gap-3 md:gap-5 w-full flex-1 min-h-[500px] md:min-h-0">
        {homepageData.eventCategories.cards.map((event, index) => (
          <div 
            key={event.id}
            className="group relative flex-1 hover:flex-[3] md:hover:flex-[4] transition-[flex] duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer bg-black shadow-2xl"
          >
            {/* Background Image */}
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 md:opacity-40 group-hover:opacity-100 transition-all duration-[1.5s] ease-out group-hover:scale-105"
            />
            
            {/* Dark Overlay for collapsed state */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
            
            {/* Subtle bottom gradient always present for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
            
            {/* Collapsed State: Elegant Number & Horizontal Text (Hidden on Hover) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-100 group-hover:opacity-0 transition-opacity duration-500 overflow-hidden">
              <div className="flex items-center gap-4">
                <span className="text-white/50 font-bold tracking-[0.2em] text-sm shrink-0">0{index + 1}</span>
                <h3 className="text-white font-semibold tracking-wide uppercase text-lg md:text-xl whitespace-nowrap truncate drop-shadow-md">
                  {event.title}
                </h3>
              </div>
            </div>

            {/* Expanded State: Apple-like Glass Content Box */}
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transform translate-y-8 group-hover:translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <span className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-white/20 text-white text-sm font-bold shadow-inner">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-sm whitespace-nowrap">
                    {event.title}
                  </h3>
                </div>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    <p className="mt-2 text-sm md:text-lg text-zinc-100/90 font-medium max-w-xl leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
