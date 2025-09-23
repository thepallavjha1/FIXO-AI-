import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import breweryOps from "@/assets/brewery-ops.png";
import productionMachines from "@/assets/production-machines.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Left side illustration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-90 animate-fade-in">
        <img 
          src={breweryOps} 
          alt="" 
          className="w-96 h-auto"
        />
      </div>

      {/* Right side illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-90 animate-fade-in">
        <img 
          src={productionMachines} 
          alt="" 
          className="w-80 h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-display mb-6 leading-tight">
            <span className="text-foreground">Optimize Your</span>
            <br />
            <span className="text-orange">
              Brewery Operations
            </span>
            <br />
            <span className="text-foreground">with AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your brewing process with intelligent automation, IoT 
            monitoring, and drone analytics for maximum efficiency and quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="blue-gradient text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-smooth shadow-button border-0"
            >
              Start Optimization
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold text-foreground hover:bg-secondary/50 transition-smooth"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;