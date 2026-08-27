import { ArrowUpRight } from 'lucide-react';
import { SmartImage } from './SmartImage';
import { Stagger, StaggerItem } from './Reveal';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  onEnquire: () => void;
}

export function ServiceCard({ service, onEnquire }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <StaggerItem className="group h-full">
      <button
        onClick={onEnquire}
        className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-ink-900 text-left ring-1 ring-inset ring-white/10 transition-all duration-500 ease-smooth hover:ring-accent-400/50 focus-visible:ring-2 focus-visible:ring-accent-400"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <SmartImage
            src={service.image}
            alt={service.alt}
            className="h-full w-full transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-md bg-ink-950/70 px-2 py-1 text-xs font-bold tabular-nums text-accent-400 backdrop-blur">
            {service.number}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center gap-2.5">
            <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.5} />
            <h3 className="text-base font-bold leading-tight text-white">{service.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-ink-300">{service.description}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors group-hover:text-accent-400">
            Enquire
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </button>
    </StaggerItem>
  );
}
