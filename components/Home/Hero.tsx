"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/Data/Data";

const blur = (img: unknown) => (typeof img === "string" ? "empty" : "blur");

// Screenshots shown in the hero stack (front → back)
const showcase = [portfolioProjects[1], portfolioProjects[0], portfolioProjects[4]].filter(Boolean);

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
      <div className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl shadow-black/30">
        <div className="flex items-center gap-1.5 px-3 h-8 border-b border-border bg-muted/60">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex-1 truncate rounded-md bg-background/70 px-2 py-0.5 text-[10px] text-muted-foreground mono">
            {url}
          </span>
        </div>
        {children}
      </div>
  );
}

export default function HeroSection() {
  const [front, middle, back] = showcase;

  return (
      <section className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden">
        <div className="tech-grid absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-primary mono">Available for projects</span>
              </motion.div>

              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black mb-6 leading-[1.05] tracking-tight text-foreground">
                Building Digital
                <span className="block gradient-text">Experiences</span>
                That <span className="text-muted-foreground">Scale</span>
              </h1>

              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                We craft modern websites and applications using cutting-edge technologies.
                Fast, scalable, and designed for growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                    href="/quote"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 glow-primary"
                >
                  Start a Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                    href="/projects"
                    className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/80 text-foreground font-medium rounded-xl border border-border transition-all duration-300"
                >
                  View Work
                </Link>
              </div>

              <dl className="grid grid-cols-3 gap-6 sm:gap-8 mt-12">
                {[
                  { value: `${portfolioProjects.length}+`, label: "Projects launched" },
                  { value: "Direct", label: "Access to your developer" },
                  { value: "Lagos", label: "Built locally for African SMEs" },
                ].map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse">
                      <dt className="text-muted-foreground text-sm">{stat.label}</dt>
                      <dd className="text-2xl font-bold text-primary">{stat.value}</dd>
                    </div>
                ))}
              </dl>
            </motion.div>

            {/* Real client work, stacked in browser frames */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden sm:block h-[340px] md:h-[420px] lg:h-[460px]"
                aria-label="Recent client projects"
            >
              {back && (
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.7, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="absolute right-0 top-0 w-[68%] rotate-[4deg]"
                  >
                    <BrowserFrame url={new URL(back.href).host}>
                      <Image src={back.image} alt={back.title} sizes="(min-width: 1024px) 380px, 60vw" placeholder={blur(back.image)} className="w-full h-44 md:h-52 object-cover object-top" />
                    </BrowserFrame>
                  </motion.div>
              )}
              {middle && (
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.9, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className="absolute left-0 top-10 w-[68%] -rotate-[3deg]"
                  >
                    <BrowserFrame url={new URL(middle.href).host}>
                      <Image src={middle.image} alt={middle.title} sizes="(min-width: 1024px) 380px, 60vw" placeholder={blur(middle.image)} className="w-full h-44 md:h-52 object-cover object-top" />
                    </BrowserFrame>
                  </motion.div>
              )}
              {front && (
                  <motion.a
                      href={front.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.6 }}
                      whileHover={{ y: -6 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[78%] block"
                  >
                    <BrowserFrame url={new URL(front.href).host}>
                      <Image src={front.image} alt={front.title} sizes="(min-width: 1024px) 460px, 75vw" placeholder={blur(front.image)} priority className="w-full h-52 md:h-64 object-cover object-top" />
                    </BrowserFrame>
                  </motion.a>
              )}

              <div className="absolute -bottom-2 left-0 glass p-4 rounded-xl border border-border z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">On Time</p>
                    <p className="text-muted-foreground text-xs">Every Delivery</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-2 right-2 glass px-4 py-2 rounded-full border border-border z-10">
                <span className="text-primary text-sm font-medium mono">Next.js + Tailwind</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
