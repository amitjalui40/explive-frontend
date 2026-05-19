import React from 'react';
import Link from 'next/link';
import { homepageData } from '@/config/siteData';

export const AboutUs = () => {
  const { aboutSummary: about } = homepageData;

  return (
    <section className="relative w-full py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 xl:px-24">

        {/* Small label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-10 md:mb-14">
          {about.kicker}
        </p>

        {/* Main split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

          {/* Left — massive headline */}
          <div className="lg:w-[55%]">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.93] uppercase">
              {about.title.split('live').map((part, i, arr) =>
                i < arr.length - 1
                  ? <React.Fragment key={i}>{part}<span className="text-amber-500 dark:text-amber-400">live</span></React.Fragment>
                  : <React.Fragment key={i}>{part}</React.Fragment>
              )}
            </h2>
          </div>

          {/* Right — body copy + link */}
          <div className="lg:w-[45%] flex flex-col justify-between gap-8 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
            <div className="flex flex-col gap-6">
              {about.descriptions[1] && <p>{about.descriptions[1]}</p>}
              {about.descriptions[2] && <p>{about.descriptions[2]}</p>}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors group w-fit"
            >
              Our Full Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
