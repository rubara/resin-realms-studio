import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import CreatorSection from "@/components/home/CreatorSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <CreatorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
