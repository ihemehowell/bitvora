import Link from "next/link";
import { ArrowRight, LucideIcon, Check } from "lucide-react";

interface ServiceDetailPageProps {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  icon: LucideIcon;
  features: string[];
  process: { title: string; description: string }[];
  faq?: { question: string; answer: string }[];
}

export function ServiceDetailPage({
  eyebrow,
  title,
  highlight,
  intro,
  icon: Icon,
  features,
  process,
  faq,
}: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="dotted-grid absolute inset-0 pointer-events-none opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary text-sm font-medium mono mb-3 block tracking-widest uppercase">
            {eyebrow}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-2xl">
              {title} <span className="text-primary">{highlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-sm md:text-right">{intro}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Icon size={22} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">What&apos;s included</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <Check size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">How we work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-primary text-sm font-medium mono block mb-2">
                  Step {i + 1}
                </span>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Common questions</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-foreground mb-1">{item.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-border bg-card relative overflow-hidden p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground max-w-md">
                Tell us about your project and we&apos;ll take it from there.
              </p>
            </div>
            <div className="relative shrink-0 flex items-center flex-wrap gap-3">
              <Link href="/quote">
                <button className="inline-flex items-center gap-2 py-3 px-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-xl transition-all duration-300">
                  Request a quote <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
