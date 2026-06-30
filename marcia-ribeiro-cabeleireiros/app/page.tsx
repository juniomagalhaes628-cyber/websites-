import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
