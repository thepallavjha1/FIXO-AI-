import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";
import Features from "@/components/Features";

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Features />
      {/* <Stats /> */}
      {/* <CTA /> */}
    </main>
  );
};

export default Index;
