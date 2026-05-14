"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { features } from '@/config/features';
import { homepageData } from '@/config/homepageData';

export const UpcomingShowsVerticalCard = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -420, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                carouselRef.current.scrollBy({ left: 420, behavior: "smooth" });
            }
        }
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(scrollRight, 4000);
        return () => clearInterval(interval);
    }, [isHovered]);

    if (!features.showLegacyUpcomingCarousel) return null;

    const items = homepageData.upcomingShowsGrid.items;

    return (
        <section className="w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">

            {/* Background — light: warm dot-grid + soft orbs | dark: subtle emerald + violet glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-40 dark:opacity-10 transition-opacity duration-500"
                    style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)', backgroundSize: '38px 38px' }}
                />


            </div>

            <div className="flex flex-col lg:flex-row relative z-10">

                {/* Left — heading column */}
                <div className="lg:w-[28%] shrink-0 flex flex-col justify-between px-6 md:px-12 xl:px-16 pt-16 pb-10 lg:py-20 lg:border-r lg:border-zinc-200 dark:lg:border-white/6">

                    <div className="flex flex-col gap-5">

                        {/* Kicker with decorative line */}
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-emerald-500/70 dark:bg-emerald-400/60" />
                            <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-emerald-500 dark:text-emerald-400">Live Events</p>
                        </div>

                        {/* Heading */}
                        <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white leading-none">
                            Upcoming<br />Shows
                        </h2>

                        {/* Ghost event count */}
                        <div className="flex items-baseline gap-2 pt-1">
                            <span className="text-[3.5rem] font-black text-zinc-200 dark:text-white/6 tracking-tighter leading-none select-none">
                                {String(items.length).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400 dark:text-white/20">
                                Events
                            </span>
                        </div>

                    </div>

                    {/* Bottom: Next event highlight instead of "View All" */}
                    <div className="mt-10 lg:mt-0 flex flex-col gap-1.5 pl-3 border-l-2 border-emerald-500/40 dark:border-emerald-400/30">
                        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/25">Next Event</p>
                        <p className="text-sm font-bold text-zinc-700 dark:text-white/60 leading-snug">{items[0]?.title}</p>
                        <p className="text-xs text-zinc-400 dark:text-white/30">{items[0]?.date}</p>
                    </div>

                </div>

                {/* Right — carousel */}
                <div
                    className="flex-1 min-w-0 relative group/carousel py-16 lg:py-20"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {/* Left arrow — sits at the left edge of the carousel area */}
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll Left"
                        className="hidden md:flex absolute left-3 top-[42%] -translate-y-1/2 z-10 h-10 w-10 rounded-full items-center justify-center
                            bg-white/90 dark:bg-white/6 backdrop-blur-md shadow-sm
                            border border-zinc-200 dark:border-white/10
                            text-zinc-500 dark:text-white/60
                            hover:bg-emerald-50 dark:hover:bg-emerald-500/15
                            hover:border-emerald-400 dark:hover:border-emerald-500/30
                            hover:text-emerald-600 dark:hover:text-emerald-400
                            transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={scrollRight}
                        aria-label="Scroll Right"
                        className="hidden md:flex absolute right-3 top-[42%] -translate-y-1/2 z-10 h-10 w-10 rounded-full items-center justify-center
                            bg-white/90 dark:bg-white/6 backdrop-blur-md shadow-sm
                            border border-zinc-200 dark:border-white/10
                            text-zinc-500 dark:text-white/60
                            hover:bg-emerald-50 dark:hover:bg-emerald-500/15
                            hover:border-emerald-400 dark:hover:border-emerald-500/30
                            hover:text-emerald-600 dark:hover:text-emerald-400
                            transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Cards track — left padding clears the arrow button */}
                    <div
                        ref={carouselRef}
                        className="flex gap-4 md:gap-5 overflow-x-auto px-16 md:px-18 snap-x snap-mandatory scroll-smooth"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="w-[75vw] min-w-65 md:w-85 lg:w-96 shrink-0 snap-center group/card cursor-pointer"
                            >
                                <div className="relative aspect-3/4.5 rounded-2xl overflow-hidden ring-1 ring-black/8 dark:ring-white/8 transition-all duration-500 group-hover/card:ring-black/15 dark:group-hover/card:ring-white/18">

                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
                                    />

                                    {/* Bottom gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/92 via-black/20 to-transparent" />

                                    {/* Top vignette — helps badge pop */}
                                    <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-black/50 to-transparent" />

                                    {/* Event color glow on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
                                        style={{ background: `radial-gradient(ellipse at bottom, ${item.glowColor} 0%, transparent 65%)` }}
                                    />

                                    {/* Colored bottom edge on hover */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover/card:opacity-70 transition-opacity duration-500"
                                        style={{ background: `linear-gradient(90deg, transparent 0%, ${item.glowColor.replace(/[\d.]+\)$/, '0.9)')} 50%, transparent 100%)` }}
                                    />

                                    {/* Top badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 bg-black/35 backdrop-blur-md border border-white/15 text-white text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {item.buttonText}
                                        </span>
                                    </div>

                                    {/* Bottom glass info panel */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="bg-white/5 backdrop-blur-2xl border border-white/9 rounded-xl p-4 space-y-2.5">

                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3 text-emerald-400/70 shrink-0" />
                                                <p className="text-emerald-400/70 text-[9px] font-bold tracking-[0.25em] uppercase">{item.date}</p>
                                            </div>

                                            <h3 className="text-white text-xl font-bold tracking-tight leading-snug">{item.title}</h3>

                                            <div className="w-7 h-px bg-white/15" />

                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3 h-3 text-white/25 shrink-0" />
                                                <p className="text-white/35 text-xs font-medium">{item.location}</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                        {/* Ghost card 1 — Coming Soon */}
                        <div className="w-[75vw] min-w-65 md:w-85 lg:w-96 shrink-0 snap-center">
                            <div className="relative aspect-3/4.5 rounded-2xl overflow-hidden
                                border border-dashed border-zinc-300 dark:border-white/10
                                bg-zinc-100/60 dark:bg-white/1.5
                                flex flex-col items-center justify-center gap-6 px-8 text-center">

                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.05)_0%,transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_65%)]" />

                                <div className="relative flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border border-zinc-300 dark:border-white/12 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50 dark:bg-emerald-400/50 animate-pulse" />
                                    </div>
                                    <div className="absolute w-16 h-16 rounded-full border border-zinc-200 dark:border-white/6 animate-ping" style={{ animationDuration: '2.5s' }} />
                                    <div className="absolute w-28 h-28 rounded-full border border-zinc-100 dark:border-white/3 animate-ping" style={{ animationDuration: '3.5s' }} />
                                </div>

                                <div className="space-y-2">
                                    <p className="text-zinc-400 dark:text-white/15 text-[9px] font-bold tracking-[0.4em] uppercase">Coming Soon</p>
                                    <p className="text-zinc-600 dark:text-white/55 text-lg font-bold tracking-tight leading-snug">More shows<br />on the way</p>
                                    <p className="text-zinc-400 dark:text-white/20 text-[11px] font-medium leading-relaxed pt-1">
                                        Stay tuned for<br />new announcements
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Ghost card 2 — Notify Me */}
                        <div className="w-[75vw] min-w-65 md:w-85 lg:w-96 shrink-0 snap-center">
                            <div className="relative aspect-3/4.5 rounded-2xl overflow-hidden
                                border border-dashed border-zinc-200 dark:border-white/6
                                bg-zinc-50/80 dark:bg-white/[0.008]
                                flex flex-col items-center justify-center gap-6 px-8 text-center">

                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04)_0%,transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_65%)]" />

                                {/* Bell icon */}
                                <div className="relative flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border border-zinc-200 dark:border-white/8 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-zinc-400 dark:text-white/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                        </svg>
                                    </div>
                                    <div className="absolute w-28 h-28 rounded-full border border-zinc-100 dark:border-white/3 animate-ping" style={{ animationDuration: '4s' }} />
                                </div>

                                <div className="space-y-2">
                                    <p className="text-zinc-300 dark:text-white/10 text-[9px] font-bold tracking-[0.4em] uppercase">Don&apos;t Miss Out</p>
                                    <p className="text-zinc-500 dark:text-white/40 text-lg font-bold tracking-tight leading-snug">New events<br />dropping soon</p>
                                    <p className="text-zinc-300 dark:text-white/15 text-[11px] font-medium leading-relaxed pt-1">
                                        Follow us to get<br />first access
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
