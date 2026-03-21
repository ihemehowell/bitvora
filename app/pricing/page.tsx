'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Users, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { PricingCard } from "@/components/PricingCard"

const plans = [
    {
        name: 'Starter',
        price: '$29',
        period: 'month',
        description: 'Perfect for individuals and small projects getting off the ground.',
        features: [
            'Up to 5 projects',
            '10GB storage',
            'Basic analytics',
            'Email support',
            'API access',
            '99.5% uptime SLA',
        ],
        popular: false,
    },
    {
        name: 'Pro',
        price: '$79',
        period: 'month',
        description: 'For growing teams that need more power and collaboration tools.',
        features: [
            'Unlimited projects',
            '100GB storage',
            'Advanced analytics',
            'Priority support',
            'Full API access',
            '99.9% uptime SLA',
            'Custom integrations',
            'Team collaboration',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '$199',
        period: 'month',
        description: 'Tailored solutions for large organisations with complex needs.',
        features: [
            'Unlimited everything',
            '1TB storage',
            'Custom analytics',
            'Dedicated support',
            'White-label options',
            '99.99% uptime SLA',
            'SSO & SAML',
            'Custom contracts',
            'On-premise option',
        ],
        popular: false,
    },
]

// const faqs = [
//     {
//         q: 'Can I switch plans at any time?',
//         a: "Yes. Upgrades apply immediately and you're only billed the prorated difference. Downgrades take effect at the next billing cycle.",
//     },
//     {
//         q: 'Is there a free trial?',
//         a: "Every plan includes a 14-day free trial — no credit card required. Cancel any time before the trial ends and you won't be charged.",
//     },
//     {
//         q: 'What payment methods do you accept?',
//         a: 'We accept all major credit cards, PayPal, and bank transfers for annual Enterprise plans.',
//     },
//     {
//         q: 'Do you offer discounts for annual billing?',
//         a: 'Yes — pay annually and save up to 20% compared to monthly billing across all plans.',
//     },
// ]

const trust = [
    { icon: Zap, label: 'Lightning Fast', sub: 'Sub-50ms response times globally' },
    { icon: Shield, label: 'Enterprise Security', sub: 'SOC 2 Type II certified' },
    { icon: Users, label: '10,000+ Teams', sub: 'Trust us with their workflows' },
]

export default function PricingPage() {
    return (
        <div className="min-h-screen py-10">

            {/* ── Hero ── */}
            <section className=" pt-16 pb-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none dotted-grid opacity-40" />
                <div className="" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">
                            Simple Pricing
                        </span>
                        <h1 className="text-5xl md:text-[72px] font-bold text-foreground mb-4 leading-none">
                            Pay for what
                            you <span className="text-primary">actually</span> use
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            No hidden fees. No surprise invoices. Pick a plan and scale as you grow.
                        </p>
                    </motion.div>

                    {/* Trust bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-wrap justify-center gap-8 mt-10"
                    >
                        {trust.map(({ icon: Icon, label, sub }) => (
                            <div key={label} className="flex items-center gap-3 text-left">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">{label}</p>
                                    <p className="text-xs text-muted-foreground">{sub}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Pricing cards ── */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, i) => (
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
                        All plans include a 14-day free trial. No credit card required.
                    </motion.p>
                </div>
            </section>

            {/* ── Compare section ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-2">Compare plans</h2>
                        <p className="text-muted-foreground">Everything you get, side by side.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <table className="w-full text-sm">
                            <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 pr-8 text-muted-foreground font-normal w-1/3">Feature</th>
                                {plans.map(p => (
                                    <th key={p.name} className={`py-3 px-4 text-center font-semibold ${p.popular ? 'text-primary' : 'text-foreground'}`}>
                                        {p.name}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                ['Projects', '5', 'Unlimited', 'Unlimited'],
                                ['Storage', '10GB', '100GB', '1TB'],
                                ['Analytics', 'Basic', 'Advanced', 'Custom'],
                                ['Support', 'Email', 'Priority', 'Dedicated'],
                                ['API access', '✓', '✓', '✓'],
                                ['Custom integrations', '—', '✓', '✓'],
                                ['SSO / SAML', '—', '—', '✓'],
                                ['White-label', '—', '—', '✓'],
                                ['Uptime SLA', '99.5%', '99.9%', '99.99%'],
                            ].map(([feature, ...values]) => (
                                <tr key={feature} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                                    <td className="py-3 pr-8 text-muted-foreground">{feature}</td>
                                    {values.map((v, i) => (
                                        <td key={i} className={`py-3 px-4 text-center ${i === 1 ? 'text-primary font-medium' : 'text-foreground'}`}>
                                            {v === '✓' ? <Check size={16} className="mx-auto text-primary" /> : v === '—' ? <span className="text-border">—</span> : v}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            

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
                            Talk to our team and we&#39ll build a custom package around your exact requirements.
                        </p>
                        <Link href="/quote">
                            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300">
                                Get a custom quote
                                <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}