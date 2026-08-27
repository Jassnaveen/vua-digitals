import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { useScrollLock } from '@/hooks/useScrollLock';
import { siteConfig, whatsappLink } from '@/config/siteConfig';
import type { Route } from '@/hooks/useRouter';

interface HeaderProps {
  route: Route;
  navigate: (to: Route) => void;
  onQuote: () => void;
}

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Our Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
] as const;

export function Header({ route, navigate, onQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goSection = (id: string) => {
    setMenuOpen(false);
    if (route !== '/') {
      navigate('/');
      // wait for route swap before scrolling
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    navigate('/');
  };

  const goInteriors = () => {
    setMenuOpen(false);
    navigate('/interiors');
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-smooth ${
          scrolled
            ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo onClick={goHome} />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goSection(item.id)}
                className="group relative px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-400 transition-transform duration-300 ease-smooth group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden btn-primary px-5 py-2.5 text-sm sm:inline-flex"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/10"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        route={route}
        onSection={goSection}
        onHome={goHome}
        onInteriors={goInteriors}
        onQuote={() => {
          setMenuOpen(false);
          onQuote();
        }}
      />
    </>
  );
}

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  route: Route;
  onSection: (id: string) => void;
  onHome: () => void;
  onInteriors: () => void;
  onQuote: () => void;
}

function SideMenu({ open, onClose, route, onSection, onHome, onInteriors, onQuote }: SideMenuProps) {
  const isActive = (id: string) => route === '/' && id === 'home';

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ink-900 shadow-2xl transition-transform duration-500 ease-smooth ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Logo onClick={onHome} />
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <p className="eyebrow mb-5">Menu</p>
          <nav className="flex flex-col gap-1" aria-label="Side">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => onSection(item.id)}
                className={`group flex items-center justify-between border-b border-white/5 py-4 text-left text-2xl font-bold tracking-tightest transition-colors sm:text-3xl ${
                  isActive(item.id) ? 'text-accent-400' : 'text-white hover:text-accent-300'
                }`}
                style={{
                  transitionDelay: open ? `${100 + i * 60}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(8px)',
                }}
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-xs font-semibold text-ink-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </span>
                <ArrowRight className="h-5 w-5 -translate-x-2 text-ink-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            ))}
          </nav>

          {/* Divider + other division */}
          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ink-400">
              Our other division
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <button
            onClick={onInteriors}
            className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-br from-ink-800 to-ink-900 p-6 text-left ring-1 ring-inset ring-white/10 transition-all duration-300 hover:ring-accent-400/40"
          >
            <span className="eyebrow mb-2 text-accent-400">Another division</span>
            <span className="block text-xl font-extrabold leading-tight tracking-tightest text-white sm:text-2xl">
              {siteConfig.interiorDivision.name}
            </span>
            <span className="mt-1 block text-sm text-ink-300">
              {siteConfig.interiorDivision.tagline}
            </span>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-300">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            {route === '/interiors' && (
              <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-accent-400" aria-label="Active" />
            )}
          </button>
        </div>

        <div className="border-t border-white/10 px-6 py-5">
          <button onClick={onQuote} className="btn-primary w-full">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </div>
  );
}
