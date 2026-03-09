"use client";

import { testimonials } from "@/Data/Data";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium mono mb-4 block">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients who have worked with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>
  );
}