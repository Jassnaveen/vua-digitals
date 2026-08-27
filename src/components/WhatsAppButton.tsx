import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/config/siteConfig';

/** Floating WhatsApp button — bottom-right on all viewports. */
export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Helper bubble */}
      {show && !dismissed && (
        <div className="relative max-w-[14rem] rounded-2xl bg-ink-900 px-4 py-3 text-sm text-white shadow-xl ring-1 ring-inset ring-white/10">
          <button
            onClick={() => setDismissed(true)}
            className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-700 text-ink-200 ring-1 ring-inset ring-white/15"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="font-semibold">Need a quote?</p>
          <p className="mt-0.5 text-xs text-ink-300">Chat with us on WhatsApp.</p>
        </div>
      )}

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        aria-label="Chat with VUA Digitals on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
      </a>
    </div>
  );
}
