import { ArrowRight, Play, Brain, Radar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/brewery-ai-hero.jpg";
import FeatureCard from "./FeatureCard";



const Hero = () => {


  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20">
       
       
       
        {/* Content */}
        <div className="relative z-10 w-100 px-6 text-center">

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



        {/* Pictures */}
        <div className="absolute -bottom-20 left-[-10%] z-0">
            <img 
              src="/src/assets/arm.png" 
              alt="Brewery element" 
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[700px] h-auto pointer-events-none"
            />
        </div>


          <div className="absolute top-0 right-[-18%] z-0">
            <img 
              src="/src/assets/Brewery.png" 
              alt="Floating brewery element" 
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[650px] h-auto pointer-events-none"
            />
          </div>

        {/* Dots */}
        <div className="absolute top-60 left-3/4 animate-pulse opacity-25 delay-1500">
          <div className="w-4 h-4 rounded-full bg-accent"></div>
        </div>
          

        <div className="absolute top-40 left-1/4 animate-pulse opacity-25 delay-500">
          <div className="w-4 h-4 rounded-full bg-accent"></div>
        </div>

        <div className="absolute bottom-10 right-7/8 animate-pulse opacity-25 delay-1000">
          <div className="w-4 h-4 rounded-full bg-accent"></div>
        </div>

      </section>
    </>
  );
};

export default Hero;