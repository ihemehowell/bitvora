"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden ">
        <div className="tech-grid absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 py-20 relative z-10">
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

              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight text-foreground">
                Building Digital
                <span className="block gradient-text">Experiences</span>
                That <span className="text-muted-foreground">Scale</span>
              </h1>

              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                We craft modern websites and applications using cutting-edge technologies.
                Fast, scalable, and designed for growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="group">
                  <button className="flex items-center gap-2 px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 glow-primary">
                    Start a Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link href="/portfolio">
                  <button className="px-8 py-4 bg-accent hover:bg-accent/80 text-foreground font-medium rounded-xl border border-border transition-all duration-300">
                    View Work
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { value: "250+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "5+", label: "Years Experience" },
                ].map((stat) => (
                    <div key={stat.label}>
                      <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                ))}
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border">
                <img
                    src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Web Development"
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

                <div className="absolute -bottom-3 -left-3 glass p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-primary" size={20} />
                    </div>
                    <div>
                      <h6 className="text-foreground text-sm font-medium">On Time</h6>
                      <p className="text-muted-foreground text-xs">Every Delivery</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-0 -right-1 glass px-4 py-2 rounded-full border border-border">
                  <span className="text-primary text-sm font-medium mono">Next.js + Tailwind</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}