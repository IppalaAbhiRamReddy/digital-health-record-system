import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl animate-fade-in">
          Secure & Centralized Patient Health Records
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A comprehensive digital health care system that stores lifelong electronic health records with role-based access control, ensuring data security and seamless multi-hospital coordination.
        </p>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/login">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
