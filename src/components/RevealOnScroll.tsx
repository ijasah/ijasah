
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const RevealOnScroll = ({ 
  children, 
  className, 
  threshold = 0.1,
  delay = 0 
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        "transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
