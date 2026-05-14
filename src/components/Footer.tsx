import React from 'react';
import { homepageData } from '@/config/homepageData';
import Link from 'next/link';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 7.1C2.5 7.1 2 9.5 2 12s.5 4.9.5 4.9c.3 1.1 1.2 2 2.3 2.3C7.1 19.5 12 19.5 12 19.5s4.9 0 7.2-.3c1.1-.3 2-1.2 2.3-2.3.5-1.7.5-4.9.5-4.9s-.5-4.9-.5-4.9c-.3-1.1-1.2-2-2.3-2.3C16.9 4.5 12 4.5 12 4.5s-4.9 0-7.2.3c-1.1.3-2 1.2-2.3 2.3z" /><path d="M9.7 15.5l6.5-3.5-6.5-3.5v7z" /></svg>;
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;

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
    <footer className="relative w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden pt-16 md:pt-20 border-t border-zinc-200 dark:border-white/5">

      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 xl:px-24">

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

          {/* Spacer — grows to push columns right when fewer link groups exist */}
          <div className={`hidden lg:block ${
            footer.links.length === 0 ? 'lg:col-span-8' :
            footer.links.length === 1 ? 'lg:col-span-6' :
            'lg:col-span-4'
          }`} />

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

      {/* Edge-to-Edge Brand Watermark (Bottom Edge) */}
      <div className="w-full select-none pointer-events-none overflow-hidden pb-2">
        <div className="flex flex-nowrap justify-between items-baseline -mx-[0.06em] text-[20vw] md:text-[20vw] leading-[0.9] font-black bg-clip-text text-transparent bg-linear-to-b from-zinc-200 to-zinc-100 dark:from-white/10 dark:to-white/0 translate-y-[0.20em] md:translate-y-[0.13em]">
          {footer.brandText.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>

    </footer>
  );
};
