# Theme Architecture & Global Styling

## Overview
The Explive frontend uses `next-themes` paired tightly with **Tailwind CSS v4** to manage global Light, Dark, and System theme switching. This architecture completely prevents "hydration mismatches" (the ugly flash of light mode during page reload) while staying highly modular.

---

## Directory & File Breakdown

### 1. `src/components/providers/theme-provider.tsx`
* **Role:** The "Brain". This wraps the entire architecture in a React Context.
* **Mechanism:** It uses `next-themes` to listen to system settings or user input, and it directly injects the `class="dark"` attribute onto the root `<html>` tag.

### 2. `src/components/ui/theme-toggle.tsx`
* **Role:** The "Visual Switch". A reusable, "dumb" UI component (currently a floating button).
* **Mechanism:** It calls the `useTheme()` hook to swap states. It implements strict `useEffect` mounting logic (`if (!mounted) return null;`) to ensure that the server-side generated HTML doesn't clash with the client's local storage preferences.

### 3. `src/app/globals.css`
* **Role:** The CSS Engine Configuration.
* **Mechanism:** 
  - `@custom-variant dark (&:is(.dark *));` explicitly tells Tailwind v4 to trigger `dark:` classes only when the `.dark` toggle is flipped. (Tailwind v4 defaults to browser media queries, so this line is mandatory for custom toggles).
  - The root CSS variables swap pure HEX code palettes depending on whether the `.dark` selector is active.

### 4. `src/app/layout.tsx`
* **Role:** The Wrapper. 
* **Mechanism:** Injects the `<ThemeProvider>` around `{children}`. **Crucially**, it contains `suppressHydrationWarning` on the `<html>` tag, which is strictly required so Next.js doesn't throw a fatal warning when `next-themes` changes the HTML DOM tree on the fly.

---

## Guide for Future Development (AI & Human)

1. **Writing Dark Mode UI:**
   Always default to Tailwind CSS prefixes. For example: `text-zinc-900 dark:text-gray-100`. Tailwind will automatically watch the `html.dark` property managed by the provider.

2. **Reading Theme State in Code:**
   If you ever need to perform logical checks based on the theme (e.g., rendering a different SVG logo based on theme), do not read the DOM. Use the provided hook:
   ```ts
   import { useTheme } from "next-themes";
   const { theme, systemTheme } = useTheme(); 
   ```

3. **Modifying the Toggle Button:**
   If the design changes from a floating button to a Header Dropdown, simply modify the visual elements inside `src/components/ui/theme-toggle.tsx`. Do not rewrite the `ThemeProvider`.
