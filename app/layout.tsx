import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/providers";
import { FloatingActions } from "@/components/FloatingActions";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.bitvoratech.com"),
    title: {
        default: "Web Development Agency in Lagos, Nigeria | Bitvoratech",
        template: "%s",
    },
    description: "Bitvoratech builds fast, modern websites, mobile apps, and eCommerce stores for African SMEs. Based in Lagos. Get a free quote and see our work.",
    openGraph: {
        title: "Web Development Agency in Lagos, Nigeria | Bitvoratech",
        description: "Bitvoratech builds fast, modern websites, mobile apps, and eCommerce stores for African SMEs. Based in Lagos.",
        url: "https://www.bitvoratech.com",
        siteName: "Bitvoratech",
        images: [
            {
                url: "/brand/og-image.png",
                width: 1200,
                height: 630,
                alt: "Bitvoratech — Web Development Agency in Lagos, Nigeria",
            },
        ],
        locale: "en_NG",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Agency in Lagos, Nigeria | Bitvoratech",
        description: "Bitvoratech builds fast, modern websites, mobile apps, and eCommerce stores for African SMEs. Based in Lagos.",
        images: ["/brand/og-image.png"],
    },
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
        image: "https://www.bitvoratech.com/brand/logo-dark-bg.svg",
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
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <body className="antialiased bg-background text-foreground">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground"
        >
            Skip to content
        </a>
        <Providers>
            <Navbar />
            <main id="main" className="pt-16">{children}</main>
            <Footer />
            <FloatingActions />
        </Providers>
        </body>
        </html>
    );
}