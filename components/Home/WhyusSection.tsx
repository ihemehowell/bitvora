'use client';

import { whyChooseUs } from "@/Data/Data";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
      <section className="dark py-20 relative bg-background text-foreground">

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <span className="text-highlight text-sm font-semibold tracking-[0.12em] mb-4 block">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              A small studio that <span className="gradient-text">actually ships.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build for how Nigerian businesses really work: customers on WhatsApp, budget Android phones, slow data. No fake numbers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={28} className={item.color} />
                  </div>
                  <h5 className="text-foreground font-semibold text-lg mb-2">{item.title}</h5>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}