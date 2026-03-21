'use client'
import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Search, X } from 'lucide-react'
import Link from 'next/link'
import {caseStudies, CaseStudy, categories, stats} from "@/Data/case-studies";


const PAGE_SIZE = 6

// ── Featured card ─────────────────────────────────────────────────────────────
function FeaturedCard({ study }: { study: CaseStudy }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl border border-border bg-card overflow-hidden group"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${study.accentColor} pointer-events-none`} />
            <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mono">{study.category}</span>
                        <span className="h-px w-8 bg-border" />
                        <span className="text-xs text-muted-foreground">{study.client}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">{study.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{study.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {study.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">{tag}</span>
                        ))}
                    </div>
                    <Link href={`/case-studies/${study.id}`}>
                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200">
                            Read case study <ArrowRight size={15} />
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map(({ label, value }) => (
                        <div key={label} className="rounded-2xl border border-border bg-background/50 p-5 text-center">
                            <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{value}</p>
                            <p className="text-xs text-muted-foreground">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

// ── Editorial card ────────────────────────────────────────────────────────────
function EditorialCard({ study, index }: { study: CaseStudy; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: index * 0.05 }}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors duration-300"
        >
            <div className={`h-1.5 w-full bg-gradient-to-r ${study.accentColor.replace('/20', '/60').replace('to-transparent', 'to-primary/30')}`} />
            <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mono">{study.category}</span>
                        <span className="text-xs text-border">·</span>
                        <span className="text-xs text-muted-foreground">{study.client}</span>
                    </div>
                    <Link href={`/case-studies/${study.id}`}>
                        <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors duration-200">
                            <ArrowUpRight size={14} />
                        </span>
                    </Link>
                </div>
                <h3 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                    {study.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{study.excerpt}</p>
                <div className="flex gap-4 pt-5 border-t border-border">
                    {study.metrics.slice(0, 3).map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-lg font-bold text-foreground">{value}</p>
                            <p className="text-xs text-muted-foreground">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    const featured = caseStudies.find(c => c.featured)!
    const rest = caseStudies.filter(c => !c.featured)

    const filtered = useMemo(() => {
        return rest.filter(c => {
            const matchCat = activeCategory === 'All' || c.category === activeCategory
            const q = query.toLowerCase()
            const matchQuery = !q || c.title.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q))
            return matchCat && matchQuery
        })
    }, [activeCategory, query, rest])

    const paginated = filtered.slice(0, page * PAGE_SIZE)
    const hasMore = paginated.length < filtered.length

    function handleFilter(cat: string) {
        setActiveCategory(cat)
        setPage(1)
    }

    function handleSearch(val: string) {
        setQuery(val)
        setPage(1)
    }

    return (
        <div className="min-h-screen py-10">

            {/* ── Hero ── */}
            <section className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="dotted-grid absolute inset-0 pointer-events-none opacity-40" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">Case Studies</span>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <h1 className="text-5xl md:text-[72px] font-bold text-foreground leading-none">
                                Work that<br /><span className="text-primary">speaks</span> for itself
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-sm md:text-right">
                                Real problems, real solutions, real numbers. Here's what we've shipped.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats banner ── */}
            <section className="py-10 border-y border-border bg-card/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map(({ label, value }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{value}</p>
                                <p className="text-sm text-muted-foreground">{label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured ── */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mono mb-5">Featured</p>
                    <FeaturedCard study={featured} />
                </div>
            </section>

            {/* ── Search + Filter + Grid ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6">

                    {/* Search */}
                    <div className="relative mb-6 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by client, category, or technology..."
                            value={query}
                            onChange={e => handleSearch(e.target.value)}
                            className="w-full h-11 pl-11 pr-10 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        {query && (
                            <button onClick={() => handleSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleFilter(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                                    activeCategory === cat
                                        ? 'bg-primary text-primary-foreground font-medium'
                                        : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    {(query || activeCategory !== 'All') && (
                        <p className="text-sm text-muted-foreground mb-6">
                            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                            {query && <span> for <strong>"{query}"</strong></span>}
                        </p>
                    )}

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {paginated.map((study, i) => (
                                <EditorialCard key={study.id} study={study} index={i} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <p className="text-center text-muted-foreground py-16">No case studies match your search.</p>
                    )}

                    {/* Load more */}
                    {hasMore && (
                        <div className="mt-10 text-center">
                            <button
                                onClick={() => setPage(p => p + 1)}
                                className="inline-flex items-center gap-2 border border-border text-sm font-medium text-foreground px-6 py-3 rounded-xl hover:border-primary/40 transition-colors"
                            >
                                Load more <ArrowRight size={15} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 border-t border-border">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold text-foreground mb-3">Want to be our next case study?</h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Tell us about your project and let's build something worth writing about.
                        </p>
                        <Link href="/quote">
                            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300">
                                Start a project <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}