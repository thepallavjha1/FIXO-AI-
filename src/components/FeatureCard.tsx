import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  image?: string;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, stats, image, gradient = "tech-gradient" }: FeatureCardProps) => {
  return (
    <Card className="interactive-card group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
      <CardContent className="p-8">
        <div className="relative">
          {/* Icon with gradient background */}
          <div className={`${gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          {/* Optional image */}
          {image && (
            <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-40 transition-smooth">
              <img src={image} alt="" className="w-24 h-24 object-contain" />
            </div>
          )}
        </div>

        <h3 className="text-2xl font-black text-display mb-4 group-hover:text-accent transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className={`${gradient} bg-clip-text text-transparent font-bold text-lg`}>
            {stats}
          </div>
          <div className="w-6 h-6 border-2 border-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-smooth">
            <div className="w-2 h-2 bg-accent rounded-full group-hover:bg-white transition-smooth"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;