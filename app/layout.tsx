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
    metadataBase: new URL("https://www.bitvoratech.com"),
    title: {
        default: "Web Development Agency in Lagos, Nigeria | Bitvoratech",
        template: "%s",
    },
    description: "Bitvoratech builds fast, modern websites, mobile apps, and eCommerce stores for African SMEs. Based in Lagos. Get a free quote and see our work.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Bitvoratech",
        image: "https://www.bitvoratech.com/bitvora-logo.svg",
        url: "https://www.bitvoratech.com",
        telephone: "+234-906-184-6290",
        email: "info@bitvoratech.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "2 Dacosta Street",
            addressLocality: "Yaba, Lagos",
            addressCountry: "NG",
        },
        areaServed: "NG",
        sameAs: [
            "https://web.facebook.com/bitvoratech",
            "https://www.instagram.com/bitvoratechh/",
            "https://www.linkedin.com/company/bitvoratech-solutions/",
            "https://github.com/BitvoraTech-Solutions",
        ],
    };

    return (
        <html lang="en" suppressHydrationWarning>
        <body className={` ${geistMono.variable} antialiased bg-background text-foreground`}>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Providers>
            <Navbar />
            {children}
            <Footer />
        </Providers>
        </body>
        </html>
    );
}