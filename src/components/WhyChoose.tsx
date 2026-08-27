import { Gem, Palette, Layers, Store } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './Reveal';

const points = [
  {
    number: '01',
    title: 'Quality',
    description: 'Professional finishing and attention to detail in every project.',
    icon: Gem,
  },
  {
    number: '02',
    title: 'Creative',
    description: 'Visual solutions designed around your brand and space.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Versatile',
    description: 'From banners to complete advertising solutions under one roof.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Business Focused',
    description: 'Solutions created for shops, businesses, offices and commercial spaces.',
    icon: Store,
  },
];

export function WhyChoose() {
  return (
    <section className="section-py bg-ink-900/40">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow mb-4">
                <span className="h-px w-8 bg-accent-400" />
                Why VUA Digitals
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg text-white">Built to be seen.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede mt-5 max-w-md">
                Every project we take on is engineered for one thing — making your brand impossible
                to ignore.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2" stagger={0.08}>
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <StaggerItem key={point.number} className="h-full">
                    <div className="group h-full bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-800 sm:p-8">
                      <div className="flex items-center justify-between">
                        <Icon className="h-7 w-7 text-accent-400" strokeWidth={1.5} />
                        <span className="text-3xl font-extrabold tabular-nums text-white/15 transition-colors group-hover:text-accent-400/40">
                          {point.number}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-white">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-300">{point.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
