"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import {
    ChevronLeft, ChevronRight, Calendar, MapPin,
    Zap, Heart, Bell, Star, ShieldCheck, Headphones, Ticket, Globe
} from 'lucide-react';
import { features } from '@/config/features';
import { homepageData } from '@/config/homepageData';

const FEATURES = [
    { icon: Star,        iconColor: '#B6FF3B', bgColor: 'rgba(182, 255, 59, 0.10)',   title: 'Curated Events',   desc: 'Handpicked experiences\njust for you.' },
    { icon: ShieldCheck, iconColor: '#FF9A00', bgColor: 'rgba(255, 154, 0, 0.10)',    title: 'Secure Booking',   desc: '100% safe & hassle\nfree payments.' },
    { icon: Headphones,  iconColor: '#FF3C7D', bgColor: 'rgba(255, 60, 125, 0.10)',   title: '24/7 Support',     desc: "We're here to help\nanytime." },
    { icon: Ticket,      iconColor: '#4DA3FF', bgColor: 'rgba(77, 163, 255, 0.10)',   title: 'Exclusive Access', desc: 'Early bird & member\nonly deals.' },
    { icon: Globe,       iconColor: '#B6FF3B', bgColor: 'rgba(182, 255, 59, 0.10)',   title: 'Multiple Cities',  desc: 'Experience events\nacross India.' },
];

const solidColor = (glowColor: string) => glowColor.replace(/[\d.]+\)$/, '1)');

