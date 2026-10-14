'use client';

import { useState } from 'react';
import { Send, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { contactInfo, businessHours, whatsappLink } from '@/Data/Data';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass = 'mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => setStatus('sent'))
    .catch((err) => {
      console.error('Failed to send contact message', err);
      setStatus('error');
    });
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
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium mono mb-4 block">
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? We&#39;d love to hear from you.
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
              <div className="p-8 rounded-2xl border border-border bg-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {status === 'sent' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                    role="status"
                  >
                    <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-primary" size={28} />
                    </div>
                    <p className="text-foreground text-xl font-semibold mb-2">Message Sent!</p>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We&#39;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 801 234 5678"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <div role="alert" className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm">
                        <AlertCircle size={18} className="text-destructive shrink-0 mt-0.5" />
                        <p className="text-foreground">
                          We couldn&#39;t send your message. Please try again, or{' '}
                          <a href={whatsappLink(formData.message || undefined)} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                            message us on WhatsApp
                          </a>.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 glow-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-wait"
                    >
                      {status === 'sending' ? (
                        <>Sending <Loader2 size={18} className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  Reach out to us through any channel
                </p>
              </motion.div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const external = item.link.startsWith('http');
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{item.title}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-foreground font-semibold mb-4">Business Hours</h3>
                <dl className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <dt className="text-muted-foreground">{schedule.day}</dt>
                      <dd className="text-foreground">{schedule.hours}</dd>
                    </div>
                  ))}
                </dl>
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
            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-primary/30 bg-primary/10"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8">Get a detailed quote for your project</p>
              <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 glow-primary">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
