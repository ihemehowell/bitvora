import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  index?: number;
  onGetQuote: () => void;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  index = 0,
  onGetQuote,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white p-8 rounded-2xl border-2 ${
        popular ? 'border-primary-600 shadow-xl' : 'border-gray-100'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      
      <h4 className="text-gray-900 mb-2 text-lg font-semibold">{name}</h4>
      <p className="text-gray-600 text-sm mb-6 text-lg font-semibold">{description}</p>
      
      <div className="mb-6">
        <span className="text-gray-900">{price}</span>
        <span className="text-gray-500 text-sm ml-2">{period}</span>
      </div>

      <button
        onClick={onGetQuote}
        className={`w-full py-3 rounded-lg mb-8 transition-colors ${
          popular
            ? 'bg-[#319198] text-white hover:bg-[#319198]/80'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>

      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 text-sm font-semibold">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
