import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig, whatsappLink, phoneLink, emailLink } from '@/config/siteConfig';
import type { Route } from '@/hooks/useRouter';

interface FooterProps {
  route: Route;
  navigate: (to: Route) => void;
  onSection: (id: string) => void;
}

const footerServices = [
  'Commercial Flex',
  'LED Boards',
  'Vinyl',
  'ACP',
  'Acrylic',
  'Interiors',
];

export function Footer({ route, navigate, onSection }: FooterProps) {
  const goSection = (id: string) => {
    if (route !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-px py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo onClick={() => goSection('home')} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Digital Printing · Signage · Advertising · Interior Solutions
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-ink-300 ring-1 ring-inset ring-white/10 transition-colors hover:text-white hover:ring-white/30"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-ink-300 ring-1 ring-inset ring-white/10 transition-colors hover:text-white hover:ring-white/30"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Our Work', id: 'work' },
                { label: 'About', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goSection(item.id)}
                    className="text-ink-300 transition-colors hover:text-accent-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerServices.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => goSection('services')}
                    className="text-ink-300 transition-colors hover:text-accent-400"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Division + Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              Division
            </h3>
            <button
              onClick={() => navigate('/interiors')}
              className="group mt-4 flex w-full items-center justify-between rounded-lg bg-ink-900 px-4 py-3 text-left ring-1 ring-inset ring-white/10 transition-all hover:ring-accent-400/40"
            >
              <span>
                <span className="block text-sm font-bold text-white">
                  {siteConfig.interiorDivision.name}
                </span>
                <span className="block text-xs text-ink-400">{siteConfig.interiorDivision.tagline}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-accent-400 transition-transform group-hover:translate-x-0.5" />
            </button>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
              <li>
                <a href={phoneLink()} className="transition-colors hover:text-accent-400">
                  Phone: {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-400">
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <a href={emailLink()} className="break-all transition-colors hover:text-accent-400">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-400"
                >
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-ink-400 sm:flex-row">
          <p>&copy; 2026 VUA DIGITALS. All rights reserved.</p>
          <p>Digital Printing · Signage · Advertising · Interior Solutions</p>
        </div>
      </div>
    </footer>
  );
}
