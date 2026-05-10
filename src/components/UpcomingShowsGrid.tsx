"use client";

import React from 'react';
import { homepageData } from '@/config/homepageData';

// Reusable Event Card Component for the Masonry Grid
const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="group w-full flex flex-col cursor-pointer">
      {/* Uncropped 16:9 Image Container */}
      <div className="relative w-full aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
        
        {/* Subtle inner shadow and hover glare */}
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Editorial Metadata Below Image */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mt-6 md:mt-8 px-2">
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white group-hover:text-emerald-400 transition-colors duration-500 drop-shadow-md">
            {event.title}
          </h3>
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400">
            <span className="bg-white/10 px-3 py-1 rounded-full text-white">{event.date}</span>
            {event.location && (
              <>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>{event.location}</span>
              </>
            )}
          </div>
        </div>

        <a 
          href={event.buttonLink} 
          className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black border border-transparent rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 group-hover:bg-transparent group-hover:text-white group-hover:border-white hover:scale-105 active:scale-95 whitespace-nowrap self-start sm:self-auto shrink-0"
        >
          {event.buttonText}
        </a>
      </div>
    </div>
  );
};

export const UpcomingShowsGrid = () => {
  const { header, items } = homepageData.upcomingShowsGrid;

  // Split items for masonry flow
  const leftItems = items.filter((_, i) => i % 2 === 0);
  const rightItems = items.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 overflow-hidden border-t border-white/5">
      
      {/* Dynamic Ambient Background (Blends all visible posters) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-40">
        {items.map((event, index) => {
          // Scatter the blurred blobs based on index
          const positionClass = index % 2 === 0 
            ? "top-[-10%] left-[-10%] origin-top-left" 
            : "bottom-[-10%] right-[-10%] origin-bottom-right";
            
          return (
            <img
              key={`bg-${event.id}`}
              src={event.image}
              alt=""
              className={`absolute w-[70vw] h-[70vw] object-cover scale-150 blur-[120px] md:blur-[180px] rounded-full opacity-60 ${positionClass}`}
            />
          );
        })}
        {/* Film grain noise overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-24 w-full">
          
          {/* Left Column (Dominant, Starts Immediately) */}
          <div className="w-full md:w-7/12 flex flex-col gap-16 md:gap-32">
            
            {/* Render Even-indexed Events */}
            {leftItems.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}

            {/* View All & Description Block (Fills bottom left empty space) */}
            <div className="flex flex-col items-start gap-8 bg-black/40 backdrop-blur-2xl border border-white/10 p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-2xl mt-auto">
              <p className="text-zinc-400 font-medium tracking-widest uppercase text-xs md:text-sm leading-relaxed max-w-md">
                {header.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                View All Shows &rarr;
              </a>
            </div>

          </div>

          {/* Right Column (Staggered Downwards) */}
          <div className="w-full md:w-5/12 flex flex-col gap-16 md:gap-32">
            
            {/* Massive Typography (Fills top right empty space) */}
            <div className="pt-0 md:pt-12 lg:pt-24 hidden md:block">
              <h2 className="text-6xl lg:text-8xl xl:text-[7rem] font-black tracking-tighter uppercase text-white drop-shadow-2xl leading-[0.85]">
                {header.titleLine1} <br /> 
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                  {header.titleLine2}
                </span>
              </h2>
            </div>

            {/* Mobile Title */}
            <div className="md:hidden pt-8">
               <h2 className="text-6xl font-black tracking-tighter uppercase text-white drop-shadow-2xl leading-[0.85]">
                {header.titleLine1} <br /> {header.titleLine2}
              </h2>
            </div>

            {/* Render Odd-indexed Events */}
            {rightItems.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
