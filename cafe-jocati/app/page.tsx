import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmentaSection from "@/components/EmentaSection";
import DailySpecialsSection from "@/components/DailySpecialsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <EmentaSection />
      <DailySpecialsSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
