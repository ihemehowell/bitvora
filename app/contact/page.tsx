'use client'
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@webflowagency.com',
      link: 'mailto:info@webflowagency.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 90112449545',
      link: 'tel:+23490112449545',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+234 90112449545',
      link: 'https://wa.me/+23490112449545',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '2 , Dacosta Street, Yaba Lagos',
      link: '#',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-900 mb-6 text-3xl font-bold"
            >
              Get in <span className="bg-gradient-to-br from-indigo-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-gray-900 mb-6 text-2xl font-bold">Send us a Message</h3>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={28} />
                    </div>
                    <h4 className="text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="mt-2"
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
                        className="mt-2"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-gray-900 mb-4 text-2xl font-bold">Contact Information</h3>
                <p className="text-gray-600 text-lg">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h6 className="text-gray-900 mb-1">{item.title}</h6>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl overflow-hidden h-64 bg-gray-200 flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                  <p className="text-gray-500">Map Location</p>
                  <p className="text-gray-400 text-sm">2, Dacosta Street, Yaba Lagos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gray-50 py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-center"
          >
            <h3 className="text-gray-900 mb-4 text-3xl font-bold">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Get a detailed quote for your project with our easy request form.
            </p>
            <button
              onClick={() => onNavigate('quote')}
              className="px-8 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors"
            >
              Request a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-white py-20 max-md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-gray-900 mb-4 text-3xl font-bold">Business Hours</h3>
              <p className="text-gray-600 text-lg">
                Our team is available during these hours
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
