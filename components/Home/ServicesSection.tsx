"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/Data/Data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicesSectionProps {
    onNavigate: (page: string) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
    return (
        <section className="bg-white py-20 max-md:py-12">
            <div className="container mx-auto px-6 text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-900 mb-4 text-3xl font-bold"
                >
                    Our Services
                </motion.h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                    Comprehensive web development solutions tailored to your business needs
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} index={index} />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 mx-auto">
                    <Link
                        href="/services"
                        className="text-[#319198] hover:text-[#319198]/80 hover:bg-[#319198]/10 text-lg py-4 px-8 border border-[#319198] rounded-full flex items-center gap-2 transition-all duration-300 justify-center  max-w-[250px] mx-auto"
                    >
                        View All Services
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
