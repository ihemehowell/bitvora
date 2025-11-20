import { Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageFallBack';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
  index?: number;
}

export function TeamMember({ name, role, bio, image, index = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image.src}         
          alt={image.alt}
          className="w-full h-[800px] object-cover position-center "
        />
      </div>
      <div className="p-6">
        <h5 className="text-gray-900 mb-1">{name}</h5>
        <p className="text-primary-600 text-sm mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
