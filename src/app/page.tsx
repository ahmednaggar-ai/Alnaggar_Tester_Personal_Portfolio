import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface p-4">
      <main className="mx-auto max-w-[1400px] rounded-2xl border border-card-border bg-background shadow-sm">
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
}
