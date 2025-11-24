'use client'
import { useState } from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { motion } from 'framer-motion';
import { filters , projects } from '@/Data/Data';
import Link from 'next/link';

export  default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');



  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#319198]/20 to-[#319198]/15 py-20 max-md:py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-900 mb-6 text-4xl font-bold"
            >
              Our <span className="bg-linear-to-br from-[#319198]/70 to-[#319198]/95 bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Explore our latest projects and see how we've helped businesses achieve their digital goals
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg transition-all ${activeFilter === filter
                    ? 'bg-[#319198] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link 
              key={project.id}
              href={`/portfolio/${project.id}`}>
              <PortfolioCard
                
                {...project}
                index={index}
              />
              </Link>
              
            ))}
          </div>

          {/* Load More */}
          {filteredProjects.length >= 9 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-[#319198]/20 text-white font-semibold rounded-xl hover:bg-[#319198]/40 transition-colors disabled:opacity-50">
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-[#319198]/50 to-[#319198]/95 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white mb-6"
            >
              Like What You See?
            </motion.h2>
            <p className="text-primary-100 text-lg mb-8">
              Let's create something amazing for your business. Get started with a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
            
              <Link href="quote">
              <button
                className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </button>
              </Link>

              <Link href="contact">
              <button
                className="px-8 py-4 bg-primary-700 text-white rounded-xl hover:bg-primary-800 transition-colors border border-primary-500"
              >
                Contact Us
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
