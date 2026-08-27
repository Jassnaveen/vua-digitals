import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollLock } from '@/hooks/useScrollLock';

export interface LightboxItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  useScrollLock(open);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, prev, next]);

  if (!open || index === null) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
        aria-label="Close viewer"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20 sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20 sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image */}
      <figure
        className="relative max-h-full max-w-5xl overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[78vh] w-auto object-contain"
          loading="eager"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/90 to-transparent px-5 pb-4 pt-10">
          <div>
            <p className="text-sm font-bold text-white">{item.title}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">{item.category}</p>
          </div>
          <span className="text-xs font-semibold tabular-nums text-ink-300">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
