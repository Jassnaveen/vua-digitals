import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  /** aspect ratio class, e.g. 'aspect-[4/3]' */
  ratio?: string;
  sizes?: string;
}

/**
 * Image wrapper with a subtle fade-in + skeleton shimmer while loading.
 * Used everywhere imagery appears so swap-outs stay consistent.
 */
export function SmartImage({ src, alt, className = '', loading = 'lazy', ratio }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ink-800 ${ratio ?? ''} ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-ink-800" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-smooth ${
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-sm'
        }`}
      />
    </div>
  );
}
