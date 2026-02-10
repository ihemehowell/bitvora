import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageFallBack';
import { StaticImageData } from 'next/image';

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string | StaticImageData;
  index: number;
  href: string;
}

export function PortfolioCard({ 
  id, 
  title, 
  category, 
  tags, 
  image, 
  index,
  href 
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
        <ImageWithFallback
          src={typeof image === 'string' ? image : image.src}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-300 text-sm font-medium">{category}</span>
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <h4 className="text-white text-lg font-semibold">{title}</h4>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4">
        <h5 className="text-white font-medium mb-2">{title}</h5>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
