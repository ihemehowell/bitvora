import {Github, Linkedin, Twitter} from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageFallBack';
import { StaticImageData } from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData | string;
  index?: number;
}

export function TeamMember({ name, role, bio, image, index = 0 }: TeamMemberProps) {
  const imageSrc = typeof image === 'string' ? image : image.src;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-2xl border border-foreground/40 bg-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <div className="aspect-square relative overflow-hidden rounded-xl mb-4 bg-white/10">
        <ImageWithFallback
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h5 className="text-foreground/70 font-semibold mb-1">{name}</h5>
      <p className="text-cyan-400 text-sm mb-3">{role}</p>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{bio}</p>
      <div className="flex gap-3">
        <a
          href="#"
          className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center  hover:text-cyan-400 transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:text-cyan-400 transition-colors"
        >
          <Twitter size={18} />
        </a>
        <a
            href="#"
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center  hover:text-cyan-400 transition-colors"
        >
          <Github size={18} />
        </a>
      </div>
    </motion.div>
  );
}
