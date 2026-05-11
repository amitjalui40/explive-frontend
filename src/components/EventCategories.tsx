"use client";

import React, { useState, useEffect, useRef } from 'react';
import { homepageData } from '@/config/homepageData';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const EventCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalMs = homepageData.eventCategories.settings?.autoPlayIntervalMs || 6000;

  useEffect(() => {
    if (!homepageData.eventCategories.settings?.autoPlay || isPaused) return;

    const intervalId = setInterval(() => {
      setHoveredIndex((prevIndex) =>
        (prevIndex + 1) % homepageData.eventCategories.cards.length
      );
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleUserInteraction = (index: number) => {
    setHoveredIndex(index);
    setIsPaused(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section id="event-types" className="relative py-24 md:py-32 w-full min-h-screen flex items-center bg-zinc-950 overflow-hidden">

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes arrowPulse {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px rgba(52,211,153,0.9)); }
          50% { opacity: 0.55; filter: drop-shadow(0 0 2px rgba(52,211,153,0.2)); }
        }
      `}</style>

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

      {/* Persistent Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Cinematic Noise overlay */}
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

          {/* Dynamic Glass Description Box */}
          <div className="hidden lg:block mt-4 lg:mt-8 bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
            <div className="flex items-center justify-between mb-6">
              {/* Pulsing dot indicator */}
              <span className="relative flex items-center justify-center w-7 h-7">
                <span className="absolute w-5 h-5 rounded-full bg-emerald-400/20 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
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
                className={`group relative flex flex-row items-start lg:items-center gap-3 md:gap-6 cursor-pointer py-4 md:py-5 border-b border-white/5 last:border-none transition-all duration-500 px-2 rounded-sm ${isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}
              >
                {/* Autoplay progress bar — runs along the bottom of the active row */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 overflow-hidden">
                    <div
                      key={`${hoveredIndex}-${isPaused}`}
                      className="h-full bg-emerald-400/60"
                      style={!isPaused ? {
                        animation: `progressFill ${intervalMs}ms linear forwards`
                      } : { width: '0%' }}
                    />
                  </div>
                )}

                {/* Arrow indicator */}
                <span className={`flex items-center shrink-0 w-8 lg:mt-0 ${isActive ? 'mt-0' : 'mt-1'}`}>
                  <ChevronRight
                    strokeWidth={3}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive
                        ? 'w-6 h-6 text-emerald-400'
                        : 'w-4 h-4 text-white/20 group-hover:text-white/40 group-hover:w-5 group-hover:h-5'
                    }`}
                    style={isActive ? { animation: 'arrowPulse 2s ease-in-out infinite' } : {}}
                  />
                </span>

                <div className="flex flex-col w-full">
                  <h3
                    className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.95] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'text-white translate-x-1 md:translate-x-6 drop-shadow-2xl' : 'text-white/20 group-hover:text-white/40 group-hover:translate-x-2'}`}
                  >
                    {event.title}
                  </h3>

                  {/* Mobile-only inline description */}
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
