import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import TastingMenu from "@/components/TastingMenu";
import AmbianceGallery from "@/components/AmbianceGallery";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <TastingMenu />
      <AmbianceGallery />
      <Testimonials />
      <LocationSection />
    </>
  );
}
