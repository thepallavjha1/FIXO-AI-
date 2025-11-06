import { Brain, Radar, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import hopsAiIcon from "/src/assets/hops-ai-icon.png";
import droneIcon from "/src/assets/drone-brewery-icon.png";
import prodImage from "/src/assets/prod.png";
import armImage from "/src/assets/arm.png";
const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI + IoT Integration",
      description: "Intelligent sensors powered by AI algorithms monitor quality parameters across all business operations, from manufacturing to service delivery.",
      stats: "Enhanced Quality",
      // image: hopsAiIcon,
      gradient: "tech-gradient"
    },
    {
      icon: Radar,
      title: "Computer Vision Systems", 
      description: "Advanced visual inspection technology detects defects, ensures compliance, and maintains quality standards across diverse industries and processes.",
      stats: "Precision Detection",
      gradient: "brewery-gradient"
    },
    {
      icon: Zap,
      title: "Drone Systems",
      description: "Autonomous drone networks provide aerial quality monitoring, remote inspections, and real-time data collection for comprehensive business oversight.",
      stats: "Continuous Monitoring",
      // image: droneIcon,
      gradient: "tech-gradient"
    }
  ];

  return (
    <section className="py-4 px-6 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-display mb-6 leading-tight">
            <span className="text-foreground">Intelligent</span>
            <br />
            <span className="brewery-gradient bg-clip-text text-transparent">Quality Control Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three pillars powering cross-industry quality assurance and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

    {/* Pictures  */}
      <div className="absolute top-[-45%] left-[-10%] z-0 hidden lg:block">
              <img 
                src={armImage} 
                alt="Automation element" 
                className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[700px] h-auto pointer-events-none"
              />
      </div>

      <div className="absolute top-[-25%] right-[-18%] w-90 h-auto z-0 hidden lg:block">
          <img 
            src={prodImage} 
            alt="Quality operations element" 
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[650px] h-auto pointer-events-none"
          />
      </div>
    </section>
  );
};

export default Features;