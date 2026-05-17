"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import {
    ChevronLeft, ChevronRight, Calendar, MapPin,
    Zap, Heart, Bell, Star, ShieldCheck, Headphones, Ticket, Globe
} from 'lucide-react';
import { features } from '@/config/features';
import { homepageData } from '@/config/homepageData';

const ICON_MAP: Record<string, React.ElementType> = {
    MapPin, Zap, Star, ShieldCheck, Headphones, Ticket, Globe, Bell,
};

const solidColor = (glowColor: string) => glowColor.replace(/[\d.]+\)$/, '1)');

export const UpcomingShowsVerticalCard = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const tickerRef = useRef<HTMLDivElement>(null);
    const tickerAnimRef = useRef<number>(0);
    const tickerPausedRef = useRef(false);
    const tickerTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const lastTimestampRef = useRef<number>(0);
    const exactScrollLeftRef = useRef<number>(0);
    const userPauseTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const [userPaused, setUserPaused] = useState(false);
    const isProgrammaticScrollRef = useRef(false);
    const programmaticScrollTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const animateTicker = useCallback((timestamp: number) => {
        const el = tickerRef.current;
        if (el && !tickerPausedRef.current) {
            const delta = lastTimestampRef.current ? timestamp - lastTimestampRef.current : 0;
            const safeDelta = Math.min(delta, 50); // cap delta to avoid jump on tab switch

            exactScrollLeftRef.current += (35 * safeDelta) / 1000; // 35px/s

            const firstHalf = el.firstElementChild as HTMLElement;
            if (firstHalf) {
                const loopWidth = firstHalf.scrollWidth;
                if (exactScrollLeftRef.current >= loopWidth) {
                    exactScrollLeftRef.current -= loopWidth;
                }
            } else {
                if (exactScrollLeftRef.current >= el.scrollWidth / 2) {
                    exactScrollLeftRef.current -= el.scrollWidth / 2;
                }
            }

            el.scrollLeft = exactScrollLeftRef.current;
        } else if (el && tickerPausedRef.current) {
            exactScrollLeftRef.current = el.scrollLeft;
        }
        lastTimestampRef.current = timestamp;
        tickerAnimRef.current = requestAnimationFrame(animateTicker);
    }, []);

    useEffect(() => {
        tickerAnimRef.current = requestAnimationFrame(animateTicker);
        return () => cancelAnimationFrame(tickerAnimRef.current);
    }, [animateTicker]);

    const handleTickerInteraction = () => {
        tickerPausedRef.current = true;
        clearTimeout(tickerTimerRef.current);
        tickerTimerRef.current = setTimeout(() => {
            tickerPausedRef.current = false;
        }, 3000);
    };

    const { items, heading, stats, featureBar } = homepageData.upcomingShowsGrid;
    const totalCards = items.length + 1;

    const handleScroll = useCallback(() => {
        if (isProgrammaticScrollRef.current) return;
        const container = carouselRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const containerCenter = scrollLeft + container.clientWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        const children = container.children;
        for (let i = 0; i < children.length; i++) {
            const childElement = children[i] as HTMLElement;
            const childCenter = childElement.offsetLeft + childElement.offsetWidth / 2;
            const distance = Math.abs(childCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }

        setActiveIndex(prev => prev !== closestIndex ? closestIndex : prev);
    }, []);

    const scrollToIndex = useCallback((index: number) => {
        const container = carouselRef.current;
        if (!container) return;
        const card = container.children[index] as HTMLElement;
        if (!card) return;
        const containerWidth = container.clientWidth;
        const cardWidth = card.offsetWidth;

        isProgrammaticScrollRef.current = true;
        clearTimeout(programmaticScrollTimerRef.current);
        programmaticScrollTimerRef.current = setTimeout(() => {
            isProgrammaticScrollRef.current = false;
        }, 500);

        container.scrollTo({
            left: card.offsetLeft - (containerWidth - cardWidth) / 2,
            behavior: 'smooth',
        });
        setActiveIndex(index);
    }, []);

    const handleCardInteraction = useCallback((index: number) => {
        scrollToIndex(index);
        setUserPaused(true);
        clearTimeout(userPauseTimerRef.current);
        userPauseTimerRef.current = setTimeout(() => setUserPaused(false), 5000);
    }, [scrollToIndex]);

    useEffect(() => () => clearTimeout(userPauseTimerRef.current), []);

    const handlePrev = useCallback(() => {
        scrollToIndex(Math.max(0, activeIndex - 1));
    }, [activeIndex, scrollToIndex]);

    const handleNext = useCallback(() => {
        scrollToIndex((activeIndex + 1) % totalCards);
    }, [activeIndex, totalCards, scrollToIndex]);

    useEffect(() => {
        if (isHovered || userPaused) return;
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, [isHovered, userPaused, handleNext]);

    useEffect(() => {
        const timer = setTimeout(() => scrollToIndex(0), 80);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!features.showLegacyUpcomingCarousel) return null;

    return (
        <section className="relative w-full bg-[#111111] overflow-hidden z-0 lg:h-[calc(100vh-72px)] lg:flex lg:flex-col">

            {/* Dynamic blurred background images */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                {/* 1. The actual images */}
                {items.map((item, i) => (
                    <Image
                        key={`bg-${item.id}`}
                        src={item.image}
                        alt="Background Blur"
                        fill
                        loading="eager"
                        className={`object-cover blur-2xl md:blur-[40px] scale-110 ${i === activeIndex ? 'opacity-100 transition-opacity duration-1000 ease-out' : 'opacity-0'}`}
                    />
                ))}

                {/* Fallback for Coming Soon card */}
                <div
                    className={`absolute inset-0 ${activeIndex === items.length ? 'opacity-70 transition-opacity duration-1000 ease-out' : 'opacity-0'}`}
                    style={{ backgroundColor: '#a3e635' }}
                />

                {/* 2. Contrast overlay so the text remains readable */}
                <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-[#111111]/95 via-[#111111]/70 to-[#111111]/10" />

                {/* Mobile bottom gradient to ensure features bar text is readable against bright backgrounds */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#111111] via-[#111111]/80 to-transparent lg:hidden" />

                {/* 3. Very subtle theme tint */}
                <div
                    className="absolute inset-0 opacity-20 mix-blend-color transition-colors duration-1000 ease-out"
                    style={{ backgroundColor: activeIndex < items.length ? solidColor(items[activeIndex].glowColor) : '#a3e635' }}
                />
            </div>

            {/* ── MAIN BODY ── */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:flex-1 lg:min-h-0">

                {/* LEFT — heading + info */}
                <div className="lg:w-[34%] shrink-0 flex flex-col gap-7 px-6 md:px-10 xl:px-14 pt-14 pb-8 lg:py-16 lg:justify-center">

                    {/* Kicker */}
                    <div className="flex items-center gap-2">
                        <style>{`
                            @keyframes rgbBlink {
                                0%, 100% { background-color: #ef4444; box-shadow: 0 0 8px #ef4444; }
                                33% { background-color: #22c55e; box-shadow: 0 0 8px #22c55e; }
                                66% { background-color: #eab308; box-shadow: 0 0 8px #eab308; }
                            }
                        `}</style>
                        <span className="w-2.5 h-2.5 rounded-full" style={{ animation: 'rgbBlink 1.5s infinite' }} />
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-lime-400">{heading.kicker}</p>
                    </div>

                    {/* Heading */}
                    <div className="-mt-1">
                        <h2 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none text-white">
                            {heading.line1}
                        </h2>
                        <h2
                            className="text-6xl md:text-7xl xl:text-8xl font-bold leading-none text-lime-400"
                            style={{ fontFamily: 'var(--font-dancing-script, cursive)', fontStyle: 'italic' }}
                        >
                            {heading.line2}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-base leading-relaxed max-w-xs">
                        {heading.description}
                    </p>

                    {/* Stats box */}
                    <div className="flex border border-zinc-800 rounded-2xl overflow-hidden">
                        {stats.map((stat, i) => {
                            const StatIcon = ICON_MAP[stat.icon];
                            return (
                                <React.Fragment key={stat.label}>
                                    {i !== 0 && <div className="w-px bg-zinc-800" />}
                                    <div className="flex items-center gap-3 flex-1 px-5 py-4">
                                        {StatIcon && <StatIcon className="w-5 h-5 text-lime-400 shrink-0" />}
                                        <div className="min-w-0">
                                            <p className="text-white font-bold text-sm leading-none truncate">
                                                {stat.icon === 'MapPin'
                                                    ? activeIndex < items.length
                                                        ? items[activeIndex].venue
                                                        : 'India'
                                                    : stat.value}
                                            </p>
                                            <p className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase mt-1">{stat.label}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>

                </div>

                {/* RIGHT — carousel */}
                <div
                    className="flex-1 min-w-0 relative py-10 lg:py-0 lg:flex lg:flex-col lg:justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {/* Desktop Carousel Wrapper */}
                    <div className="relative w-full lg:flex lg:items-center lg:justify-center lg:gap-14">

                    {/* Left arrow */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 lg:static lg:translate-y-0 lg:shrink-0 w-9 h-9 rounded-full
                            bg-zinc-800/90 border border-zinc-700
                            text-white
                            flex items-center justify-center
                            hover:border-lime-400 hover:text-lime-400 transition-all duration-200"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Cards track */}
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="flex gap-4 lg:gap-3 overflow-x-auto pl-12 pr-12 lg:px-0 lg:flex-none lg:justify-center pb-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {/* Real event cards */}
                        {items.map((item, i) => {
                            const accent = solidColor(item.glowColor);
                            const isActive = i === activeIndex;
                            return (
                                <div
                                    key={item.id}
                                    className={`w-[78vw] min-w-60 md:w-72 lg:w-80 shrink-0 snap-center transition-all duration-500 ease-out backface-hidden ${isActive ? 'scale-100 opacity-100' : 'scale-[0.9] opacity-50'}`}
                                    onPointerEnter={(e) => { if (e.pointerType === 'mouse') handleCardInteraction(i); }}
                                    onClick={() => handleCardInteraction(i)}
                                >
                                    <div
                                        className="rounded-[1.25rem] overflow-hidden cursor-pointer transition-all duration-500 lg:hover:scale-[1.02]"
                                        style={{
                                            border: `2px solid ${isActive ? accent : 'transparent'}`,
                                            boxShadow: isActive ? `0 20px 40px -10px ${accent}60` : `0 0px 0px 0px ${accent}00`
                                        }}
                                    >
                                        {/* Image area */}
                                        <div className="relative h-[19rem] md:h-72 lg:h-80">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                loading="eager"
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
                        <div
                            className={`w-[78vw] min-w-60 md:w-72 lg:w-80 shrink-0 snap-center self-stretch transition-all duration-500 ease-out backface-hidden ${activeIndex === items.length ? 'scale-100 opacity-100' : 'scale-[0.9] opacity-50'}`}
                            onPointerEnter={(e) => { if (e.pointerType === 'mouse') handleCardInteraction(items.length); }}
                            onClick={() => handleCardInteraction(items.length)}
                        >
                            <div
                                className={`rounded-[1.25rem] overflow-hidden border bg-zinc-900 h-full min-h-104 flex flex-col items-center justify-center gap-5 px-8 text-center transition-all duration-500 ${activeIndex === items.length ? 'border-lime-400' : 'border-transparent'}`}
                                style={{
                                    boxShadow: activeIndex === items.length ? `inset 0 0 50px rgba(163, 230, 53, 0.1)` : 'none'
                                }}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-20 h-20 rounded-full border border-lime-400/40 animate-ping" style={{ animationDuration: '1.8s' }} />
                                    <div className="absolute w-28 h-28 rounded-full border border-lime-400/20 animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.15s' }} />
                                    <div className="absolute w-36 h-36 rounded-full border border-lime-400/10 animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.3s' }} />
                                    <div className="relative w-14 h-14 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                                        <Bell className="w-6 h-6 text-lime-400" />
                                    </div>
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

                    {/* Right arrow */}
                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 lg:static lg:translate-y-0 lg:shrink-0 w-9 h-9 rounded-full
                            bg-zinc-800/90 border border-zinc-700
                            text-white
                            flex items-center justify-center
                            hover:border-lime-400 hover:text-lime-400 transition-all duration-200"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    </div>{/* end desktop wrapper */}

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

            {/* Mobile: infinite ticker — rAF auto-scroll + native touch manual scroll */}
            <div className="relative z-10 lg:hidden py-6">
                <div
                    ref={tickerRef}
                    className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    onTouchStart={handleTickerInteraction}
                    onTouchEnd={handleTickerInteraction}
                >
                    <div className="flex shrink-0">
                        {featureBar.map(({ icon, iconColor, bgColor, title, desc }, index) => {
                            const Icon = ICON_MAP[icon];
                            return (
                                <div key={`set1-${index}`} className="flex items-center gap-3 px-8 shrink-0">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        {Icon && <Icon className="w-4 h-4" style={{ color: iconColor }} strokeWidth={1.5} />}
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</p>
                                        <p className="text-[#A1A1AA] text-xs whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>{desc.replace('\n', ' ')}</p>
                                    </div>
                                    {/* Dot separator */}
                                    <span className="ml-6 w-1 h-1 rounded-full shrink-0 bg-white/20" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex shrink-0">
                        {featureBar.map(({ icon, iconColor, bgColor, title, desc }, index) => {
                            const Icon = ICON_MAP[icon];
                            return (
                                <div key={`set2-${index}`} className="flex items-center gap-3 px-8 shrink-0">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        {Icon && <Icon className="w-4 h-4" style={{ color: iconColor }} strokeWidth={1.5} />}
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</p>
                                        <p className="text-[#A1A1AA] text-xs whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>{desc.replace('\n', ' ')}</p>
                                    </div>
                                    {/* Dot separator */}
                                    <span className="ml-6 w-1 h-1 rounded-full shrink-0 bg-white/20" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop: static glass bar */}
            <div className="relative z-10 hidden lg:block px-12 pb-8">
                <div
                    className="w-full h-28 px-8 flex items-center rounded-[20px] backdrop-blur-md bg-transparent border border-white/10 bg-linear-to-r from-white/2 via-white/[0.07] to-white/2"
                >
                    {featureBar.map(({ icon, iconColor, bgColor, title, desc }, index) => {
                        const Icon = ICON_MAP[icon];
                        return (
                            <React.Fragment key={title}>
                                {index !== 0 && (
                                    <div className="h-14 w-px shrink-0 bg-white/10" />
                                )}
                                <div className="flex items-center justify-center gap-4 flex-1 px-6">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        {Icon && <Icon className="w-5 h-5" style={{ color: iconColor }} strokeWidth={1.5} />}
                                    </div>
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
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};
