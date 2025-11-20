'use client'
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { PortfolioCard } from '@/components/PortfolioCard';
import Link from 'next/link';
import { projectData ,relatedProjects} from '@/Data/Data';

interface PortfolioDetailPageProps {
  projectId: number;
}

export default function  PortfolioDetailPage({ projectId }: PortfolioDetailPageProps) {
  // Project data - in real app would fetch based on projectId
 
  return (
    <div className="">
      {/* Back Button */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto ">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-gray-400 hover:bg-[#319198]/20 transition-colors rounded-full px-8 py-2 border  border-[#319198]/20 w-fit"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-white to-primary-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Tag size={16} />
                <span className="text-sm">{projectData.category}</span>
              </div>
              <h1 className="text-gray-900 mb-4">{projectData.title}</h1>
              <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{projectData.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{projectData.date}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl mb-6"
            >
              <img
                src={projectData.heroImage}
                alt={projectData.title}
                className="w-full"
              />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {projectData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-gray-900 mb-4">Project Overview</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {projectData.description}
              </p>
              <a
                href={projectData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
              >
                Visit Website
                <ExternalLink size={18} />
              </a>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 p-8 bg-gray-50 rounded-2xl"
            >
              <h4 className="text-gray-900 mb-4">The Challenge</h4>
              <p className="text-gray-600 leading-relaxed">{projectData.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 p-8 bg-primary-50 rounded-2xl"
            >
              <h4 className="text-gray-900 mb-4">Our Solution</h4>
              <p className="text-gray-600 leading-relaxed">{projectData.solution}</p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h4 className="text-gray-900 mb-6">Results</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {projectData.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 bg-white border border-gray-200 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-green-600">✓</span>
                    </div>
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-[#319198]/40 to-[#319198]/65 p-8 md:p-12 rounded-2xl text-white"
            >
              <h4 className="text-white mb-6">Client Testimonial</h4>
              <p className="text-primary-50 text-lg italic mb-6">
                "{projectData.testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={projectData.testimonial.avatar}
                  alt={projectData.testimonial.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h6 className="text-white">{projectData.testimonial.author}</h6>
                  <p className="text-primary-200 text-sm">
                    {projectData.testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-gray-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-gray-900 mb-4 text-2xl font-bold">Related Projects</h3>
            <p className="text-gray-600 text-lg">Check out more of our work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedProjects.map((project, index) => (
              <Link href={`/portfolio/${project.id}`}>
                <PortfolioCard
                key={project.id}
                {...project}
                index={index}
              />
              </Link>
              
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-[#319198]/50 rounded-3xl p-12">
            <h3 className="text-white mb-6 text-2xl font-bold">Ready to Start Your Project?</h3>
            <p className="text-white mb-8 text-lg">
              Let's create something amazing together. Get your free consultation today.
            </p>
            <Link href="quote"
              className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
