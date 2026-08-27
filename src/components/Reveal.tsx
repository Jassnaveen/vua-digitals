import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** translate distance in px */
  y?: number;
  as?: 'div' | 'section' | 'li' | 'span' | 'h2' | 'p';
}

/** Fades + slides content up once it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReducedMotion) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={false}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Wraps a list of <StaggerItem> children and reveals them one after another. */
export function Stagger({ children, className, delay = 0, stagger = 0.08 }: StaggerProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 24 }: { children: ReactNode; className?: string; y?: number }) {
  if (prefersReducedMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
