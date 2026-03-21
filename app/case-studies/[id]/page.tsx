import { notFound } from 'next/navigation'
import {ArrowLeft, ArrowRight, Clock, Calendar, ArrowUpRight} from 'lucide-react'
import Link from 'next/link'
import {caseStudies} from "@/Data/case-studies";


interface Props {
    params: Promise<{ id: string }>
}

export default async function CaseStudyPage({ params }: Props) {
    const { id } = await params
    const study = caseStudies.find(c => c.id === id)
    if (!study) notFound()

    const others = caseStudies.filter(c => c.id !== study.id).slice(0, 2)

    return (
        <div className="min-h-screen py-10">

            {/* ── Header ── */}
            <section className="pt-16 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className={`absolute inset-0 bg-gradient-to-br ${study.accentColor} pointer-events-none`} />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft size={15} /> Back to case studies
                    </Link>

                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mono">{study.category}</span>
                        <span className="h-px w-8 bg-border" />
                        <span className="text-xs text-muted-foreground">{study.client}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                        {study.title}
                    </h1>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {study.duration}</span>
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {study.year}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {study.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-card">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Metrics ── */}
            <section className="py-10 border-y border-border bg-card/50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {study.metrics.map(({ label, value }) => (
                            <div key={label} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{value}</p>
                                <p className="text-sm text-muted-foreground">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Body ── */}
            <section className="py-12">
                <div className="container mx-auto px-6 max-w-3xl space-y-12">

                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mono mb-4">Overview</h2>
                        <p className="text-foreground leading-relaxed">{study.overview}</p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-6">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mono mb-4">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mono mb-4">Our Solution</h2>
                        <p className="text-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mono mb-4">Results</h2>
                        <p className="text-foreground leading-relaxed">{study.results}</p>
                    </div>

                </div>
            </section>

            {/* ── More case studies ── */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mono mb-8">More case studies</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {others.map(other => (
                            <Link key={other.id} href={`/case-studies/${other.id}`}>
                                <div className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mono">{other.category}</span>
                                        <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-xs leading-snug group-hover:text-primary transition-colors">
                                        {other.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 border-t border-border">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <h2 className="text-4xl font-bold text-foreground mb-3">Ready to get similar results?</h2>
                    <p className="text-muted-foreground mb-8">Tell us about your project and let's see what we can build together.</p>
                    <Link href="/quote">
                        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300">
                            Start a project <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export function generateStaticParams() {
    return caseStudies.map(c => ({ id: c.id }))
}