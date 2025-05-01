
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const RevealOnScroll = ({ 
  children, 
  className, 
  threshold = 0.1,
  delay = 0,
  direction = "up"
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Determine transform values based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "up": return "translate-y-10";
      case "down": return "-translate-y-10";
      case "left": return "translate-x-10";
      case "right": return "-translate-x-10";
      default: return "translate-y-10";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay to stagger animations
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px" // Start animation slightly before element comes into view
      }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getInitialTransform()}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
