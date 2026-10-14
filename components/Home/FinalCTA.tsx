'use client';

import { ArrowRight } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { whatsappLink } from "@/Data/Data";
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
                Let&apos;s discuss how we can bring your ideas to life with modern technologies.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="/quote"
                    className="group inline-flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 glow-primary"
                >
                  Get Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                    href={whatsappLink("Hi Bitvoratech, I'd like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border bg-background/50 text-foreground hover:bg-accent px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <IconBrandWhatsapp size={20} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}