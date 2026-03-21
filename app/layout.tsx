import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bitvoratech | Modern Web Development Agency",
    description: "Building high-performance websites and digital solutions with cutting-edge technologies.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={` ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Providers>
            <Navbar />
            {children}
            <Footer />
        </Providers>
        </body>
        </html>
    );
}