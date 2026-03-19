import Header from "../componets/layout/Header";
import Footer from "../componets/layout/Footer";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeatureSection";
import PromoSection from "../sections/PromoSection";
import ContactSection from "../sections/ContactSection";

function HomePage() {
  return (
     <div className="min-h-screen bg-[#f4f2e8] text-[#1f2a1f]">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PromoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
