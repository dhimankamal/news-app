import BottomBar from "components/BottomBar";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import TopPostSection from "components/sections/ TopPostSection";
import AdsSection from "components/sections/AdsSection";
import FeatureSection from "components/sections/FeatureSection";
import InstagramSection from "components/sections/InstagramSection";
import LifestyleSection from "components/sections/LifestyleSection";
import TopContentSection from "components/sections/TopContentSection";
import TopPostSection2 from "components/sections/TopPostSection2";
import WhatsNewSection from "components/sections/WhatsNewSection";
import TopBar from "components/TopBar";

export default function Home() {
  return (
    <>
      {/* Header Top Bar */}
      <TopBar />
      {/* Header Top Bar */}
      {/* Main Header */}
      <Navbar />
      {/* Main Header */}
      {/* Header Bottom */}
      <BottomBar />
      {/* Header Bottom */}
      {/* Featured Section */}
      <FeatureSection />
      {/* Featured Section */}
      {/* Top Post Section */}
      <TopPostSection />
      {/* Top Post Section */}
      {/* Lifestyle Section */}
      <LifestyleSection />
      {/* Lifestyle Section */}
      {/* Ads Section */}
      <AdsSection type="primary" />
      {/* Ads Section */}
      {/* Featured Carousel Section */}
      <FeatureSection />
      {/* Featured Carousel Section */}
      {/* Top Post Section */}
      <TopPostSection2 />
      {/* Top Post Section */}
      {/* Top Content Section */}
      <TopContentSection />
      {/* Top Content Section */}
      {/* Ads Section */}
      <AdsSection type="secondary" />
      {/* Ads Section */}
      {/* Whats New Section */}
      <WhatsNewSection />
      {/* Whats New Section */}
      {/* Instagram Section */}
      <InstagramSection />
      {/* Instagram Section */}
      {/* Footer Section */}
      <Footer />
      {/* Bact To Top */}
      {/* Include All JS */}
    </>
  );
}
