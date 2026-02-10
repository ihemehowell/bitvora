'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Globe, ShoppingCart, FileText, DollarSign, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { projectTypes, budgetRanges, timelines } from '@/Data/Data';
import emailjs from '@emailjs/browser';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    const templateParams = {
      projectType: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      description: formData.description,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => setSubmitted(true))
    .catch((err) => console.error('Failed to send quote request', err));
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center px-6"
        >
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-cyan-400" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h2>
          <p className="text-gray-400 text-lg mb-8">
            Thank you! We'll get back to you within 24 hours.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h5 className="text-white font-semibold mb-4">What happens next?</h5>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-sm font-medium">1</span>
                </div>
                <div>
                  <h6 className="text-white mb-1">Review</h6>
                  <p className="text-gray-400 text-sm">Our team reviews your requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-sm font-medium">2</span>
                </div>
                <div>
                  <h6 className="text-white mb-1">Quote Preparation</h6>
                  <p className="text-gray-400 text-sm">We prepare a detailed proposal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-sm font-medium">3</span>
                </div>
                <div>
                  <h6 className="text-white mb-1">Consultation Call</h6>
                  <p className="text-gray-400 text-sm">We'll schedule a call to discuss</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-colors">
                Back to Home
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors">
                View Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-cyan-400 text-sm font-medium mono mb-4 block">
              GET A QUOTE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Tell us about your project and we'll provide you with a detailed quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    s <= step ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-500'
                  }`}
                >
                  {s < step ? <Check size={20} /> : s}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm font-medium text-gray-400">
              <span>Type</span>
              <span>Budget</span>
              <span>Timeline</span>
              <span>Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 rounded-2xl border border-white/10"
            >
              {/* Step 1: Project Type */}
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">What type of project?</h3>
                  <p className="text-gray-400 mb-8">Select the option that best describes your project</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => updateFormData('projectType', type.id)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          formData.projectType === type.id
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <type.icon
                          className={`mb-4 ${formData.projectType === type.id ? 'text-cyan-400' : 'text-gray-400'}`}
                          size={32}
                        />
                        <h5 className="text-white font-semibold mb-2">{type.title}</h5>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Budget */}
              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">What's your budget?</h3>
                  <p className="text-gray-400 mb-8">This helps us tailor our proposal</p>

                  <div className="space-y-3">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.id}
                        onClick={() => updateFormData('budget', budget.value)}
                        className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                          formData.budget === budget.value
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <DollarSign
                            className={formData.budget === budget.value ? 'text-cyan-400' : 'text-gray-400'}
                            size={24}
                          />
                          <span className="text-white">{budget.label}</span>
                        </div>
                        {formData.budget === budget.value && (
                          <Check className="text-cyan-400" size={24} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">When do you need it?</h3>
                  <p className="text-gray-400 mb-8">Choose your preferred timeline</p>

                  <div className="space-y-3">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline.id}
                        onClick={() => updateFormData('timeline', timeline.value)}
                        className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                          formData.timeline === timeline.value
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <Calendar
                            className={formData.timeline === timeline.value ? 'text-cyan-400' : 'text-gray-400'}
                            size={24}
                          />
                          <span className="text-white">{timeline.label}</span>
                        </div>
                        {formData.timeline === timeline.value && (
                          <Check className="text-cyan-400" size={24} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Description */}
              {step === 4 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tell us about your project</h3>
                  <p className="text-gray-400 mb-8">We need a few more details</p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="mt-2 bg-white/5 border-white/10 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-300">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateFormData('company', e.target.value)}
                          placeholder="Company Name"
                          className="mt-2 bg-white/5 border-white/10 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="mt-2 bg-white/5 border-white/10 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="mt-2 bg-white/5 border-white/10 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-gray-300">Project Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        placeholder="Describe your project..."
                        required
                        rows={6}
                        className="mt-2 bg-white/5 border-white/10 text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                    step === 1
                      ? 'text-gray-600 cursor-not-allowed'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <ChevronLeft size={20} />
                  Back
                </button>

                {step < totalSteps ? (
                  <button
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !formData.projectType) ||
                      (step === 2 && !formData.budget) ||
                      (step === 3 && !formData.timeline)
                    }
                    className="flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.description}
                    className="flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Request
                    <Send size={20} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
