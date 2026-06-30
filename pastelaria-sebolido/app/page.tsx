import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import EncomendasSection from "@/components/EncomendasSection";
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
      <ProductsSection />
      <EncomendasSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
