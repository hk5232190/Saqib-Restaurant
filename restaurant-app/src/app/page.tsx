import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import TastingMenu from "@/components/TastingMenu";
import AmbianceGallery from "@/components/AmbianceGallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LocationSection />
      <TastingMenu />
      <AmbianceGallery />
      <Testimonials />
    </>
  );
}
