'use client'
import React from 'react'
import { motion } from "framer-motion"
import { FAQSearch } from "@/components/faqs/faqs-search"
import { FAQCarousel } from "@/components/faqs/faqs-carousel"

const Page = () => {
    return (
        <div className="min-h-screen">

            {/* Hero */}
            <section className="py-20 relative overflow-hidden tech-grid">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-primary text-sm font-medium mono mb-4 block">FREQUENTLY ASKED QUESTIONS</span>
                        <h1 className="text-[100px] font-bold text-foreground mb-6">
                            FA<span className='text-primary'>Q</span>s
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Perhaps you can find the answers in our collections
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-10"
                    >
                        <FAQSearch />
                    </motion.div>
                </div>
            </section>
            
            <div className=""></div>

            {/* FAQ Carousel */}
            <section className="tech-grid py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <FAQCarousel />
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default Page