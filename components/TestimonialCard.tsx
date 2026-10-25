import { Star } from 'lucide-react';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { ImageWithFallback } from './figma/ImageFallBack';
import type { Testimonial } from '@/Data/Data';

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

export function TestimonialCard({ name, role, company, content, avatar, rating, date, source }: Testimonial) {
  const byline = [role, company].filter(Boolean).join(', ');

  return (
    <figure className="h-full flex flex-col gap-5 p-7 rounded-2xl border border-border bg-card text-card-foreground">
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              size={18}
              aria-hidden
              className={idx < rating ? 'fill-[var(--brand-orange)] text-[var(--brand-orange)]' : 'text-muted-foreground/30'}
            />
          ))}
        </div>
        {source === 'google' && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <IconBrandGoogleFilled size={14} aria-hidden />
            Google review
          </span>
        )}
      </div>

      <blockquote className="text-foreground/90 leading-relaxed flex-1">&ldquo;{content}&rdquo;</blockquote>

      <figcaption className="flex items-center gap-3">
        {avatar ? (
          <ImageWithFallback
            src={avatar}
            alt=""
            className="w-11 h-11 rounded-full object-cover border border-border"
          />
        ) : (
          <span
            aria-hidden
            className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold font-heading"
          >
            {initials(name)}
          </span>
        )}
        <div>
          <p className="text-foreground font-semibold">{name}</p>
          {(byline || date) && (
            <p className="text-sm text-muted-foreground">{[byline, date].filter(Boolean).join(' · ')}</p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
