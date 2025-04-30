
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{progress}%</p>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default SkillBar;
