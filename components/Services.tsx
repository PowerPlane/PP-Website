const SERVICES = [
  {
    id: "U1",
    name: "PCB / Hardware Design",
    description:
      "Custom PCB design, schematic capture, layout, and manufacturing support. From single-layer prototypes to complex multi-layer boards.",
  },
  {
    id: "U2",
    name: "Firmware Development",
    description:
      "Embedded software for microcontrollers — ESP32, STM32, ARM, and more. Bare-metal or RTOS-based, optimized for your hardware.",
  },
  {
    id: "U3",
    name: "Prototyping",
    description:
      "Rapid prototyping from concept to working hardware. We iterate fast so you can validate ideas before committing to production.",
  },
  {
    id: "U4",
    name: "Consulting",
    description:
      "Technical consulting for hardware and firmware projects. Design reviews, architecture guidance, and vendor selection.",
  },
  {
    id: "U5",
    name: "Custom Tools",
    description:
      "Bespoke instruments and tools for artistic & scientific inquiry. Household electronics and in-house artworks.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-8 sm:py-10 bg-bg-secondary/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-4 flex items-center gap-4">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-red">
            02
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-bold tracking-widest text-text-heading">
            SERVICES
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Service grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group border border-border bg-bg-primary hover:border-accent-red/50 transition-colors"
            >
              {/* Component header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="text-[10px] font-bold tracking-widest text-accent-copper">
                  {service.id}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/60 group-hover:bg-accent-cyan transition-colors" />
              </div>

              {/* Component body */}
              <div className="p-3">
                <h3 className="mb-1 text-xs font-bold tracking-wider text-text-heading">
                  {service.name}
                </h3>
                <p className="text-[11px] leading-relaxed text-muted group-hover:text-text-primary transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
