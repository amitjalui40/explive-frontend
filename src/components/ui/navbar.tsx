"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import expliveLogo from '@/assets/logo/Exp Live logo - white.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for Apple glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling on the main page when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const forceWhite = isHomePage && !isScrolled;

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-2xl shadow-sm border-black/5 dark:border-white/5'
        : 'bg-transparent border-transparent'
        }`}>
        <style>{`
          @keyframes eq1 { 0%,100%{height:3px} 50%{height:18px} }
          @keyframes eq2 { 0%,100%{height:12px} 40%{height:4px} }
          @keyframes eq3 { 0%,100%{height:5px} 60%{height:20px} }
          @keyframes eq4 { 0%,100%{height:16px} 50%{height:4px} }
          @keyframes eq5 { 0%,100%{height:7px} 45%{height:14px} }
        `}</style>

        <div className={`w-full px-6 md:px-12 flex items-center max-w-480 mx-auto pointer-events-auto transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'} ${forceWhite ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>

          {/* Left - Logo */}
          <div className="flex-1">
            <Link href="/" onClick={closeSidebar} className="inline-flex items-center hover:opacity-80 transition-opacity">
              <img
                src={expliveLogo.src}
                alt="Explive"
                className={`h-8 md:h-10 object-contain scale-[1.8] md:scale-[2.1] origin-left transition-all duration-500 ${forceWhite ? '' : 'invert dark:invert-0'}`}
              />
            </Link>
          </div>

          {/* Center - Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
            <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
            <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
          </div>

          {/* Right - Equalizer + Mobile Hamburger */}
          <div className="flex-1 flex items-center justify-end gap-6">

            {/* Equalizer bars */}
            <div className="hidden md:flex items-end gap-0.75 h-5">
              {[
                { anim: 'eq1 1.2s ease-in-out infinite' },
                { anim: 'eq2 0.9s ease-in-out infinite 0.15s' },
                { anim: 'eq3 1.4s ease-in-out infinite 0.3s' },
                { anim: 'eq4 1.0s ease-in-out infinite 0.1s' },
                { anim: 'eq5 1.3s ease-in-out infinite 0.2s' },
              ].map((bar, i) => (
                <span
                  key={i}
                  className="w-0.75 rounded-full bg-emerald-400"
                  style={{ animation: bar.anim }}
                />
              ))}
            </div>

            {/* Hamburger Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2 -mr-2 hover:opacity-50 transition-opacity cursor-pointer">
              <Menu className="w-8 h-8" />
            </button>
          </div>

        </div>
      </nav>

      {/* Full Screen Smart Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Abstract Backdrop Frost Effect */}
        <div
          className="absolute inset-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl"
          onClick={closeSidebar}
        />

        {/* Sidebar Content Sliding Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-125 flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full mb-16 px-4">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-400">Navigation</span>
            <button onClick={closeSidebar} className="p-2 -mr-2 text-zinc-900 dark:text-white hover:opacity-50 transition-opacity cursor-pointer">
              <X className="w-10 h-10" />
            </button>
          </div>

          {/* Brutalist Giant Navigation Links */}
          <nav className="flex flex-col gap-6 text-zinc-900 dark:text-white mt-auto mb-auto px-4">
            <Link href="/" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300">
              Home
            </Link>
            <Link href="/about" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300">
              About
            </Link>
            <Link href="/contact" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300">
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </>
  );
}
