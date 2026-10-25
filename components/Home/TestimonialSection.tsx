"use client";

import { testimonials, GOOGLE_REVIEWS_URL } from "@/Data/Data";
import { TestimonialCard } from "@/components/TestimonialCard";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  const average = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const fromGoogle = testimonials.every((t) => t.source === "google");

  return (
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-end justify-between gap-6 mb-12"
          >
            <div className="max-w-2xl">
              <span className="text-highlight text-sm font-semibold tracking-[0.12em] mb-4 block">TESTIMONIALS</span>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What our <span className="gradient-text">clients say</span>
              </h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <Star size={18} className="fill-[var(--brand-orange)] text-[var(--brand-orange)]" aria-hidden />
                <span>
                  <strong className="text-foreground">{average.toFixed(1)}</strong> from {testimonials.length}{" "}
                  {testimonials.length === 1 ? "review" : "reviews"}
                  {fromGoogle ? " on Google" : ""}
                </span>
              </p>
            </div>
            {GOOGLE_REVIEWS_URL && (
                <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold no-underline hover:bg-accent transition-colors"
                >
                  See all reviews on Google
                  <ArrowUpRight size={18} aria-hidden />
                </a>
            )}
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
                <motion.div
                    key={`${t.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index, 5) * 0.08 }}
                >
                  <TestimonialCard {...t} />
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
