'use client';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Globe, ShoppingCart, FileText, DollarSign, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { projectTypes, budgetRanges, timelines } from '@/Data/Data';



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
    setSubmitted(true);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-primary-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600" size={40} />
            </div>
            <h2 className="text-gray-900 mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 text-lg mb-8">
              Thank you for your interest! We've received your project details and will get back to you within 24 hours with a detailed quote.
            </p>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-8">
              <h5 className="text-gray-900 mb-4">What happens next?</h5>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-600">1</span>
                  </div>
                  <div>
                    <h6 className="text-gray-900 mb-1">Review</h6>
                    <p className="text-gray-600 text-sm">Our team reviews your requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-600">2</span>
                  </div>
                  <div>
                    <h6 className="text-gray-900 mb-1">Quote Preparation</h6>
                    <p className="text-gray-600 text-sm">We prepare a detailed proposal and quote</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-600">3</span>
                  </div>
                  <div>
                    <h6 className="text-gray-900 mb-1">Consultation Call</h6>
                    <p className="text-gray-600 text-sm">We'll schedule a call to discuss your project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">

                <Link href="/">
                <button
                
                className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/80 transition-colors"
              >
                Back to Home
              </button>
                </Link>
              
              <Link href="/portfolio">
              <button
                className="px-8 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200"
              >
                View Portfolio
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-linear-to-br from-gray-50 via-white to-primary-50">
      {/* Header */}
      <section className="py-20 max-md:py-12 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 mb-4 text-4xl font-bold">
              Request a <span className="bg-[#319198] bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Tell us about your project and we'll provide you with a detailed quote
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6  w-full">
              {[1, 2, 3, 4].map((s) => {
                const active = s <= step;

                return (
                  <div key={s} className="flex items-center justify-between  ">
                    {/* Step Circle */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors  ${
                        active ? "bg-gray-200 text-primary" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {s < step ? <Check size={20} /> : s}
                    </div>

                    {/* Line Between Steps */}
                    
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-sm font-medium text-gray-600">
              <span>Project Type</span>
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
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
              {/* Step 1: Project Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-gray-900 mb-2 text-2xl font-bold">What type of project do you need?</h3>
                  <p className="text-gray-600 mb-8 text-lg">Select the option that best describes your project</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => updateFormData('projectType', type.id)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${formData.projectType === type.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <type.icon
                          className={`mb-4 ${formData.projectType === type.id
                              ? 'text-primary-600'
                              : 'text-gray-400'
                            }`}
                          size={32}
                        />
                        <h5 className="text-gray-900 mb-2 text-lg font-semibold">{type.title}</h5>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Budget */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-gray-900 mb-2 text-lg font-semibold">What's your budget range?</h3>
                  <p className="text-gray-600 mb-8 text-sm font-medium">This helps us tailor our proposal to your needs</p>

                  <div className="space-y-3">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.id}
                        onClick={() => updateFormData('budget', budget.value)}
                        className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between ${formData.budget === budget.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <DollarSign
                            className={
                              formData.budget === budget.value
                                ? 'text-primary-600'
                                : 'text-gray-400'
                            }
                            size={24}
                          />
                          <span className="text-gray-900">{budget.label}</span>
                        </div>
                        {formData.budget === budget.value && (
                          <Check className="text-primary-600" size={24} />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Timeline */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-gray-900 mb-2 text-2xl font-bold">When do you need it completed?</h3>
                  <p className="text-gray-600 mb-8 text-lg">Choose your preferred timeline</p>

                  <div className="space-y-3">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline.id}
                        onClick={() => updateFormData('timeline', timeline.value)}
                        className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between ${formData.timeline === timeline.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <Calendar
                            className={
                              formData.timeline === timeline.value
                                ? 'text-primary-600'
                                : 'text-gray-400'
                            }
                            size={24}
                          />
                          <span className="text-gray-900">{timeline.label}</span>
                        </div>
                        {formData.timeline === timeline.value && (
                          <Check className="text-primary-600" size={24} />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact & Description */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-gray-900 mb-2 text-2xl font-bold">Tell us about your project</h3>
                  <p className="text-gray-600 mb-8 text-lg">We need a few more details to prepare your quote</p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateFormData('company', e.target.value)}
                          placeholder="Company Name"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        placeholder="Describe your project, goals, target audience, and any specific requirements..."
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-colors ${step === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100'
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
                    className="px-8 py-3 bg-[#319198] text-gray-100 rounded-xl hover:bg-[#319198]/70 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.description}
                    className="px-8 py-3 bg-[#319198] text-white rounded-xl hover:bg-[#319198]/80 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Request
                    <Send size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
