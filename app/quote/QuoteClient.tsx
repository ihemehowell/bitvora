'use client';

import { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Wallet, Calendar, Send, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { projectTypes, budgetRanges, timelines, whatsappLink } from '@/Data/Data';
import emailjs from '@emailjs/browser';

const DRAFT_KEY = 'bitvora-quote-draft';
const STEP_LABELS = ['Type', 'Budget', 'Timeline', 'Details'];

export default function QuoteClient() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
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
  const handleNext = () => { if (step < totalSteps) setStep(step + 1); };
  const handleBack = () => { if (step > 1) setStep(step - 1); };
  const updateFormData = (field: string, value: string) => setFormData({ ...formData, [field]: value });

  // Restore an unfinished request (e.g. after a refresh or navigating away).
  // Done after mount, not in useState's initializer, so the server render matches.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY);
      if (saved) {
        const { step: savedStep, formData: savedData } = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from sessionStorage
        setFormData((prev) => ({ ...prev, ...savedData }));
        if (savedStep >= 1 && savedStep <= totalSteps) setStep(savedStep);
      }
    } catch { /* storage unavailable — start fresh */ }
  }, []);

  useEffect(() => {
    if (submitted) return;
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ step, formData }));
    } catch { /* ignore */ }
  }, [step, formData, submitted]);

  const handleSubmit = () => {
    setSending(true);
    setError(false);
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
        .then(() => {
          setSubmitted(true);
          try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
        })
        .catch((err) => {
          console.error('Failed to send quote request', err);
          setError(true);
        })
        .finally(() => setSending(false));
  };

  if (submitted) {
    return (
        <div className="min-h-screen flex items-center justify-center py-20">
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center px-6"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Quote Request Submitted!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you! We&apos;ll get back to you within 24 hours.
            </p>

            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h5 className="text-foreground font-semibold mb-4">What happens next?</h5>
              <div className="space-y-4 text-left">
                {[
                  { n: 1, title: 'Review', desc: 'Our team reviews your requirements' },
                  { n: 2, title: 'Quote Preparation', desc: 'We prepare a detailed proposal' },
                  { n: 3, title: 'Consultation Call', desc: "We'll schedule a call to discuss" },
                ].map(({ n, title, desc }) => (
                    <div key={n} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-medium">{n}</span>
                      </div>
                      <div>
                        <h6 className="text-foreground font-medium mb-1">{title}</h6>
                        <p className="text-muted-foreground text-sm">{desc}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-colors">
                Back to Home
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-accent/80 text-foreground rounded-xl border border-border transition-colors">
                View Portfolio
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
              <span className="text-primary text-sm font-medium mono mb-4 block">GET A QUOTE</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Start Your <span className="gradient-text">Project</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Tell us about your project and we&apos;ll provide you with a detailed quote
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ol className="relative flex items-start justify-between">
                {/* track */}
                <div className="absolute top-5 left-5 right-5 h-0.5 bg-accent" aria-hidden />
                <div
                    className="absolute top-5 left-5 h-0.5 bg-primary transition-all duration-500"
                    style={{ width: `calc((100% - 2.5rem) * ${(step - 1) / (totalSteps - 1)})` }}
                    aria-hidden
                />
                {STEP_LABELS.map((label, i) => {
                  const s = i + 1;
                  const done = s < step;
                  return (
                      <li key={label} className="relative flex flex-col items-center gap-2">
                        <button
                            type="button"
                            onClick={() => done && setStep(s)}
                            disabled={!done}
                            aria-current={s === step ? 'step' : undefined}
                            aria-label={`Step ${s}: ${label}${done ? ' (completed, click to edit)' : ''}`}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                                s <= step
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-accent text-muted-foreground'
                            } ${done ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                        >
                          {done ? <Check size={20} /> : s}
                        </button>
                        <span className={`text-sm font-medium ${s === step ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
                      </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 rounded-2xl border border-border bg-card"
              >

                {/* Step 1 */}
                {step === 1 && (
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">What type of project?</h3>
                      <p className="text-muted-foreground mb-8">Select the option that best describes your project</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {projectTypes.map((type) => (
                            <button
                                key={type.id}
                                type="button"
                                aria-pressed={formData.projectType === type.id}
                                onClick={() => updateFormData('projectType', type.id)}
                                className={`p-6 rounded-xl border-2 transition-all text-left ${
                                    formData.projectType === type.id
                                        ? 'border-primary bg-primary/10'
                                        : 'border-border hover:border-primary/40'
                                }`}
                            >
                              <type.icon
                                  className={`mb-4 ${formData.projectType === type.id ? 'text-primary' : 'text-muted-foreground'}`}
                                  size={32}
                              />
                              <h5 className="text-foreground font-semibold mb-2">{type.title}</h5>
                              <p className="text-muted-foreground text-sm">{type.description}</p>
                            </button>
                        ))}
                      </div>
                    </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">What&apos;s your budget?</h3>
                      <p className="text-muted-foreground mb-8">This helps us tailor our proposal</p>
                      <div className="space-y-3">
                        {budgetRanges.map((budget) => (
                            <button
                                key={budget.id}
                                type="button"
                                aria-pressed={formData.budget === budget.value}
                                onClick={() => updateFormData('budget', budget.value)}
                                className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                                    formData.budget === budget.value
                                        ? 'border-primary bg-primary/10'
                                        : 'border-border hover:border-primary/40'
                                }`}
                            >
                              <div className="flex items-center gap-4">
                                <Wallet
                                    className={formData.budget === budget.value ? 'text-primary' : 'text-muted-foreground'}
                                    size={24}
                                />
                                <span className="text-foreground">{budget.label}</span>
                              </div>
                              {formData.budget === budget.value && <Check className="text-primary" size={24} />}
                            </button>
                        ))}
                      </div>
                    </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">When do you need it?</h3>
                      <p className="text-muted-foreground mb-8">Choose your preferred timeline</p>
                      <div className="space-y-3">
                        {timelines.map((timeline) => (
                            <button
                                key={timeline.id}
                                type="button"
                                aria-pressed={formData.timeline === timeline.value}
                                onClick={() => updateFormData('timeline', timeline.value)}
                                className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                                    formData.timeline === timeline.value
                                        ? 'border-primary bg-primary/10'
                                        : 'border-border hover:border-primary/40'
                                }`}
                            >
                              <div className="flex items-center gap-4">
                                <Calendar
                                    className={formData.timeline === timeline.value ? 'text-primary' : 'text-muted-foreground'}
                                    size={24}
                                />
                                <span className="text-foreground">{timeline.label}</span>
                              </div>
                              {formData.timeline === timeline.value && <Check className="text-primary" size={24} />}
                            </button>
                        ))}
                      </div>
                    </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Tell us about your project</h3>
                      <p className="text-muted-foreground mb-8">We need a few more details</p>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="text-muted-foreground">Full Name *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => updateFormData('name', e.target.value)}
                                placeholder="Your name"
                                required
                                className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company" className="text-muted-foreground">Company</Label>
                            <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) => updateFormData('company', e.target.value)}
                                placeholder="Company Name"
                                className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="email" className="text-muted-foreground">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData('email', e.target.value)}
                                placeholder="you@company.com"
                                required
                                className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-muted-foreground">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => updateFormData('phone', e.target.value)}
                                placeholder="+234 801 234 5678"
                                className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="description" className="text-muted-foreground">Project Description *</Label>
                          <Textarea
                              id="description"
                              value={formData.description}
                              onChange={(e) => updateFormData('description', e.target.value)}
                              placeholder="Describe your project..."
                              required
                              rows={6}
                              className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </div>
                      </div>
                    </div>
                )}

                {error && (
                    <div role="alert" className="mt-8 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm">
                      <AlertCircle size={18} className="text-destructive shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        We couldn&apos;t send your request (your answers are saved). Please try again, or{' '}
                        <a
                            href={whatsappLink(`Quote request: ${formData.projectType}, budget ${formData.budget}, timeline ${formData.timeline}. ${formData.description}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline underline-offset-2"
                        >
                          send it on WhatsApp
                        </a>.
                      </p>
                    </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                  <button
                      type="button"
                      onClick={handleBack}
                      disabled={step === 1}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
                          step === 1
                              ? 'text-muted-foreground/30 cursor-not-allowed'
                              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                  >
                    <ChevronLeft size={20} />
                    Back
                  </button>

                  {step < totalSteps ? (
                      <button
                          type="button"
                          onClick={handleNext}
                          disabled={
                              (step === 1 && !formData.projectType) ||
                              (step === 2 && !formData.budget) ||
                              (step === 3 && !formData.timeline)
                          }
                          className="flex items-center gap-2 px-8 py-3 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                        <ChevronRight size={20} />
                      </button>
                  ) : (
                      <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={sending || !formData.name || !formData.email || !formData.description}
                          className="flex items-center gap-2 px-8 py-3 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sending ? (
                            <>Sending <Loader2 size={20} className="animate-spin" /></>
                        ) : (
                            <>Submit Request <Send size={20} /></>
                        )}
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