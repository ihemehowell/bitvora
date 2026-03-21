"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/Data/Data";

export default function ServicesSection() {
  return (
      <section className="py-20 relative glass">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium mono mb-4 block">WHAT WE DO</span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-2xl border  transition-all duration-300 border-primary/20 hover:border-primary/30"
                >
                  <ServiceCard {...service} index={index} />
                </motion.div>
            ))}
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
          >
            <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors  border rounded-full px-6 py-3 border-primary/20 bg-primary/10 hover:bg-primary/20"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
  );
}