import { MessageSquare, PenTool, Printer, Truck } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  { number: '01', title: 'Discuss', desc: 'Tell us what you need.', icon: MessageSquare },
  { number: '02', title: 'Design', desc: 'We develop the visual solution.', icon: PenTool },
  { number: '03', title: 'Produce', desc: 'We print, manufacture or install.', icon: Printer },
  { number: '04', title: 'Deliver', desc: 'Your finished branding is ready.', icon: Truck },
];

export function Process() {
  return (
    <section className="section-py bg-ink-950">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-8 bg-accent-400" />
              How we work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-lg text-white">A simple, clear process</h2>
          </Reveal>
        </div>

        {/* Desktop timeline */}
        <Reveal delay={0.1}>
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-px bg-white/10" />
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="relative">
                      <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 ring-1 ring-inset ring-accent-400/40">
                        <Icon className="h-6 w-6 text-accent-400" strokeWidth={1.5} />
                      </div>
                      <p className="mt-5 text-center text-xs font-semibold tabular-nums text-accent-400">
                        {step.number}
                      </p>
                      <h3 className="mt-1 text-center text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-1 text-center text-sm text-ink-300">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile vertical */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-8 pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={i * 0.06}>
                  <div className="relative">
                    <div className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 ring-4 ring-ink-950">
                      <Icon className="h-3.5 w-3.5 text-ink-950" strokeWidth={2} />
                    </div>
                    <p className="text-xs font-semibold tabular-nums text-accent-400">{step.number}</p>
                    <h3 className="mt-0.5 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-300">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
