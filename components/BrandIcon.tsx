'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BrandIconProps {
  size?: number;
  className?: string;
}

/**
 * Renders the BitvoraTech icon mark, automatically swapping between the
 * light-background and dark-background variants based on the active theme.
 */
export function BrandIcon({ size = 36, className = '' }: BrandIconProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid a flash of the wrong variant before the theme is known client-side.
  if (!mounted) {
    return <div style={{ width: size, height: size }} className={className} />;
  }

  const src =
    resolvedTheme === 'dark' ? '/brand/icon-dark-bg.svg' : '/brand/icon-light-bg.svg';

  return (
    <Image
      src={src}
      alt="BitvoraTech"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}
