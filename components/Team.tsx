const TEAM = [
  {
    name: "David Yang",
    title: "Co-Founder",
    bio: "Bio placeholder — describe role, background, and expertise here.",
    instagram: "dav1dyang",
  },
  {
    name: "Shuang Cai",
    title: "Co-Founder",
    bio: "Bio placeholder — describe role, background, and expertise here.",
    instagram: "fkialmostforgot",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-red">
            03
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-bold tracking-widest text-text-heading">
            TEAM
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Team cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="border border-border bg-bg-primary"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 border-b border-border bg-bg-secondary px-4 py-3 sm:px-6">
                <span className="flex h-8 w-8 items-center justify-center border border-accent-red/40 text-[10px] font-bold text-accent-red">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-xs font-bold tracking-wider text-text-heading">
                    {member.name}
                  </p>
                  <p className="text-[10px] tracking-wider text-muted">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 sm:px-6">
                <p className="mb-3 text-xs leading-relaxed text-text-primary">
                  {member.bio}
                </p>
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-wider text-muted hover:text-accent-cyan transition-colors"
                >
                  @{member.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
