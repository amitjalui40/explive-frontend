"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-32 right-6 md:bottom-8 md:right-8 z-[999999] flex h-16 w-16 md:h-14 md:w-14 items-center justify-center rounded-full bg-white text-zinc-900 shadow-[0_0_40px_rgba(0,0,0,0.5)] ring-2 ring-zinc-900/10 transition-all active:scale-90 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-white/20"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-7 w-7 md:h-6 md:w-6" />
      ) : (
        <Moon className="h-7 w-7 md:h-6 md:w-6" />
      )}
    </button>
  );
}
