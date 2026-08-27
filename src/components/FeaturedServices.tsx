import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';

interface FeaturedItem {
  id: string;
  label: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  alt: string;
}

interface FeaturedServicesProps {
  items: FeaturedItem[];
  onEnquire: () => void;
}

const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function FeaturedServices({ items, onEnquire }: FeaturedServicesProps) {
  return (
    <section className="section-py bg-ink-950">
      <div className="container-px">
        <div className="space-y-20 lg:space-y-28">
          {items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <Reveal className={reversed ? 'lg:order-2' : ''} y={32}>
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
                    <motion.div
                      initial={prefersReduced ? false : { scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <SmartImage
                        src={item.image}
                        alt={item.alt}
                        className="aspect-[4/3] w-full"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-md bg-ink-950/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 backdrop-blur">
                      {item.label}
                    </span>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal className={reversed ? 'lg:order-1' : ''} delay={0.1} y={24}>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                      {item.tagline}
                    </p>
                    <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tightest text-white sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-300 sm:text-lg">
                      {item.description}
                    </p>
                    <button onClick={onEnquire} className="btn-dark mt-7 group">
                      Enquire Now
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
