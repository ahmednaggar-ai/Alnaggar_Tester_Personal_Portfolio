import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border/30 bg-card/10 py-10 w-full relative z-10">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-[10px] font-bold tracking-widest text-muted/80 uppercase">
          © {new Date().getFullYear()} QA PORTFOLIO | VERIFIED SYSTEM ARCHITECTURE
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/status" className="text-[10px] font-bold tracking-widest text-muted/60 transition hover:text-foreground">SYSTEM STATUS</Link>
          <Link href="/docs" className="text-[10px] font-bold tracking-widest text-muted/60 transition hover:text-foreground">DOCUMENTATION</Link>
          <Link href="/privacy" className="text-[10px] font-bold tracking-widest text-muted/60 transition hover:text-foreground">PRIVACY PROTOCOL</Link>
        </div>
      </div>
    </footer>
  );
}
