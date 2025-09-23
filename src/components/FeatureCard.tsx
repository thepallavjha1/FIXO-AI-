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
        <div className="relative flex justify-center">
          {/* Icon with gradient background */}
          <div className={`${gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-black text-display mb-4 group-hover:text-accent transition-smooth text-center">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed text-center">
          {description}
        </p>

        <div className="flex items-center justify-center">
          <div className={`${gradient} bg-clip-text text-transparent font-bold text-lg text-center`}>
            {stats}
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
};

export default FeatureCard;