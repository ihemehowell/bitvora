'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { contactInfo, businessHours } from '@/Data/Data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => setSubmitted(true))
    .catch((err) => console.error('Failed to send contact message', err));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Have a project in mind? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl border border-foreground">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-cyan-400" size={28} />
                    </div>
                    <h4 className="text-foreground text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-gray-400">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="mt-2 bg-white/5 border-foreground text-foreground"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="mt-2 bg-white/5 border-foreground text-foreground"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 902-123-4567"
                        className="mt-2 bg-white/5 border-foreground text-foreground"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                        className="mt-2 bg-white/5 border-foreground text-foreground resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-foreground font-medium rounded-xl transition-all duration-300 glow-primary flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Contact Information</h3>
                <p className="text-gray-400 text-lg">
                  Reach out to us through any channel
                </p>
              </motion.div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-foreground hover:text-gray-600 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h6 className="text-foreground font-medium">{item.title}</h6>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-xl bg-background border border-foreground"
              >
                <h4 className="text-foreground font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
            <div className="absolute inset-0 bg-primary/80 rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground/70 mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-8">Get a detailed quote for your project</p>
              <Link href="/quote">
                <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-foreground font-semibold rounded-xl transition-all duration-300 glow-primary">
                  Request a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
