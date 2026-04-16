"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling on the main page when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="w-full px-6 md:px-12 py-8 flex items-center justify-between max-w-[120rem] mx-auto pointer-events-auto mix-blend-difference text-white">
          
          {/* Left - Logo */}
          <Link href="/" onClick={closeSidebar} className="text-2xl md:text-3xl font-black tracking-tighter uppercase transition-transform hover:scale-105 active:scale-95">
            Explive
          </Link>
          
          {/* Center - Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
            <Link href="/shows" className="hover:opacity-50 transition-opacity">Shows</Link>
            <Link href="/venues" className="hover:opacity-50 transition-opacity">Venues</Link>
            <Link href="/artists" className="hover:opacity-50 transition-opacity">Artists</Link>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden md:block text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              Sign In
            </button>
            
            {/* Hamburger Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2 -mr-2 hover:opacity-50 transition-opacity cursor-pointer">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Smart Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Abstract Backdrop Frost Effect */}
        <div 
          className="absolute inset-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl"
          onClick={closeSidebar}
        />

        {/* Sidebar Content Sliding Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full sm:w-[500px] flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
            <Link href="/shows" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300">
              Shows
            </Link>
            <Link href="/venues" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300">
              Venues
            </Link>
            <Link href="/artists" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300">
              Artists
            </Link>
            <Link href="/about" onClick={closeSidebar} className="text-6xl md:text-7xl font-black tracking-tighter uppercase hover:translate-x-6 transition-transform duration-300 text-zinc-400 dark:text-zinc-600">
              About
            </Link>
          </nav>

          {/* Footer Actions */}
          <div className="flex flex-col gap-6 mt-16 px-4 text-zinc-900 dark:text-white">
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
            <button onClick={closeSidebar} className="text-left text-2xl font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
