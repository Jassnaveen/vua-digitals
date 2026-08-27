import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SmartImage } from './SmartImage';

interface AboutProps {
  onTalk: () => void;
}

const aboutImage =
  'https://images.pexels.com/photos/5846280/pexels-photo-5846280.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function About({ onTalk }: AboutProps) {
  return (
    <section id="about" className="section-py bg-ink-900/40">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32}>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
              <SmartImage
                src={aboutImage}
                alt="Craftsman welding metal signage in a workshop"
                className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow mb-4">
                <span className="h-px w-8 bg-accent-400" />
                About VUA Digitals
              </span>
              <h2 className="heading-lg text-white">Your brand deserves to stand out.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                <p>
                  VUA DIGITALS is a digital printing, signage and advertising company built for
                  businesses that want to be seen. From commercial flex banners and illuminated LED
                  boards to vinyl branding and complete advertising solutions, we handle the full
                  process — design, production and installation.
                </p>
                <p>
                  We work with shops, offices, showrooms and commercial spaces to create visual
                  branding that is bold, professional and built to last. Every project is produced
                  in-house and finished with attention to detail.
                </p>
              </div>
              <button onClick={onTalk} className="btn-primary mt-8 group">
                Talk to VUA Digitals
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
