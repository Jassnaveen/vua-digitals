import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SmartImage } from './SmartImage';
import { siteConfig, whatsappLink } from '@/config/siteConfig';

interface HeroProps {
  onExploreWork: () => void;
  onQuote: () => void;
}

const heroImage =
  'https://images.pexels.com/photos/9574569/pexels-photo-9574569.jpeg?auto=compress&cs=tinysrgb&w=1600';

const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Hero({ onExploreWork, onQuote }: HeroProps) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink-950 pt-24 sm:pt-28 lg:pt-32">
      {/* Background grid + glows */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-24 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-signal-500/10 blur-[100px]"
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
              className="eyebrow mb-5"
            >
              <span className="h-px w-8 bg-accent-400" />
              {siteConfig.companyName}
            </motion.div>

            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-white"
            >
              We turn ideas
              <br />
              into <span className="text-accent-400">visible impact.</span>
            </motion.h1>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lede mt-6 max-w-xl"
            >
              From commercial flex banners and illuminated signage to premium vinyl branding and
              complete advertising solutions, we create visual experiences built to get noticed.
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
              <button onClick={onExploreWork} className="btn-outline group">
                Explore Our Work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center gap-5 text-sm text-ink-400"
            >
              <span className="h-4 w-px bg-white/15" />
              <span>Digital Printing · Signage · Advertising · Interiors</span>
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
              {/* Floating accent badge */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -left-3 top-8 z-10 hidden rounded-xl bg-ink-900/90 px-4 py-3 ring-1 ring-inset ring-white/10 backdrop-blur sm:block"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Large-format
                </p>
                <p className="text-sm font-bold text-white">Digital Printing</p>
              </motion.div>

              <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
                <SmartImage
                  src={heroImage}
                  alt="Professional large-format digital printing equipment in a studio"
                  loading="eager"
                  className="aspect-[4/5] w-full sm:aspect-[5/5] lg:aspect-[4/5] xl:aspect-[5/6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                    Printed · Installed · Noticed
                  </p>
                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    Visual branding for commercial spaces
                  </p>
                </div>
              </div>

              {/* Floating stat chip */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-4 -right-3 z-10 hidden rounded-xl bg-accent-400 px-4 py-3 text-ink-950 sm:block"
              >
                <p className="text-2xl font-extrabold leading-none">8+</p>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em]">Services</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
