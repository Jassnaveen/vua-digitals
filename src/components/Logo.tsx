interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/** VUA DIGITALS wordmark with a small geometric mark. */
export function Logo({ className = '', onClick }: LogoProps) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="VUA DIGITALS — home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-accent-400 text-ink-950 transition-transform duration-300 ease-smooth group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M4 4h4v7a4 4 0 0 0 8 0V4h4v7a8 8 0 0 1-16 0V4z" />
          <rect x="4" y="16" width="16" height="3" rx="1.5" opacity="0.5" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tightest text-white sm:text-lg">VUA</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ink-300">
          Digitals
        </span>
      </span>
    </button>
  );
}
