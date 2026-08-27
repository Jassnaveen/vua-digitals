import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SmartImage } from './SmartImage';
import { siteConfig } from '@/config/siteConfig';

interface InteriorHeroProps {
  onQuote: () => void;
  onExplore: () => void;
}

const heroImage =
  'https://images.pexels.com/photos/34823910/pexels-photo-34823910.jpeg?auto=compress&cs=tinysrgb&w=1600';

const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function InteriorHero({ onQuote, onExplore }: InteriorHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-24 left-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-signal-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-px">
        <div className="grid items-center gap-10 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow mb-5 text-signal-400"
            >
              <span className="h-px w-8 bg-signal-400" />
              {siteConfig.interiorDivision.name}
            </motion.div>

            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-white"
            >
              Spaces designed
              <br />
              to make an <span className="text-signal-400">impression.</span>
            </motion.h1>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lede mt-6 max-w-xl"
            >
              Interior and decor solutions for commercial, residential and professional spaces —
              engineered and finished by the VUA DIGITALS team.
            </motion.p>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button onClick={onQuote} className="btn-primary group">
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button onClick={onExplore} className="btn-outline group">
                View Projects
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
                <SmartImage
                  src={heroImage}
                  alt="Stylish contemporary office interior with marble and wood finishes"
                  loading="eager"
                  className="aspect-[4/5] w-full sm:aspect-[5/5] lg:aspect-[4/5] xl:aspect-[5/6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-400">
                    Interior · Decor · Finish
                  </p>
                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    Complete interior transformations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
