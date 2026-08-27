import { Reveal } from './Reveal';

const trustPoints = [
  { label: 'Quality Printing', desc: 'High-resolution large-format output' },
  { label: 'Creative Signage', desc: 'Designed around your brand' },
  { label: 'Fast Turnaround', desc: 'Produced and installed quickly' },
  { label: 'Custom Solutions', desc: 'Built to your exact requirement' },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900/50">
      <div className="container-px">
        <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <Reveal
              key={point.label}
              delay={i * 0.08}
              className="flex items-center gap-4 px-2 py-6 sm:px-6 lg:py-8"
            >
              <span className="text-3xl font-extrabold tabular-nums text-accent-400/30 sm:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">{point.label}</p>
                <p className="mt-0.5 text-xs text-ink-400 sm:text-sm">{point.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
