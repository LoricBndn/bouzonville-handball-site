import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Highlights from "@/components/home/Highlights";
import Activities from "@/components/home/Activities";
import CallToAction from "@/components/home/CallToAction";

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