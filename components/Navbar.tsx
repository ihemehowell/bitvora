'use client';

import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown, Layers, FolderOpen, BookMarked, Cpu, Wrench, Building2, DollarSign, FileQuestion, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { BrandIcon } from "./BrandIcon";
import { STORES_URL } from "@/Data/Data";

const navLinks = [
  { name: "Work", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const exploreColumns = [
  {
    heading: "Services",
    items: [
      { name: "Web Development", href: "/services/web", icon: Layers, desc: "Custom websites & apps" },
      { name: "Mobile Apps", href: "/services/mobile", icon: Cpu, desc: "iOS & Android solutions" },
      { name: "UI/UX Design", href: "/services/design", icon: FolderOpen, desc: "Beautiful interfaces" },
      { name: "Consulting", href: "/services/consulting", icon: Wrench, desc: "Expert guidance" },
    ],
  },
  {
    heading: "Projects",
    items: [
      { name: "Case Studies", href: "/case-studies", icon: BookMarked, desc: "In-depth project breakdowns" },
      { name: "Portfolio", href: "/projects", icon: Building2, desc: "Our recent work" },
      { name: "Technologies", href: "/technologies", icon: Cpu, desc: "Tools we work with" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { name: "Pricing", href: "/pricing", icon: DollarSign, desc: "Transparent plans" },
      { name: "FAQs", href: "/faqs", icon: FileQuestion, desc: "Common questions answered" },
      { name: "Contact Us", href: "/contact", icon: Phone, desc: "Let's talk" },
    ],
  },
];

const isActive = (pathname: string, href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const closeAll = useCallback(() => {
    setExploreOpen(false);
    setMobileMenuOpen(false);
    setMobileExploreOpen(false);
  }, []);

  // Close menus whenever the route changes (state adjusted during render, not in an effect)
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    closeAll();
  }

  // Click outside + Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeAll]);

  // Scroll-aware: compact once scrolled, hide on scroll down, reveal on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 160);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hover intent for the mega menu (desktop pointers only)
  const openOnHover = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setExploreOpen(true), 120);
  };
  const closeOnLeave = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setExploreOpen(false), 200);
  };

  const menuOpen = exploreOpen || mobileMenuOpen;

  return (
      <nav
          ref={navRef}
          aria-label="Main"
          className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300
            ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}
            ${scrolled || menuOpen
              ? "bg-background/85 backdrop-blur-xl border-border shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              : "bg-background/40 backdrop-blur-md border-transparent"}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link
              href="/"
              aria-label="Bitvoratech home"
              className="flex items-center no-underline font-extrabold text-2xl text-foreground tracking-tight transition-colors duration-200 hover:text-primary"
          >
            <div className="w-9 h-9 flex items-center justify-center">
              <BrandIcon size={36} />
            </div>
            Bitvora<span className="text-primary">Tech</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Explore Trigger */}
            <div onMouseEnter={openOnHover} onMouseLeave={closeOnLeave}>
              <button
                  type="button"
                  onClick={() => setExploreOpen(!exploreOpen)}
                  aria-expanded={exploreOpen}
                  aria-controls="explore-menu"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-none bg-transparent
                ${exploreOpen
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
              >
                Explore
                <ChevronDown
                    size={15}
                    aria-hidden
                    className={`transition-transform duration-300 ${exploreOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>
            </div>

            {/* Nav Links */}
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                  <Link
                      key={link.name}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`px-4 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-200
                  ${active
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                  >
                    {link.name}
                  </Link>
              );
            })}

            {/* Our product */}
            <a
                href={STORES_URL}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium no-underline text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent"
            >
              Bitvora Stores
              <span className="rounded-full bg-[var(--brand-orange)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                New
              </span>
            </a>
          </div>

          {/* Desktop Right — Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
                href="/quote"
                className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground font-semibold text-sm rounded-xl no-underline glow-primary transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Right — Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 bg-transparent border-none text-foreground rounded-lg cursor-pointer transition-colors duration-200 hover:bg-accent"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mega Menu ── */}
        <div
            id="explore-menu"
            onMouseEnter={openOnHover}
            onMouseLeave={closeOnLeave}
            className={`hidden md:block absolute left-0 right-0 border-b border-border bg-background backdrop-blur-2xl shadow-[0_32px_64px_rgba(0,0,0,0.15)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${exploreOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-3 pointer-events-none"
            }`}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="grid grid-cols-3 gap-0 divide-x divide-border">
              {exploreColumns.map((col) => (
                  <div key={col.heading} className="px-8 first:pl-0 last:pr-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-4">
                      {col.heading}
                    </p>
                    <div className="flex flex-col gap-1">
                      {col.items.map((item) => (
                          <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setExploreOpen(false)}
                              className="group flex items-start gap-3 px-3 py-3 rounded-xl no-underline transition-all duration-150 hover:bg-accent"
                          >
                            <div className="mt-0.5 w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0 text-muted-foreground transition-all duration-150 group-hover:bg-primary/15 group-hover:border-primary/25 group-hover:text-primary">
                              <item.icon size={15} aria-hidden />
                            </div>
                            <div>
                        <span className="block text-[13.5px] font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                          {item.name}
                        </span>
                              <span className="block text-[11.5px] text-muted-foreground mt-0.5 group-hover:text-foreground/60 transition-colors leading-snug">
                          {item.desc}
                        </span>
                            </div>
                          </Link>
                      ))}
                    </div>
                  </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Need something custom?</span>
              <Link
                  href="/quote"
                  onClick={() => setExploreOpen(false)}
                  className="text-xs font-semibold text-primary no-underline hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                Get a free quote <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileMenuOpen && (
            <div
                id="mobile-menu"
                className="md:hidden border-t border-border px-4 pt-3 pb-4 bg-background max-h-[calc(100svh-4rem)] overflow-y-auto"
            >

              <button
                  type="button"
                  onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                  aria-expanded={mobileExploreOpen}
                  className="w-full flex justify-between items-center px-4 py-3 bg-transparent border-none text-muted-foreground text-sm font-medium cursor-pointer rounded-lg transition-all duration-200 hover:bg-accent hover:text-foreground"
              >
                Explore
                <ChevronDown
                    size={18}
                    aria-hidden
                    className={`transition-transform duration-300 ${mobileExploreOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {mobileExploreOpen && (
                  <div className="flex flex-col gap-5 px-2 pt-3 pb-2">
                    {exploreColumns.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5 px-3">
                            {col.heading}
                          </p>
                          <div className="flex flex-col gap-0.5">
                            {col.items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg no-underline text-muted-foreground text-sm transition-all duration-200 hover:text-foreground hover:bg-accent"
                                >
                                  <item.icon size={14} className="shrink-0" aria-hidden />
                                  {item.name}
                                </Link>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>
              )}

              <div className="flex flex-col mt-1">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                      <Link
                          key={link.name}
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg no-underline text-sm font-medium transition-all duration-200
                    ${active
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`}
                      >
                        {link.name}
                      </Link>
                  );
                })}
                <a
                    href={STORES_URL}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg no-underline text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent"
                >
                  Bitvora Stores
                  <span className="rounded-full bg-[var(--brand-orange)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-navy)]">
                    New
                  </span>
                </a>
              </div>

              <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 flex justify-center items-center w-full px-5 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl no-underline glow-primary transition-all duration-200 hover:opacity-90"
              >
                Get a Quote
              </Link>
            </div>
        )}
      </nav>
  );
}
