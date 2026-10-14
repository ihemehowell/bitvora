'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Search, Server, Wallet, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PricingCard } from "@/components/PricingCard"
import { pricingPlans, faqs } from "@/Data/Data"

// Every point here is backed by our FAQ / services copy — keep it that way
const included = [
    { icon: Smartphone, label: 'Responsive on every device', sub: 'Phones, tablets and desktops' },
    { icon: Search, label: 'SEO-ready from day one', sub: 'Clean markup, fast pages, metadata' },
    { icon: Server, label: 'Domain & hosting help', sub: 'We set up and configure it for you' },
    { icon: Wallet, label: '50% to start', sub: 'Bank transfer or mobile payment' },
]

const pricingFaqs = faqs.filter(f =>
    /payment|long|maintenance|hosting/i.test(f.question)
)

export default function PricingClient() {
    return (
        <div className="min-h-screen pb-10">

            {/* ── Hero ── */}
            <section className="pt-16 pb-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none dotted-grid opacity-40" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">
                            Simple Pricing
                        </span>
                        <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-foreground mb-4 leading-none">
                            One-time projects,
                            <span className="block"><span className="text-primary">no</span> monthly surprises</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Clear starting prices in Naira. Every project starts with a clear, written quote.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Pricing cards ── */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                        {pricingPlans.map((plan, i) => (
                            <PricingCard key={plan.name} {...plan} index={i} />
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center text-sm text-muted-foreground mt-8"
                    >
                        Prices are starting points — your final quote depends on scope, content and integrations.
                    </motion.p>
                </div>
            </section>

            {/* ── Included in every project ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-foreground mb-10 text-center"
                    >
                        Included in every project
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {included.map(({ icon: Icon, label, sub }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                            >
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon size={18} className="text-primary" aria-hidden />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">{label}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pricing FAQs ── */}
            {pricingFaqs.length > 0 && (
                <section className="py-12 border-t border-border">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Questions about pricing</h2>
                        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
                            {pricingFaqs.map(f => (
                                <details key={f.question} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-foreground">
                                        {f.question}
                                        <span aria-hidden className="text-primary text-xl leading-none transition-transform group-open:rotate-45">+</span>
                                    </summary>
                                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">{f.answer}</p>
                                </details>
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-6">
                            More answers on our <Link href="/faqs" className="text-primary underline underline-offset-2">FAQ page</Link>.
                        </p>
                    </div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="py-16 border-t border-border">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-3">
                            Not sure which plan fits?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Tell us what you need and we&apos;ll build a package around your exact requirements.
                        </p>
                        <Link href="/quote" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300">
                            Get a custom quote
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}
