'use client';

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { STORES_URL } from "@/Data/Data";

const storeFeatures = [
  "WhatsApp orders on every product",
  "Your colours, fonts and hero images",
  "Verified sellers, NIN/CAC checked",
];

const customFeatures = [
  "Design, development and launch",
  "Your own domain, payments and integrations",
  "Direct line to your developer, ongoing support",
];

/**
 * Bitvora Stores and custom builds as two steps on one ladder,
 * so the product and the agency send customers to each other.
 */
export default function StoresLadder() {
  return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
          >
            <span className="text-highlight text-sm font-semibold tracking-[0.12em] mb-4 block">TWO WAYS TO WORK WITH US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1]">
              Start with a store. Grow into a custom site.
            </h2>
            <p className="text-muted-foreground text-lg">
              Not every business needs a custom build on day one. Launch a branded store in minutes,
              and when you outgrow it, the same team builds what comes next.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Step 1: the product */}
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="dark bg-background text-foreground rounded-3xl p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-semibold text-primary">Step 1 · Ready in minutes</span>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Launching 1 Nov
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Bitvora Stores</h3>
              <p className="text-muted-foreground text-lg">
                A branded online store that looks like your business, not a template. Customers order on
                WhatsApp and pay by transfer or on delivery, in Naira.
              </p>
              <ul className="flex flex-col gap-3">
                {storeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" aria-hidden />
                      {f}
                    </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4">
                <p>
                  <span className="text-3xl font-bold font-heading">₦5,000</span>
                  <span className="text-muted-foreground"> / month to start</span>
                </p>
                <a
                    href={STORES_URL}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl no-underline hover:opacity-90 transition-opacity"
                >
                  Start your store
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
              </div>
            </motion.article>

            {/* Step 2: the agency */}
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card text-card-foreground border border-border rounded-3xl p-8 md:p-10 flex flex-col gap-5"
            >
              <span className="text-sm font-semibold text-highlight">Step 2 · Built around you</span>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-primary">Custom websites and apps</h3>
              <p className="text-muted-foreground text-lg">
                When you need more than a store: a company website, booking system, dashboard or full
                eCommerce build, designed and coded by our team.
              </p>
              <ul className="flex flex-col gap-3">
                {customFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" aria-hidden />
                      {f}
                    </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-muted-foreground">Quoted per project</p>
                <Link
                    href="/quote"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl no-underline hover:opacity-90 transition-opacity"
                >
                  Get a free quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
  );
}
