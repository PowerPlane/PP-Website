const LINKS = [
  {
    label: "EMAIL",
    value: "contact@powerplane.co",
    href: "mailto:contact@powerplane.co",
  },
  {
    label: "INSTAGRAM",
    value: "@dav1dyang / @fkialmostforgot",
    href: "https://instagram.com/dav1dyang",
  },
  {
    label: "LINKEDIN",
    value: "Power Plane",
    href: "#",
  },
  {
    label: "GITHUB",
    value: "PowerPlane",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg-secondary/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-red">
            04
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-bold tracking-widest text-text-heading">
            CONTACT
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Contact table */}
        <div className="border border-border">
          <div className="border-b border-border bg-bg-secondary px-4 py-3 sm:px-6">
            <span className="text-xs font-bold tracking-widest text-text-heading">
              PINOUT — GET IN TOUCH
            </span>
          </div>

          {LINKS.map((link, i) => (
            <div
              key={link.label}
              className="flex border-b border-border last:border-b-0"
            >
              <div className="w-28 shrink-0 border-r border-border bg-bg-secondary px-4 py-3 sm:w-36 sm:px-6">
                <span className="text-[10px] font-semibold tracking-widest text-muted">
                  PIN {i + 1}
                </span>
                <span className="block text-[10px] tracking-wider text-accent-copper">
                  {link.label}
                </span>
              </div>
              <div className="flex-1 px-4 py-3 sm:px-6 flex items-center">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-xs text-text-primary hover:text-accent-cyan transition-colors"
                >
                  {link.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
