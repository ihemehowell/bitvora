'use client';

import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
        >
            {/* Respect the OS "reduce motion" setting for every framer-motion animation */}
            <MotionConfig reducedMotion="user">
                {children}
            </MotionConfig>
        </ThemeProvider>
    );
}
