import CareerLogbookSection from "@/components/career-logbook-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full bg-background">
        <Navbar />
        <HeroSection />
        <CareerLogbookSection />
      </main>
    </div>
  );
}
