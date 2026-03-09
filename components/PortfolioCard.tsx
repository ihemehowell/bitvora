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

export function PortfolioCard({ id, title, category, tags, image, index, href }: PortfolioCardProps) {
  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
          <ImageWithFallback
              src={typeof image === 'string' ? image : image.src}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary text-sm font-medium">{category}</span>
                <ExternalLink size={18} className="text-primary" />
              </div>
              <h4 className="text-foreground text-lg font-semibold">{title}</h4>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="text-foreground font-medium mb-2">{title}</h5>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
                <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
              {tag}
            </span>
            ))}
          </div>
        </div>
      </motion.div>
  );
}