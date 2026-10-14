'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { portfolioProjects, portfolioFilters } from "@/Data/Data";
import { PortfolioCard } from "@/components/PortfolioCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-primary text-sm font-medium mono mb-2 block">OUR WORK</span>
              <h2 className="text-4xl font-bold text-foreground">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                See how we&apos;ve helped businesses achieve their digital goals
              </p>
            </div>

            <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors"
            >
              View All <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by category">
            {portfolioFilters.map((filter) => (
                <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeFilter === filter
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-muted-foreground hover:bg-accent/80 hover:text-foreground"
                    }`}
                >
                  {filter}
                </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                  <Link href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} (opens in a new tab)`}>
                    <PortfolioCard {...project} index={index} />
                  </Link>
                </motion.div>
            ))}
          </div>

          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8 md:hidden"
          >
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
  );
}