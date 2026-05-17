"use client";

import React from 'react';
import { homepageData } from '@/config/homepageData';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" data-navbar-theme="dark">
      {/* Cloudinary Extremely Optimized Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 h-full w-full object-cover z-0 bg-zinc-950"
        poster={homepageData.hero.video.poster}
      >
        {/* WebM loads 10x faster on modern browsers. We explicitly request it from Cloudinary and scale it down to 1080p width */}
        <source src={homepageData.hero.video.webm} type="video/webm" />
        {/* Fallback to optimized MP4 for older iPhones */}
        <source src={homepageData.hero.video.mp4} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        
        {/* Minimalist Statement Header - Typographically optimized for mobile scanning */}
        <h1 className="text-[13vw] sm:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-2xl max-w-5xl leading-[1.05]">
          {homepageData.hero.headline.line1} <br className="sm:hidden"/> {homepageData.hero.headline.line2}
        </h1>
        
        <p className="mt-6 md:mt-8 text-sm md:text-xl text-zinc-300 font-medium tracking-wide max-w-2xl drop-shadow-md px-4">
          {homepageData.hero.description}
        </p>
        
        {/* Action Button - Psychologically optimized for mobile thumb-zone */}
        {homepageData.hero.button.visible && (
          <div className="mt-12 w-full sm:w-auto flex flex-col items-center">
            <button 
              onClick={() => document.getElementById(homepageData.hero.button.targetId)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full sm:w-auto px-8 py-5 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-full text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/20 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {homepageData.hero.button.text}
                <span className="block transition-transform duration-300 group-hover:translate-y-1 animate-bounce sm:animate-none">&darr;</span>
              </span>
              {/* Permanent glow on mobile, hover-only on desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            
            {/* Explicit Mobile Microcopy */}
            <span className="mt-4 text-[10px] text-zinc-400 font-bold uppercase tracking-widest sm:hidden opacity-80">
              Scroll to explore
            </span>
          </div>
        )}

        {/* Aesthetic Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60">
            <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
