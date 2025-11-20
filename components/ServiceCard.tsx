import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

export function ServiceCard({ icon: Icon, title, description, features, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-linear-to-br from-[#319198]/50 to-[#319198]/95 rounded-xl flex items-center justify-center  mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-white/60" size={28} />
      </div>
      <h4 className="text-gray-900 mb-3 text-lg font-medium">{title}</h4>
      <p className="text-gray-600 mb-4 text-sm font-medium">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
              <span className="text-primary-600 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
