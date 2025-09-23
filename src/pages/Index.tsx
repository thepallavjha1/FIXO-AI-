import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <>
      <FloatingElements />
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
    </>
  );
};

export default Index;
