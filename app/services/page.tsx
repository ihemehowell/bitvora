'use client';

import { ServiceCard } from '@/components/ServiceCard';
import { PricingCard } from '@/components/PricingCard';
import { motion } from 'framer-motion';
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from '@/components/ui/accordion';
import { servicesData,faqs,pricingPlans } from '@/Data/Data';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-900 mb-6 text-3xl font-bold"
            >
              Our <span className="bg-[#319198] bg-clip-text text-transparent ">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Comprehensive web development solutions designed to help your business thrive in the digital world
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-10 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-900 mb-4 text-3xl font-bold"
            >
              Transparent Pricing
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-semibold">
              Choose the package that best fits your needs. All plans include our quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                index={index}
                onGetQuote={() => onNavigate('quote')}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg font-semibold">
              Not sure which plan is right for you?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-[#319198] text-white rounded-xl hover:bg-[#319198]/80 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-900 mb-4 text-3xl font-bold"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-semibold">
              Got questions? We've got answers. Find everything you need to know about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 text-lg font-semibold">Still have questions?</p>
            
            <Link
              href="/contact"
              className="text-[#319198] hover:text-primary transition-colors hover:underline hover:underline-offset-4 text-lg font-semibold"
            >
              Contact our team 
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <p className="text-primary-160000 text-lg mb-8">
              Let's build something amazing together. Get your free project quote today.
            </p>
            <button
              onClick={() => onNavigate('quote')}
              className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
