'use client';

import { ArrowRight } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { whatsappLink } from "@/Data/Data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-10 md:p-16 text-center bg-[var(--brand-orange)] text-[var(--brand-navy)]"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to build something that&apos;s yours?
              </h2>
              <p className="max-w-xl mx-auto mb-8 text-lg">
                Tell us what you sell and who you sell to, and we&apos;ll show you the best way to get it online.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="/quote"
                    className="group inline-flex items-center gap-2 bg-[var(--brand-navy)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl no-underline transition-all duration-300"
                >
                  Get a free quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                    href={whatsappLink("Hi Bitvoratech, I'd like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--brand-cream)] text-[var(--brand-navy)] font-semibold hover:bg-white px-8 py-4 rounded-xl no-underline transition-all duration-300"
                >
                  <IconBrandWhatsapp size={20} className="text-[#1d8f4e]" aria-hidden />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}