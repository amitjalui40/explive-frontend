import React from 'react';
import { homepageData } from '@/config/homepageData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 7.1C2.5 7.1 2 9.5 2 12s.5 4.9.5 4.9c.3 1.1 1.2 2 2.3 2.3C7.1 19.5 12 19.5 12 19.5s4.9 0 7.2-.3c1.1-.3 2-1.2 2.3-2.3.5-1.7.5-4.9.5-4.9s-.5-4.9-.5-4.9c-.3-1.1-1.2-2-2.3-2.3C16.9 4.5 12 4.5 12 4.5s-4.9 0-7.2.3c-1.1.3-2 1.2-2.3 2.3z"/><path d="M9.7 15.5l6.5-3.5-6.5-3.5v7z"/></svg>;
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

const IconMap: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  YouTube: YoutubeIcon,
  LinkedIn: LinkedinIcon,
};

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
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {footer.socials.map((social) => {
                const Icon = IconMap[social.name];
                return (
                  <Link 
                    key={social.name} 
                    href={social.url}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] group"
                    aria-label={social.name}
                  >
                    {Icon ? <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" /> : social.name}
                  </Link>
                );
              })}
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
