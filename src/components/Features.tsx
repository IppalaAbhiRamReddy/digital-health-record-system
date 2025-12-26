import { Database, Shield, History, Activity, Users, ClipboardList } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Database,
    title: "Centralized Records",
    description: "All patient health records in one secure location accessible across hospitals",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Strict access controls ensure data security and patient privacy",
  },
  {
    icon: History,
    title: "Lifelong History",
    description: "Complete medical history maintained throughout patient lifetime",
  },
  {
    icon: Activity,
    title: "Real-Time Updates",
    description: "Instant access to latest diagnoses, prescriptions, and lab reports",
  },
  {
    icon: Users,
    title: "Multi-Hospital Access",
    description: "Seamless data sharing between authorized healthcare providers",
  },
  {
    icon: ClipboardList,
    title: "Audit Logging",
    description: "Complete transparency with detailed activity tracking and accountability",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
