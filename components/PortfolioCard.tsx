import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageFallBack';

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  index?: number;
}

export function PortfolioCard({ id, title, category, tags, image, index = 0}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-4/3">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#319198]/80 via-[#319198]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-[#319198]/60">{category}</span>
              <ExternalLink size={16} />
            </div>
            <h4 className="text-white mb-2">{title}</h4>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="text-[#319198]/60 mb-2">{title}</h5>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#319198]/5 text-[#319198]/60 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
