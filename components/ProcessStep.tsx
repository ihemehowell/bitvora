import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function ProcessStep({ number, icon: Icon, title, description, index = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#319198] to-[#319198]/80 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
          <Icon size={28} />
        </div>
        {index < 4 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-[#319198]/80 to-transparent mt-4" />
        )}
      </div>
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary-600">Step {number}</span>
        </div>
        <h5 className="text-gray-900 mb-2">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
