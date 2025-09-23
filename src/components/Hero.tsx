import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/brewery-ai-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern brewery with AI technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-display mb-8 leading-none">
            <span className="text-foreground">Optimize Your</span>
            <br />
            <span className="brewery-gradient bg-clip-text text-transparent">
              Brewery Operations
            </span>
            <br />
            <span className="text-foreground">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your brewing process with intelligent automation, IoT monitoring, 
            and drone analytics for maximum efficiency and quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="tech-gradient text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-bounce shadow-glow"
            >
              Start Optimization
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold hover:bg-accent/10 transition-smooth"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-pulse opacity-20 delay-1000">
        <div className="w-4 h-4 rounded-full bg-accent"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse opacity-20 delay-1000">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      <div className="absolute top-40 left-1/4 animate-pulse opacity-25 delay-500">
        <div className="w-4 h-4 rounded-full bg-accent"></div>
      </div>
    </section>
  );
};

export default Hero;