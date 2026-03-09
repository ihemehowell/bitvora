'use client';

import { ServiceCard } from '@/components/ServiceCard';
import { PricingCard } from '@/components/PricingCard';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { servicesData, faqs, pricingPlans } from '@/Data/Data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
      <div className="min-h-screen">

        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
            >
            <span className="text-primary text-sm font-medium mono mb-4 block">
              OUR SERVICES
            </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Complete <span className="gradient-text">Solutions</span> for Your Business
              </h1>
              <p className="text-muted-foreground text-lg">
                From websites to full-stack applications, we deliver modern digital solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard {...service} index={index} />
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 relative">
          <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
            <span className="text-primary text-sm font-medium mono mb-4 block">
              PRICING
            </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Transparent <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the package that fits your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                  <PricingCard key={index} {...plan} index={index} />
              ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-6">
                Not sure which plan is right for you?
              </p>
              <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
            <span className="text-primary text-sm font-medium mono mb-4 block">
              FAQ
            </span>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Frequently <span className="gradient-text">Asked</span> Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-card border border-border rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 transition-colors"
              >
                Contact our team
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get <span className="gradient-text">Started?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's build something amazing together
              </p>
              <Link href="/quote">
                <button className="px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 glow-primary">
                  Request a Quote
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
  );
}