import { Reveal, Stagger } from './Reveal';
import { ServiceCard } from './ServiceCard';
import { services as defaultServices } from '@/data/services';
import type { Service } from '@/data/services';

interface ServicesProps {
  onEnquire: () => void;
  items?: Service[];
  heading?: string;
  subheading?: string;
  eyebrow?: string;
}

export function Services({ onEnquire, items = defaultServices, heading = 'Complete visual branding solutions', subheading = 'Complete advertising and visual branding solutions for businesses, shops, offices and commercial spaces.', eyebrow = 'What we do' }: ServicesProps) {
  return (
    <section className="section-py bg-ink-950">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-8 bg-accent-400" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg text-white">{heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mx-auto mt-5 max-w-2xl">{subheading}</p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.06}>
          {items.map((service) => (
            <ServiceCard key={service.number} service={service} onEnquire={onEnquire} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
