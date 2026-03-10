export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-red">
            01
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-bold tracking-widest text-text-heading">
            ABOUT
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Datasheet field table */}
        <div className="border border-border">
          {/* Title row */}
          <div className="border-b border-border bg-bg-secondary px-4 py-3 sm:px-6">
            <span className="text-xs font-bold tracking-widest text-text-heading">
              POWER PLANE, LLC — GENERAL SPECIFICATION
            </span>
          </div>

          {/* Fields */}
          <DataField label="DESC" value="Custom electronics & connected devices" />
          <DataField
            label="TYPE"
            value="Hardware + Firmware Development"
          />
          <DataField
            label="FOR"
            value="Creative projects, research, small products, artistic & scientific inquiry"
          />
          <DataField label="STATUS" value="ACTIVE" highlight />
        </div>

        {/* Description paragraph */}
        <div className="mt-8 border-l-2 border-accent-copper/40 pl-4 sm:pl-6">
          <p className="text-sm leading-relaxed text-text-primary">
            Power Plane designs and builds custom electronic hardware and
            firmware for clients who need something that doesn&apos;t exist
            yet. From concept through prototype to production, we handle PCB
            design, embedded firmware, and everything in between — for
            creative projects, scientific instruments, and connected devices.
          </p>
        </div>
      </div>
    </section>
  );
}

function DataField({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex border-b border-border last:border-b-0">
      <div className="w-24 shrink-0 border-r border-border bg-bg-secondary px-4 py-3 sm:w-32 sm:px-6">
        <span className="text-[10px] font-semibold tracking-widest text-muted">
          {label}
        </span>
      </div>
      <div className="flex-1 px-4 py-3 sm:px-6">
        <span
          className={`text-xs sm:text-sm ${
            highlight ? "font-semibold text-accent-cyan" : "text-text-primary"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
