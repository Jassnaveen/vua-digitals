import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Lightbox, type LightboxItem } from './Lightbox';

interface GalleryProps {
  id: string;
  heading: string;
  subheading: string;
  filters: Array<'All' | string>;
  items: LightboxItem[];
}

export function Gallery({ id, heading, subheading, filters, items }: GalleryProps) {
  const [active, setActive] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((it) => it.category === active)),
    [active, items]
  );

  return (
    <section id={id} className="section-py bg-ink-950">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-8 bg-accent-400" />
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg text-white">{heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mx-auto mt-5 max-w-2xl">{subheading}</p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active === f
                    ? 'bg-accent-400 text-ink-950'
                    : 'bg-ink-900 text-ink-300 ring-1 ring-inset ring-white/10 hover:text-white hover:ring-white/30'
                }`}
                aria-pressed={active === f}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-xl ring-1 ring-inset ring-white/10 focus-visible:ring-2 focus-visible:ring-accent-400 ${
                  i % 5 === 0 ? 'col-span-2 row-span-2 sm:col-span-2' : ''
                }`}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105 ${
                    i % 5 === 0 ? 'aspect-square sm:aspect-[4/3]' : 'aspect-square'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-300">
                    {item.category}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-white">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
