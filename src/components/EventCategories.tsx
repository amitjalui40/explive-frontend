"use client";

import React, { useState, useEffect, useRef } from 'react';
import { homepageData } from '@/config/homepageData';
import { ArrowRight } from 'lucide-react';

export const EventCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If autoplay is disabled in config, or if the user paused it by interacting, don't run the interval.
    if (!homepageData.eventCategories.settings?.autoPlay || isPaused) return;

    const intervalId = setInterval(() => {
      setHoveredIndex((prevIndex) => 
        (prevIndex + 1) % homepageData.eventCategories.cards.length
      );
    }, homepageData.eventCategories.settings.autoPlayIntervalMs || 6000);

    // Cleanup interval on unmount or when dependencies change
    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Cleanup resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Handler to pause the autoplay loop when user interacts
  const handleUserInteraction = (index: number) => {
    setHoveredIndex(index);
    setIsPaused(true);

    // Clear any existing resume countdown
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Automatically resume the loop after 10 seconds of no interaction
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section id="event-types" className="relative py-24 md:py-32 w-full min-h-screen flex items-center bg-zinc-950 overflow-hidden">
      
      {/* Dynamic Crossfading Backgrounds */}
      {homepageData.eventCategories.cards.map((event, index) => (
        <div 
          key={`bg-${event.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === hoveredIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
        >
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-110" 
          />
        </div>
      ))}

      {/* Persistent Dark Gradient Overlay for readability */}
      {/* Darkened across the entire screen so the white text always pops against bright backgrounds */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Cinematic Lighting/Noise overlay */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter2">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter2)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 xl:px-24 flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between h-full py-12">
        
        {/* Left Column: Headers & Active Description */}
        <div className="lg:w-1/3 flex flex-col justify-center gap-8 lg:sticky lg:top-1/4 h-max">
          <div className="flex flex-col gap-2">
            {homepageData.eventCategories.header.kicker && (
              <span className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-500">
                {homepageData.eventCategories.header.kicker}
              </span>
            )}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-white leading-[0.9] drop-shadow-lg">
              {homepageData.eventCategories.header.titleLine1} <br className="hidden lg:block" /> {homepageData.eventCategories.header.titleLine2}
            </h2>
          </div>
          
          <p className="text-zinc-300 font-medium text-sm md:text-base max-w-sm drop-shadow-md">
            {homepageData.eventCategories.header.description}
          </p>

          {/* Dynamic Glass Description Box mapping to the active hovered item (Hidden on mobile, uses inline accordion instead) */}
          <div className="hidden lg:block mt-4 lg:mt-8 bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
             <div className="flex items-center justify-between mb-6">
                <span className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-white/20 text-white text-sm font-bold shadow-inner">
                  0{hoveredIndex + 1}
                </span>
                <ArrowRight className="text-white/50 w-5 h-5" />
             </div>
             <div className="min-h-[100px] flex items-start">
               <p key={hoveredIndex} className="text-white text-base md:text-lg font-medium leading-relaxed drop-shadow-md">
                 {homepageData.eventCategories.cards[hoveredIndex].description}
               </p>
             </div>
          </div>
        </div>

        {/* Right Column: Massive Typography Hover List */}
        <div className="lg:w-2/3 flex flex-col justify-center lg:pl-16 py-8">
          {homepageData.eventCategories.cards.map((event, index) => {
            const isActive = index === hoveredIndex;
            return (
              <div 
                key={event.id}
                onMouseEnter={() => handleUserInteraction(index)}
                onClick={() => handleUserInteraction(index)}
                className="group flex flex-row items-start lg:items-center gap-3 md:gap-6 cursor-pointer py-4 md:py-5 border-b border-white/5 last:border-none transition-colors duration-300"
              >
                <span className={`text-sm md:text-xl font-mono font-bold transition-colors duration-500 mt-2 lg:mt-0 ${isActive ? 'text-emerald-400' : 'text-white/20 group-hover:text-white/40'}`}>
                  0{index + 1}
                </span>
                
                <div className="flex flex-col w-full">
                  <h3 
                    className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.95] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'text-white translate-x-1 md:translate-x-6 drop-shadow-2xl' : 'text-white/20 group-hover:text-white/40 group-hover:translate-x-2'}`}
                  >
                    {event.title}
                  </h3>
                  
                  {/* Mobile-only inline description (Accordion style) */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'max-h-40 opacity-100 mt-4 mb-2' : 'max-h-0 opacity-0 mt-0 mb-0'}`}>
                    <p className="text-zinc-300 text-sm font-medium leading-relaxed pl-3 md:pl-6 border-l-2 border-emerald-500/50">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
