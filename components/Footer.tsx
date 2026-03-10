export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6">
        <span className="text-[10px] tracking-widest text-muted">
          REV 2.0
        </span>
        <span className="text-[10px] tracking-wider text-muted">
          &copy; {year} POWER PLANE, LLC
        </span>
      </div>
    </footer>
  );
}
