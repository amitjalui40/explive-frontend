import React from 'react';
import { homepageData } from '@/config/homepageData';

export const AboutUs = () => {
  const { aboutSummary: about } = homepageData;

  return (
    <section className="relative w-full py-32 md:py-48 bg-zinc-50 dark:bg-zinc-950 overflow-hidden border-t border-zinc-200 dark:border-white/5 flex flex-col justify-center">
      
      {/* Background Ambient Organic Glows (Apple-like mesh gradients) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-emerald-400/30 dark:bg-emerald-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-cyan-400/30 dark:bg-cyan-600/20 blur-[140px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_alternate]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-fuchsia-600/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 w-full max-w-[80rem] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Apple-style Glassmorphic Container */}
        {/* Uses high blur, saturation boost, and very subtle border/shadow styling */}
        <div className="relative w-full bg-white/40 dark:bg-black/40 backdrop-blur-3xl backdrop-saturate-150 border border-white/50 dark:border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-[3rem] p-10 md:p-16 lg:p-24 overflow-hidden transition-transform duration-700 hover:scale-[1.01]">
          
          {/* Inner reflection highlight simulating polished glass edges */}
          <div className="absolute inset-0 rounded-[3rem] border-2 border-white/40 dark:border-white/5 pointer-events-none mix-blend-overlay" />
          
          {/* Ultra-subtle noise texture for psychological realism */}
          <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 flex flex-col gap-16 md:gap-20">
            
            {/* Header Area */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center justify-center gap-4">
                <span className="w-10 h-[1px] bg-zinc-400 dark:bg-zinc-600" />
                <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-400">
                  {about.kicker}
                </span>
                <span className="w-10 h-[1px] bg-zinc-400 dark:bg-zinc-600" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.05] max-w-4xl mx-auto">
                {about.title}
              </h2>
            </div>

            {/* Editorial Content Area */}
            <div className="flex flex-col items-center w-full">
              
              {/* Hook Paragraph (Large, Centered) */}
              {about.descriptions[0] && (
                <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-800 dark:text-zinc-100 font-medium leading-snug tracking-tight text-center max-w-5xl mb-16 md:mb-24">
                  {about.descriptions[0]}
                </p>
              )}

              {/* Editorial 2-Column Layout for remaining text (Psychologically appealing, reduces reading fatigue) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-5xl mx-auto text-left">
                
                {/* Column 1 */}
                <div className="space-y-8">
                  {about.descriptions[1] && <p>{about.descriptions[1]}</p>}
                </div>
                
                {/* Column 2 */}
                <div className="space-y-8">
                  {about.descriptions[2] && <p>{about.descriptions[2]}</p>}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
