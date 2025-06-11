
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import UpcomingEvents from "@/components/UpcomingEvents";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <PhotoGallery />
      <UpcomingEvents />
      <Shop />
      <Contact />
    </div>
  );
};

export default Index;
