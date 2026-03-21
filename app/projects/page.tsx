'use client';

import { useState, useMemo } from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, portfolioFilters } from '@/Data/Data';
import Link from 'next/link';
import { Search, X, ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchCat = activeFilter === 'All' || p.category === activeFilter;
      const q = query.toLowerCase();
      const matchQuery = !q ||
          p.title?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [activeFilter, query]);

  return (
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="dotted-grid absolute inset-0 pointer-events-none opacity-40" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl flex flex-col items-start justify-between gap-6"
            >
                        <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">
                            Our Portfolio
                        </span>
              <h1 className="text-5xl md:text-[72px] font-bold text-foreground mb-4 leading-none">
                Work we're<br />
                <span className="text-primary">proud</span> of
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl justify-end">
                A selection of projects we've built for clients across industries — from early-stage startups to established enterprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Search + Filter ── */}
        <section className="pb-10">
          <div className="container mx-auto px-6">

            {/* Search */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative mb-5 max-w-md"
            >
             
              <input
                  type="text"
                  placeholder="Search projects..."
                  value={query}
                  onChange={e => { setQuery(e.target.value); }}
                  className="w-full h-11 py-2 px-2 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              /> 
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {query && (
                  <button
                      onClick={() => setQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={14} />
                  </button>
              )}
            </motion.div>

            {/* Filter pills */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-2 mx-auto max-w-max"
            >
              {portfolioFilters.map(filter => (
                  <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                          activeFilter === filter
                              ? 'bg-primary text-primary-foreground font-medium'
                              : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                      }`}
                  >
                    {filter}
                  </button>
              ))}
            </motion.div>

            {/* Results count */}
            {(query || activeFilter !== 'All') && (
                <p className="text-sm text-muted-foreground mt-4">
                  {filtered.length} project{filtered.length !== 1 ? 's' : ''}
                  {query && <span> matching <strong>"{query}"</strong></span>}
                </p>
            )}
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="py-10 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ delay: index * 0.06 }}
                    >
                      <PortfolioCard {...project} index={index} />
                    </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                  No projects match your search.
                </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border bg-card relative overflow-hidden p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Like what you see?
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Let's build something you're proud of. Tell us about your project and we'll take it from there.
                </p>
              </div>
              <div className="relative flex flex-wrap gap-3 shrink-0">
                <Link href="/quote">
                  <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300">
                    Get a quote <ArrowRight size={16} />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-primary/40 text-foreground rounded-xl transition-all duration-300">
                    Contact us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
  );
}