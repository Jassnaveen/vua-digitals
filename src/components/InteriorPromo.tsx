import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';
import { siteConfig } from '@/config/siteConfig';

interface InteriorPromoProps {
  onExplore: () => void;
}

const promoImage =
  'https://images.pexels.com/photos/34823913/pexels-photo-34823913.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function InteriorPromo({ onExplore }: InteriorPromoProps) {
  return (
    <section className="section-py bg-ink-950">
      <div className="container-px">
        <Reveal y={32}>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 ring-1 ring-inset ring-white/10">
            <div className="grid lg:grid-cols-2">
              {/* Copy */}
              <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <span className="eyebrow mb-5 text-signal-400">
                  <span className="h-px w-8 bg-signal-400" />
                  Another division
                </span>
                <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tightest text-white sm:text-4xl lg:text-5xl">
                  From outdoor branding
                  <br />
                  to complete <span className="text-signal-400">interiors.</span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
                  Extend your project beyond signage with interior, partition, flooring, wallpaper
                  and custom decor solutions.
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {siteConfig.interiorDivision.name}
                </p>
                <button
                  onClick={onExplore}
                  className="btn-light mt-8 w-fit group"
                >
                  Explore VUA Interiors
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Image */}
              <div className="relative min-h-[20rem] lg:min-h-full">
                <motion.div
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <SmartImage
                    src={promoImage}
                    alt="Contemporary office reception with wood and glass interior design"
                    className="h-full w-full"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/30 to-transparent lg:from-ink-900/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
