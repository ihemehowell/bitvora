'use client'
import { Target, Eye } from 'lucide-react';
import { TeamMember } from '@/components/TeamMember';
import { motion } from 'framer-motion';
import { ProcessStep } from '@/components/ProcessStep';
import Link from 'next/link';
import { team, values, process } from '@/Data/Data';


export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-white to-primary-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-900 mb-6 text-3xl font-bold"
            >
              About <span className="bg-linear-to-br from-[#319198] to-[#319198]/80 bg-clip-text text-transparent text-3xl font-bold">Our Agency</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              We're a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Our Team"
                  className="w-full"
                />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Target className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To empower businesses of all sizes with high-quality web solutions that enhance their online presence, engage their audience, and drive measurable results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Eye className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To be the leading web development agency known for innovation, excellence, and transforming businesses through exceptional digital experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-gray-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-900 mb-4 text-3xl font-bold"
            >
              Our Core Values
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-linear-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-gray-400" size={32} />
                </div>
                <h5 className="text-gray-900 mb-3 text-lg font-bold">{value.title}</h5>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-900 mb-4 text-3xl font-bold"
            >
              Our Process
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {process.map((step, index) => (
              <ProcessStep  key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-900 mb-4 text-3xl font-bold"
            >
              Meet Our Team
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Talented professionals passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-br from-primary-600 to-primary-700 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '8+', label: 'Years Experience' },
              { number: '250+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-gray-900 text-3xl font-bold mb-2">{stat.number}</h2>
                <p className="text-gray-900">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="bg-[#01172F] rounded-3xl p-12 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-3xl font-bold mb-6"
            >
              Let's Work Together
            </motion.h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Ready to take your digital presence to the next level? Let's discuss your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="contact">
              <button
                className="px-8 py-4 bg-[#319198] text-white rounded-xl hover:bg-[#319198]/70 transition-colors"
              >
                Get in Touch
              </button>
              </Link>
              <Link href="portfolio">
              <button
                className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
              >
                View Our Work
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
