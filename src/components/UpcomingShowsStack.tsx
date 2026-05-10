"use client";

import React, { useState, useEffect, useRef } from 'react';
import { homepageData } from '@/config/homepageData';

export const UpcomingShowsStack = () => {
  const { header, items, stackSettings } = homepageData.upcomingShowsGrid;
  const { autoPlay = true, intervalMs = 5000, transitionSpeed = 1000 } = stackSettings || {};
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleManualClick = (action: () => void) => {
    progressRef.current = 0;
    action();
  };

  // Dynamic Auto-Loop with Pause & Resume
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    // Calculate start time factoring in any existing progress (for resume)
    let startTime = Date.now() - (progressRef.current / 100) * intervalMs;
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / intervalMs) * 100;
      
      if (currentProgress >= 100) {
        progressRef.current = 0;
        handleNext();
        startTime = Date.now();
      } else {
        progressRef.current = currentProgress;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex, isHovered, autoPlay, intervalMs]);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      handleManualClick(handleNext);
    } else if (index > activeIndex) {
      handleManualClick(() => setActiveIndex(index));
    }
  };

  const getInlineStyle = (index: number, activeIdx: number) => {
    let offset = index - activeIdx;
    
    // Smooth wrap for Coverflow Symmetry
    if (offset > items.length / 2) {
      offset -= items.length;
    } else if (offset < -items.length / 2) {
      offset += items.length;
    }
    
    const absOffset = Math.abs(offset);

    // Active Card (Front)
    if (offset === 0) {
      return { 
        zIndex: 30, 
        transform: 'scale(1) translate3d(0, 0%, 0) rotate(0deg)', 
        opacity: 1, 
        filter: 'blur(0px)',
        transitionDuration: `${transitionSpeed}ms`
      };
    } 
    // Cards sitting on the right or left (Coverflow Symmetry)
    else {
      return {
        zIndex: 30 - absOffset,
        transform: `scale(${1 - absOffset * 0.05}) translate3d(${offset * 15}%, ${absOffset * 8}%, 0) rotate(${offset * 6}deg)`,
        opacity: 1 - (absOffset * 0.2),
        filter: `blur(${absOffset * 3}px)`,
        cursor: 'pointer',
        transitionDuration: `${transitionSpeed}ms`
      };
    }
  };

  const activeEvent = items[activeIndex];

  return (
    <section className="relative w-full py-24 md:py-0 min-h-[90vh] bg-black overflow-hidden border-t border-white/10 flex items-center justify-center">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>

      {/* 1. Immersive Echo Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        {items.map((event, index) => (
          <img
            key={`bg-stack-${event.id}`}
            src={event.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-[1.3] blur-[80px] md:blur-[120px] transition-opacity ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              opacity: activeIndex === index ? 0.45 : 0,
              transitionDuration: `${transitionSpeed}ms`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
      </div>

      {/* 2. Kinetic Typography */}
      <div className="absolute top-[10%] left-0 w-[200vw] z-0 opacity-[0.15] pointer-events-none select-none flex whitespace-nowrap animate-marquee">
        <h1 
          className="text-[25vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter text-transparent"
          style={{ WebkitTextStroke: '2px white' }}
        >
          UPCOMING LIVE EXPERIENCES &nbsp;&bull;&nbsp; UPCOMING LIVE EXPERIENCES &nbsp;&bull;&nbsp; UPCOMING LIVE EXPERIENCES &nbsp;&bull;&nbsp; 
        </h1>
      </div>

      <div 
        className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24 flex flex-col items-center justify-center h-full gap-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)} // Resume loop on mobile after touch
      >
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col items-center text-center w-full mt-24 mb-8 z-40">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white drop-shadow-2xl leading-none">
            {header.titleLine1} <br /> {header.titleLine2}
          </h2>
        </div>

        {/* 3. The Central Upscaled Tactile Stack */}
        <div className="relative w-full max-w-[1000px] md:w-[75vw] xl:w-[65vw] aspect-video flex-shrink-0 z-30">
          {items.map((event, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={`card-${event.id}`}
                onClick={() => handleCardClick(index)}
                className="absolute inset-0 w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-black border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all ease-[cubic-bezier(0.25,1,0.5,1)] group"
                style={getInlineStyle(index, activeIndex)}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'scale-100' : 'scale-105'}`} 
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />
                )}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* 4. The Split-HUD Console (Fills Bottom Corners on Desktop, stacks on Mobile) */}
        {activeEvent && (
          <div className="w-full flex flex-col md:block mt-6 md:mt-0 z-40">
            
            {/* Bottom-Left Anchor: Typography Engine */}
            <div className="relative md:absolute md:bottom-8 md:left-6 lg:bottom-12 lg:left-16 max-w-full md:max-w-[40vw] lg:max-w-md pointer-events-none mb-4 md:mb-0">
              <div className="bg-black/60 backdrop-blur-3xl border border-white/20 p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-2 transform transition-all duration-500 hover:scale-105 pointer-events-auto cursor-default w-full">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-xl leading-none">
                  {activeEvent.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300 mt-2">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white whitespace-nowrap">{activeEvent.date}</span>
                  {activeEvent.location && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{activeEvent.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom-Right Anchor: Controls & Navigation */}
            <div className="relative md:absolute md:bottom-8 md:right-6 lg:bottom-12 lg:right-16 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-3xl border border-white/20 p-4 rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-row items-center justify-between md:justify-center gap-4 md:gap-6 transform transition-all duration-500 pointer-events-auto w-full">
                
                <a 
                  href={activeEvent.buttonLink} 
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap md:ml-4"
                >
                  {activeEvent.buttonText}
                </a>

                {/* Shuffle Controls */}
                <div className="flex flex-row items-center gap-2 md:gap-3 md:mr-2">
                  <button 
                    onClick={() => handleManualClick(() => setActiveIndex(prev => (prev - 1 + items.length) % items.length))}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shrink-0"
                  >
                    &larr;
                  </button>
                  
                  <button 
                    onClick={() => handleManualClick(handleNext)}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shrink-0"
                  >
                    &rarr;
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
