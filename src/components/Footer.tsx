import React from 'react';
import { homepageData } from '@/config/homepageData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const { footer } = homepageData;

  return (
    <footer className="relative w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden pt-24 md:pt-32 border-t border-zinc-200 dark:border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 dark:bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24">
        
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 md:mb-32 relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[1.1] mb-8">
            {footer.ctaHeading} <br />
            <span className="text-emerald-500 dark:text-emerald-400">{footer.ctaHighlight}</span>
          </h2>
          <button className="group relative inline-flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 px-8 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              {footer.ctaButton}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Hover Glare Effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 md:pb-24 border-b border-zinc-200 dark:border-white/10 relative z-10">
          
          {/* Brand & Description (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
              exp<span className="text-emerald-500">.</span>live
            </h3>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed max-w-sm">
              {footer.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {footer.socials.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.url}
                  className="text-xs font-bold tracking-wider uppercase text-zinc-500 hover:text-emerald-500 transition-colors"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Links Columns (Right) */}
          {footer.links.map((column) => (
            <div key={column.title} className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {column.items.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.url}
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-500 relative z-10">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* Massive Brand Watermark (Bottom Edge) */}
      {/* Uses text-clip and massive viewport units to span perfectly across the bottom */}
      <div className="w-full overflow-hidden select-none pointer-events-none flex justify-center -mb-8 md:-mb-16 lg:-mb-24">
        <span className="text-[22vw] leading-none font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-white/10 dark:to-white/0">
          {footer.brandText}
        </span>
      </div>

    </footer>
  );
};
