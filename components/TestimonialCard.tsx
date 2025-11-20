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
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg mx-4">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            size={20}
            className={idx < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h6 className="text-gray-900">{name}</h6>
          <p className="text-sm text-gray-500">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
