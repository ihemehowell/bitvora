'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-border bg-card/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build Something <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how we can bring your ideas to life with modern technologies.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote">
                  <Button className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 glow-primary">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-accent px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}