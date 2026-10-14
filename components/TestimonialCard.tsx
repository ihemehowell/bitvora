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
    <div className="glass p-8 rounded-2xl border border-border mx-4">
      {/* Rating */}
      <div className="flex gap-1 mb-4" role="img" aria-label={`Rated ${rating} out of 5`}>
        {[...Array(5)].map((_, idx) => (
          <Star
            key={idx}
            size={18}
            className={idx < rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-foreground/85 mb-6 leading-relaxed">&ldquo;{content}&rdquo;</blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-border"
        />
        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role} at <span className="text-primary">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
