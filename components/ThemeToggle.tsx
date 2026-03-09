'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch — only render after mount
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-9 h-9" />; // placeholder to prevent layout shift

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-transparent text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground cursor-pointer"
        >
            <Sun
                size={16}
                className={`absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
            />
            <Moon
                size={16}
                className={`absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
            />
        </button>
    );
}