export const UpcomingShowsVerticalCard = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = homepageData.upcomingShowsGrid.items;
    const totalCards = items.length + 1;

    const scrollToIndex = useCallback((index: number) => {
        const container = carouselRef.current;
        if (!container) return;
        const card = container.children[index] as HTMLElement;
        if (!card) return;
        const containerWidth = container.clientWidth;
        const cardWidth = card.offsetWidth;
        container.scrollTo({
            left: card.offsetLeft - (containerWidth - cardWidth) / 2,
            behavior: 'smooth',
        });
        setActiveIndex(index);
    }, []);

    const handlePrev = useCallback(() => {
        scrollToIndex(Math.max(0, activeIndex - 1));
    }, [activeIndex, scrollToIndex]);

    const handleNext = useCallback(() => {
        scrollToIndex((activeIndex + 1) % totalCards);
    }, [activeIndex, totalCards, scrollToIndex]);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, [isHovered, handleNext]);

    useEffect(() => {
        const timer = setTimeout(() => scrollToIndex(0), 80);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!features.showLegacyUpcomingCarousel) return null;

    return (
        <section className="w-full bg-zinc-50 dark:bg-[#111111] overflow-hidden">

            {/* ── MAIN BODY ── */}
            <div className="flex flex-col lg:flex-row">

                {/* LEFT — heading + info */}
                <div className="lg:w-[34%] shrink-0 flex flex-col gap-7 px-6 md:px-10 xl:px-14 pt-14 pb-8 lg:py-16">

                    {/* Kicker */}
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-lime-400">Live Events</p>
                    </div>

                    {/* Heading */}
                    <div className="-mt-1">
                        <h2 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none text-zinc-900 dark:text-white">
                            Upcoming
                        </h2>
                        <h2
                            className="text-6xl md:text-7xl xl:text-8xl font-bold leading-none text-lime-400"
                            style={{ fontFamily: 'var(--font-dancing-script, cursive)', fontStyle: 'italic' }}
                        >
                            Shows
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-xs">
                        Discover unforgettable live experiences. Don&apos;t miss what&apos;s coming next.
                    </p>

                    {/* Stats box */}
                    <div className="flex border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                        <div className="flex items-center gap-3 flex-1 px-5 py-4">
                            <MapPin className="w-5 h-5 text-lime-400 shrink-0" />
                            <div>
                                <p className="text-zinc-900 dark:text-white font-bold text-sm leading-none">Dombivli</p>
                                <p className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase mt-1">Location</p>
                            </div>
                        </div>
                        <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
                        <div className="flex items-center gap-3 flex-1 px-5 py-4">
                            <Zap className="w-5 h-5 text-lime-400 shrink-0" />
                            <div>
                                <p className="text-zinc-900 dark:text-white font-bold text-sm leading-none">Live</p>
                                <p className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase mt-1">Experiences</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT — carousel */}
                <div
                    className="flex-1 min-w-0 relative py-10 lg:py-14"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {/* Left arrow */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
                            bg-zinc-200/90 dark:bg-zinc-800/90 border border-zinc-300 dark:border-zinc-700
                            text-zinc-600 dark:text-white
                            flex items-center justify-center
                            hover:border-lime-400 hover:text-lime-400 transition-all duration-200"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full
                            bg-zinc-200/90 dark:bg-zinc-800/90 border border-zinc-300 dark:border-zinc-700
                            text-zinc-600 dark:text-white
                            flex items-center justify-center
                            hover:border-lime-400 hover:text-lime-400 transition-all duration-200"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Cards track */}
                    <div
                        ref={carouselRef}
                        className="flex gap-4 overflow-x-auto pl-12 pr-12 pb-2 snap-x snap-mandatory scroll-smooth"
                    >
                        {/* Real event cards */}
                        {items.map((item) => {
                            const accent = solidColor(item.glowColor);
                            return (
                                <div
                                    key={item.id}
                                    className="w-[78vw] min-w-60 md:w-72 lg:w-80 shrink-0 snap-center"
                                >
                                    <div
                                        className="rounded-[1.25rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                                        style={{ border: `2px solid ${accent}` }}
                                    >
                                        {/* Image area */}
                                        <div className="relative h-64 md:h-72 lg:h-80">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover object-top"
                                            />
                                            {/* Status badge */}
                                            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm rounded-full px-3 py-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                                                <span className="text-white text-[9px] font-bold tracking-[0.22em] uppercase">{item.badge}</span>
                                            </div>
                                            {/* Heart */}
                                            <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors">
                                                <Heart className="w-3.5 h-3.5 text-white" />
                                            </button>
                                        </div>

                                        {/* Edition separator */}
                                        <div className="bg-zinc-800 dark:bg-zinc-900 flex items-center gap-3 px-4 py-3">
                                            <div className="flex-1 h-px bg-white/15" />
                                            <span className="text-zinc-300 dark:text-zinc-400 text-[9px] font-bold tracking-[0.35em] uppercase whitespace-nowrap">
                                                {item.location}
                                            </span>
                                            <div className="flex-1 h-px bg-white/15" />
                                        </div>

                                        {/* Info panel */}
                                        <div className="bg-zinc-800 dark:bg-zinc-900 px-4 pb-5 pt-3 space-y-3">

                                            {/* Date */}
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
                                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: accent }}>
                                                    {item.date}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-white text-xl font-bold leading-snug">
                                                {item.title}
                                            </h3>

                                            {/* Venue */}
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                                <span className="text-zinc-400 text-sm">{item.venue}</span>
                                            </div>

                                            {/* CTA */}
                                            <button
                                                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transition-opacity hover:opacity-90"
                                                style={{ backgroundColor: accent }}
                                            >
                                                {item.buttonText}
                                                <Ticket className="w-4 h-4" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Ghost card — Coming Soon */}
                        <div className="w-[78vw] min-w-60 md:w-72 lg:w-80 shrink-0 snap-center self-stretch">
                            <div className="rounded-[1.25rem] overflow-hidden border border-zinc-700 bg-zinc-900 h-full min-h-104 flex flex-col items-center justify-center gap-5 px-8 text-center">
                                <div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center">
                                    <Bell className="w-6 h-6 text-lime-400" />
                                </div>
                                <div className="space-y-2.5">
                                    <p className="text-zinc-500 text-[10px] font-bold tracking-[0.35em] uppercase">More Shows</p>
                                    <p className="text-white text-2xl font-black leading-tight">Coming Soon</p>
                                    <p className="text-zinc-500 text-sm leading-relaxed pt-1">
                                        Stay tuned for new events<br />and big announcements.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Pagination dots */}
                    <div className="flex items-center justify-center gap-2 mt-5">
                        {Array.from({ length: totalCards }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={`rounded-full transition-all duration-300 ${i === activeIndex
                                        ? 'w-6 h-2 bg-lime-400'
                                        : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-lime-400/50'
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* ── FEATURES BAR ── */}
            <div className="w-full px-6 md:px-10 xl:px-14 pb-10 mt-6 lg:mt-0">
                <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div 
                        className="w-max lg:w-full min-w-[1100px] max-w-[1320px] h-[88px] mx-auto px-8 flex items-center justify-between rounded-[20px] backdrop-blur-md"
                        style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                    >
                        {FEATURES.map(({ icon: Icon, iconColor, bgColor, title, desc }, index) => (
                            <div 
                                key={title} 
                                className="flex items-center gap-4 flex-1 h-full"
                                style={{
                                    paddingRight: index !== FEATURES.length - 1 ? '24px' : '0',
                                    paddingLeft: index !== 0 ? '24px' : '0',
                                    borderRight: index !== FEATURES.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                                }}
                            >
                                {/* Icon Circle */}
                                <div 
                                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <Icon className="w-5 h-5" style={{ color: iconColor }} strokeWidth={1.5} />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col justify-center">
                                    <h4 
                                        className="text-white text-[16px] font-semibold leading-[1.4] whitespace-nowrap"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {title}
                                    </h4>
                                    <p 
                                        className="text-[#A1A1AA] text-[13px] font-normal leading-[1.6] whitespace-nowrap"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}
                                    >
                                        {desc.split('\n').map((line, i, arr) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i !== arr.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};
