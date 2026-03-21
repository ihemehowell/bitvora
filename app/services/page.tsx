'use client';

import { ServiceCard } from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { servicesData } from '@/Data/Data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="dotted-grid absolute inset-0 pointer-events-none opacity-40" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">
                            Our Services
                        </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h1 className="text-5xl md:text-[72px] font-bold text-foreground leading-none">
                  Complete solutions<br />
                  for your <span className="text-primary">business</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-sm md:text-right">
                  From websites to full-stack applications, we deliver modern digital solutions that scale.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                  >
                    <ServiceCard {...service} index={i} />
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border bg-card relative overflow-hidden p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Ready to get started?
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Let's build something amazing together. Tell us about your project and we'll take it from there.
                </p>
              </div>
              <div className="relative shrink-0 flex justify- items-center flex-wrap gap-3">
                <Link href="/quote">
                  <button className="inline-flex items-center gap-2 py-3 px-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300">
                    Request a quote <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
  );
}