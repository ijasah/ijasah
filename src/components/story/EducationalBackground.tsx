
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { fadeIn } from "./storyAnimations";

const EducationalBackground = () => {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all duration-300"
      custom={1}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <GraduationCap className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Educational Background</h3>
      </div>
      
      <div className="relative pl-8 border-l-2 border-primary/30 mb-6">
        <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
        <h4 className="text-lg font-medium">Why SCMS and IIIT?</h4>
        <p className="mt-2 text-muted-foreground">
          I chose SCMS School of Engineering for my B.Tech in Computer Science through the government allocation process. 
          Its disciplined academic environment, strict anti-ragging policies, and well-structured curriculum under APJ Abdul 
          Kalam Technological University proved to be the perfect environment for my growth.
        </p>
        <p className="mt-2 text-muted-foreground">
          Under Dr. Vinod P's mentorship, I worked on Adversarial Machine Learning research, published at the KES International 
          Conference. After graduating, I continued my education with an M.Tech at IIIT, focusing on Explainable AI and Generative AI.
        </p>
      </div>
      
      <div className="relative pl-8 border-l-2 border-primary/30 mb-6">
        <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
        <h4 className="text-lg font-medium">College Life: Highs and Lows</h4>
        <p className="mt-2 text-muted-foreground">
          My undergraduate years weren't about chasing grades. I ended with an 8.25 GPA, but what really mattered 
          was the dozens of projects I poured myself into—from hackathons to fab-lab prototypes—and the 
          friendships I forged.
        </p>
        <p className="mt-2 text-muted-foreground">
          My best times? Late-night coding sprints with a close circle of friends, spirited movie debates 
          in the common room, and the thrill of seeing a project come to life.
        </p>
      </div>
      
      <div className="relative pl-8 border-l-2 border-primary/30">
        <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
        <h4 className="text-lg font-medium">Mentorship & Research</h4>
        <p className="mt-2 text-muted-foreground">
          Dr. Vinod P, Head of Department and a wizard in Cybersecurity and AI became my mentor. His 
          machine-learning lectures were so engaging that I never missed one—and soon I was in his office, 
          co-researching adversarial machine learning and evaluating Android malware detectors against 
          adversarial examples.
        </p>
        <p className="mt-2 text-muted-foreground">
          That work culminated in a paper at the KES International Conference, cementing my belief that 
          AI research could change lives.
        </p>
      </div>
    </motion.div>
  );
};

export default EducationalBackground;
