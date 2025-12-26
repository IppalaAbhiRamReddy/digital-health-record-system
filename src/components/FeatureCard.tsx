import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
