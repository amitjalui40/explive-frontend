# Explive - Project Architecture & Technical Plan

This document serves as the master blueprint for the Explive frontend project. It is designed to rapidly onboard new developers or future AI agents, providing context on the project's goals, tech stack, design patterns, and known gotchas.

## 1. Project Overview
**Explive** is a next-generation platform for managing and attending live events. Currently, the primary focus is building a highly optimized, "Awwwards-tier" ultra-premium frontend landing page for an event agency. The UI is designed to feel visceral, cinematic, and immersive—mirroring the experience of attending a high-end music festival or exclusive underground show.

## 2. Technology Stack
The frontend is built using the latest modern web technologies:
- **Framework:** Next.js (App Router, Turbopack)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/postcss`)
- **Icons:** `lucide-react`
- **Theming:** `next-themes` (Dark/Light mode support with System Default)
- **Typography:** Next.js optimized Google Fonts (`Geist Sans` & `Geist Mono`)

## 3. Architecture & File Structure
The project strictly follows a **Component-Driven, Server-First Architecture**:
- **`src/app/page.tsx`**: The master layout conductor. It is a 100% **Server Component** (great for SEO and performance) that imports modular UI sections.
- **`src/components/`**: Houses all modular layout sections (e.g., `Hero.tsx`, `EventCategories.tsx`, `UpcomingShows.tsx`, `AboutUs.tsx`). 
- **`src/config/homepageData.ts`**: The "Single Source of Truth" configuration file. All copy, text, image URLs, and metrics are stored here. This acts as a static headless CMS, keeping the UI components clean and making future database integration extremely simple.

## 4. Design System & Aesthetics
Future AI agents MUST adhere to these strict design rules:
1. **Cinematic Atmosphere:** Avoid flat colors. Utilize SVG Noise filters (film grain overlay), volumetric stage lighting rays (CSS blurred gradients), and morphing liquid aurora orbs. Use `mix-blend-multiply` for light mode and `mix-blend-screen` for dark mode.
2. **Glassmorphism:** Use frosted glass UI panels (`backdrop-blur-2xl bg-white/90 dark:bg-black/60 border border-white/10`) to float content above the immersive backgrounds.
3. **Typography:** Use massive, authoritative headings (`text-6xl+`) with tight tracking (`tracking-tighter`). Contrast this with uppercase, heavily tracked (`tracking-widest`) micro-copy kickers (`text-[10px]` to `text-xs`).
4. **Motion & Physics:** Avoid linear animations. Use custom cubic-bezier easing (`ease-[cubic-bezier(0.25,1,0.5,1)]`) for hover states, and slow `spin` / custom `roam` keyframes for ambient background graphics.

## 5. State Management & "Use Client" Boundaries
- **Server by Default:** Build all UI components as Server Components unless interactivity is strictly required. 
- **Client Components:** Only use `"use client"` when implementing React State (`useState`, `useRef`), hooks (`useEffect`), or DOM event listeners (`onClick`, drag-to-scroll, hover states). 
- **Example:** The `UpcomingShows.tsx` component is a Client Component because it requires `useRef` and `useEffect` for auto-scrolling the carousel, but `EventCategories.tsx` and `AboutUs.tsx` remain pure Server Components.

## 6. Known Gotchas & Workarounds
When developing, keep these established solutions in mind:
- **React 19 Hydration Warnings (`next-themes`):** `next-themes` injects an inline `<script>` tag into the DOM to prevent FOUC (Flash of Unstyled Content). React 19 strictly warns against scripts rendered inside Client components. **Do not remove this script.** A custom console interceptor in `src/components/providers/theme-provider.tsx` suppresses this specific development warning.
- **Event Handlers in Server Components:** You cannot pass `onError`, `onClick`, or functions directly to `<img>` tags or HTML elements inside Server Components. (e.g., do not use fallback `onError` image handlers in `page.tsx`).
- **Mobile Overflow & Clipping:** Due to the massive typography and padding, elements can easily clip the edge of mobile screens (like the 375px iPhone SE). Always use flex wrapping, responsive font sizes (`text-[9px] sm:text-xs`), and constrained max-widths (`max-w-[70px]`) on labels to force multiline wrapping and save horizontal space.

## 7. Future Roadmap
- Backend Go API Integration for dynamic event data mapping.
- Organizer Dashboard (Client-side CRUD operations).
- Loading states (Skeleton screens) for Server Components to maintain the premium feel during data fetching.
