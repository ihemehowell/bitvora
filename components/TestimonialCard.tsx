import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageFallBack';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, content, avatar, rating }: TestimonialCardProps) {
  return (
    <div className="glass p-8 rounded-2xl border border-white/10 mx-4">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            size={18}
            className={idx < rating ? 'fill-cyan-400 text-cyan-400' : 'text-white/30'}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 mb-6 italic leading-relaxed">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-white/20"
        />
        <div>
          <h6 className="text-white font-medium">{name}</h6>
          <p className="text-sm text-gray-500">
            {role} at <span className="text-cyan-400">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
