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
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[var(--tech-secondary)] flex items-center justify-center text-primary-foreground flex-shrink-0">
          <Icon size={24} />
        </div>
        {index < 4 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4" />
        )}
      </div>
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary text-sm font-medium mono">Step {number}</span>
        </div>
        <h5 className="text-foreground font-semibold text-lg mb-2">{title}</h5>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
