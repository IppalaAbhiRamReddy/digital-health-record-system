import { Activity } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <Activity className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-lg font-semibold text-foreground">
        Digital Health Care Record System
      </span>
    </div>
  );
};

export default Logo;
