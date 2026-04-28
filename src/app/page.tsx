import CareerLogbookSection from "@/components/career-logbook-section";
import ContactSection from "@/components/contact-section";
import CoursesSection from "@/components/courses-section";
import EducationSection from "@/components/education-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import TechStackSection from "@/components/tech-stack-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full bg-background">
        <Navbar />
        <HeroSection />
        <CareerLogbookSection />
        <TechStackSection />
        <EducationSection />
        <CoursesSection />
        <ContactSection />
      </main>
    </div>
  );
}
