import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  iconBg?: string;
}

const FeatureCard = ({ icon: Icon, title, description, stats, iconBg = "bg-primary" }: FeatureCardProps) => {
  return (
    <Card className="interactive-card bg-white shadow-card border-0 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-8 text-center">
        <div className={`${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth`}>
          <Icon className="h-8 w-8 text-white" />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-4">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-orange font-semibold text-sm">
            {stats}
          </div>
          <div className="w-6 h-6 border-2 border-orange rounded-full flex items-center justify-center hover:bg-orange hover:border-orange transition-smooth group">
            <div className="w-2 h-2 bg-orange rounded-full group-hover:bg-white transition-smooth"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;