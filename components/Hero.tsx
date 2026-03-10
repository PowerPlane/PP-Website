export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
    >
      {/* Corner markers */}
      <div className="absolute top-16 left-4 sm:left-8 h-8 w-8 border-t-2 border-l-2 border-accent-red/60" />
      <div className="absolute top-16 right-4 sm:right-8 h-8 w-8 border-t-2 border-r-2 border-accent-red/60" />
      <div className="absolute bottom-16 left-4 sm:left-8 h-8 w-8 border-b-2 border-l-2 border-accent-red/60" />
      <div className="absolute bottom-16 right-4 sm:right-8 h-8 w-8 border-b-2 border-r-2 border-accent-red/60" />

      {/* Content */}
      <div className="text-center">
        <p className="mb-4 text-xs tracking-[0.3em] text-muted">
          ── REV 2.0 ──
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-text-heading leading-tight">
          POWER PLANE
          <span className="block text-accent-red">, LLC</span>
        </h1>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-accent-copper" />
          <p className="text-sm sm:text-base tracking-wide text-text-primary">
            Custom electronics &amp; connected devices
          </p>
          <span className="h-px w-8 bg-accent-copper" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted hover:text-accent-cyan transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] tracking-widest">SCROLL</span>
        <span className="h-6 w-px animate-pulse bg-current" />
      </a>
    </section>
  );
}
