'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
    Code2, Database, Cloud, Globe, Cpu, Lock,
    Layers, Smartphone, BarChart3, ShoppingCart,
    HeartPulse, GraduationCap, Building2, Truck,
    Search, Lightbulb, PenTool, Rocket, Headphones
} from 'lucide-react'
import {TechMarquee} from "@/components/technologies/tech-marquee";

// ── Marquee data ─────────────────────────────────────────────────────────────


// ── Stack categories ──────────────────────────────────────────────────────────
const stackCategories = [
    {
        icon: Code2,
        label: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        icon: Database,
        label: 'Backend',
        items: ['Node.js', 'Python', 'GraphQL', 'REST APIs', 'WebSockets'],
    },
    {
        icon: Database,
        label: 'Databases',
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'PlanetScale'],
    },
    {
        icon: Cloud,
        label: 'Cloud & DevOps',
        items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
    {
        icon: Lock,
        label: 'Security',
        items: ['OAuth 2.0', 'JWT', 'SOC 2', 'OWASP', 'Pen Testing'],
    },
    {
        icon: Smartphone,
        label: 'Mobile',
        items: ['React Native', 'Expo', 'iOS', 'Android', 'PWA'],
    },
]

// ── Industries ────────────────────────────────────────────────────────────────
const industries = [
    { icon: ShoppingCart, label: 'E-commerce', desc: 'Scalable storefronts, payment integrations, and inventory systems.' },
    { icon: HeartPulse,   label: 'Healthcare',  desc: 'HIPAA-compliant platforms, patient portals, and telehealth apps.' },
    { icon: BarChart3,    label: 'Fintech',      desc: 'Trading dashboards, payment gateways, and real-time analytics.' },
    { icon: GraduationCap,label: 'EdTech',       desc: 'LMS platforms, live classrooms, and progress tracking tools.' },
    { icon: Building2,    label: 'Enterprise',   desc: 'Internal tools, ERP integrations, and workflow automation.' },
    { icon: Truck,        label: 'Logistics',    desc: 'Fleet tracking, route optimisation, and supply chain visibility.' },
    { icon: Globe,        label: 'SaaS',         desc: 'Multi-tenant apps, subscription billing, and onboarding flows.' },
    { icon: Cpu,          label: 'AI & ML',       desc: 'Model deployment, data pipelines, and intelligent automation.' },
]

// ── Process ───────────────────────────────────────────────────────────────────
const process = [
    { icon: Search,      step: '01', label: 'Discovery',    desc: 'We audit your requirements, map constraints, and choose the right tech for your goals — not the trendiest stack.' },
    { icon: Lightbulb,   step: '02', label: 'Architecture', desc: 'System design, database schema, API contracts, and infra planning before a single line of code is written.' },
    { icon: PenTool,     step: '03', label: 'Build',        desc: 'Iterative sprints with continuous delivery. You see working software every two weeks, not just status updates.' },
    { icon: Layers,      step: '04', label: 'QA & Testing', desc: 'Unit, integration, and end-to-end tests. Load testing and security audits before anything ships.' },
    { icon: Rocket,      step: '05', label: 'Launch',       desc: 'Zero-downtime deploys, monitoring setup, and a rollback plan. We don\'t cross our fingers on release day.' },
    { icon: Headphones,  step: '06', label: 'Support',      desc: 'Post-launch monitoring, bug fixes, and feature iteration. We\'re your long-term engineering partner.' },
]



export default function TechnologiesPage() {
    return (
        <div className="min-h-screen py-10">

            {/* ── Hero ── */}
            <section className="pt-16 pb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="dotted-grid absolute inset-0 pointer-events-none opacity-45" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">
                            Our Stack
                        </span>
                        <h1 className="text-5xl md:text-[72px] font-bold text-foreground mb-4 leading-none">
                            Built with the<br />
                            <span className="text-primary">right</span> tools
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            We pick technology that fits the problem — battle-tested foundations with modern tooling that ships fast and scales further.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Marquee ── */}
            <section className="py-10 overflow-hidden dotted-grid opacity-70">
                <div className="space-y-4">
                    <TechMarquee />
                </div>
            </section>

            {/* ── Stack categories ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-2">Full-stack capability</h2>
                        <p className="text-muted-foreground">Every layer of your product, covered.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stackCategories.map(({ icon: Icon, label, items }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors group"
                            >
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Icon size={18} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-3">{label}</h3>
                                <ul className="space-y-1.5">
                                    {items.map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industries ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-2">Industries we serve</h2>
                        <p className="text-muted-foreground">Domain knowledge that makes the difference.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {industries.map(({ icon: Icon, label, desc }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 transition-colors group"
                            >
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                    <Icon size={18} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-1.5">{label}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-2">How we work</h2>
                        <p className="text-muted-foreground">A process built for predictability, not surprises.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.map(({ icon: Icon, step, label, desc }, i) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors group relative overflow-hidden"
                            >
                                <span className="absolute top-4 right-5 text-4xl font-bold text-border/40 mono select-none">
                                    {step}
                                </span>
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Icon size={18} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">{label}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
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
                            Ready to build something?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Tell us what you're working on and we'll put together the right team and stack for it.
                        </p>
                        <a href="/quote">
                            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300">
                                Start a project
                                <Rocket size={18} />
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}