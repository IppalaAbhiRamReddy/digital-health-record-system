import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Improved Continuity of Care",
    description: "Access complete patient history for better treatment decisions",
  },
  {
    title: "Reduced Duplicate Tests",
    description: "Eliminate unnecessary procedures with accessible test results",
  },
  {
    title: "Enhanced Data Security",
    description: "Advanced encryption and role-based access controls",
  },
  {
    title: "Public Health Insights",
    description: "Aggregated anonymized data for health planning",
  },
];

const Benefits = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="rounded-2xl gradient-benefits p-8 md:p-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Key Benefits
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-healthcare-green" />
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
