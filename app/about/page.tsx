'use client';

import { Target, Eye } from 'lucide-react';
import { TeamMember } from '@/components/TeamMember';
import { motion } from 'framer-motion';
import { ProcessStep } from '@/components/ProcessStep';
import Link from 'next/link';
import { team, values, process } from '@/Data/Data';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-cyan-400 text-sm font-medium mono mb-4 block">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Digital <span className="gradient-text">Excellence</span> Since 2019
            </h1>
            <p className="text-gray-400 text-lg">
              We're a team of passionate designers and developers dedicated to creating exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Our Team"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Target className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To empower businesses with high-quality web solutions that enhance their online presence and drive measurable results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Eye className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To be the leading web development agency known for innovation and transforming businesses through exceptional digital experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cyan-400 text-sm font-medium mono mb-4 block">
              OUR VALUES
            </span>
            <h2 className="text-4xl font-bold text-white">
              What <span className="gradient-text">Drives</span> Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <value.icon className="text-cyan-400" size={32} />
                </div>
                <h5 className="text-white font-semibold text-lg mb-2">{value.title}</h5>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cyan-400 text-sm font-medium mono mb-4 block">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold text-white">
              How We <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {process.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cyan-400 text-sm font-medium mono mb-4 block">
              OUR TEAM
            </span>
            <h2 className="text-4xl font-bold text-white">
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
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
                <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</h2>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Work <span className="gradient-text">Together</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Ready to take your digital presence to the next level?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote">
                  <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all duration-300 glow-primary">
                    Get a Quote
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
