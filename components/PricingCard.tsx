import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  index?: number;
}

export function PricingCard({ name, price, period, description, features, popular = false, index = 0 }: PricingCardProps) {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative p-8 rounded-2xl border transition-all duration-300 group ${
              popular
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card hover:border-primary/30'
          }`}
      >
        {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary to-[var(--tech-secondary)] text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
            </div>
        )}

        <h4 className="text-foreground mb-2 text-lg font-semibold">{name}</h4>
        <p className="text-muted-foreground mb-6 text-sm">{description}</p>

        <div className="mb-6">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground text-sm ml-2">/ {period}</span>
        </div>

        <Link href="/quote">
          <button
              className={`w-full py-3 rounded-xl mb-8 transition-all duration-300 ${
                  popular
                      ? 'bg-primary hover:opacity-90 text-primary-foreground font-semibold'
                      : 'bg-accent hover:bg-accent/80 text-foreground'
              }`}
          >
            Get Started
          </button>
        </Link>

        <ul className="space-y-4">
          {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{feature}</span>
              </li>
          ))}
        </ul>
      </motion.div>
  );
}