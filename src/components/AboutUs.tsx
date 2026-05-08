import React from 'react';
import { homepageData } from '@/config/homepageData';
import { ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  const { about } = homepageData;

  return (
    <section className="relative w-full py-24 md:py-0 min-h-[800px] md:min-h-screen bg-white dark:bg-black overflow-hidden border-t border-zinc-200 dark:border-white/5 flex flex-col justify-center">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 md:mt-0">
          
          {/* Left: Text & Story */}
          <div className="flex flex-col gap-8 md:gap-10 order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-emerald-500 rounded-full" />
                <span className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-500">
                  {about.kicker}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-[1.05]">
                {about.title}
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-xl">
              <p>{about.description1}</p>
              <p>{about.description2}</p>
            </div>

            <div className="pt-4">
              <button className="group flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl">
                {about.buttonText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right: Image & Stats */}
          <div className="relative order-2 mt-8 lg:mt-0">
            
            {/* Main Image Frame */}
            <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] lg:max-h-[65vh] mx-auto w-full max-w-[500px] lg:max-w-none rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-zinc-200 dark:bg-zinc-900 shadow-2xl">
              <img 
                src={about.image} 
                alt="Event Crowd" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Glassmorphism Stats Panel */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-8 md:-left-8 lg:-bottom-10 lg:-left-12 bg-white/90 dark:bg-black/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 px-3 py-4 sm:p-5 md:p-8 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 w-[95%] md:w-auto">
              <div className="flex justify-around md:justify-between items-center gap-1 sm:gap-4 md:gap-10">
                {about.stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-0.5 md:gap-1 text-center md:text-left shrink-0">
                    <span className="text-lg sm:text-2xl md:text-4xl font-black font-mono text-zinc-900 dark:text-white drop-shadow-sm leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 max-w-[70px] sm:max-w-none mx-auto leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Ambient Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 dark:bg-emerald-500/20 blur-[100px] -z-10 rounded-full mix-blend-multiply dark:mix-blend-screen" />
          </div>

        </div>
      </div>
    </section>
  );
};
