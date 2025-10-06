import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";
import Stats from "@/components/pages/home/Stats";
import Highlights from "@/components/pages/home/Highlights";
import Activities from "@/components/pages/home/Activities";
import CallToAction from "@/components/pages/home/CallToAction";

export default function HomePage() {
  return (
    <section className="relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <About />
        <Stats />
        <Highlights />
        <Activities />
        <CallToAction />
      </div>
    </section>
  );
}