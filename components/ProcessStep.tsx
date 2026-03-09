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
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-foreground/50 flex-shrink-0">
          <Icon size={24} />
        </div>
        {index < 4 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent mt-4" />
        )}
      </div>
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-cyan-400 text-sm font-medium mono">Step {number}</span>
        </div>
        <h5 className="text-foreground/70 font-semibold text-lg mb-2">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
