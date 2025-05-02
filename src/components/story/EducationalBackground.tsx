
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";
import { fadeIn, pulseAnimation } from "./storyAnimations";

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
        <div className="flex items-center mb-2">
          <School className="h-4 w-4 text-primary mr-2" />
          <h4 className="text-lg font-medium">SCMS School of Engineering</h4>
        </div>
        <div className="flex flex-wrap text-sm text-muted-foreground mb-2">
          <span className="mr-4">B.Tech, Computer Science (2015-2019)</span>
          <span>GPA: 8.25/10</span>
        </div>
        <p className="mt-2 text-muted-foreground">
          I chose SCMS through the government allocation process, considering other options like Rajagiri and FISAT. 
          Its disciplined academic environment, strict anti-ragging policies, and well-structured curriculum under APJ Abdul 
          Kalam Technological University proved to be the perfect environment for my growth.
        </p>
        <p className="mt-2 text-muted-foreground">
          Even during my B.Tech, I had a deep passion for AI and Data Science, seizing every opportunity to work on small 
          research projects. Under Dr. Vinod P's mentorship, I worked on Adversarial Machine Learning research, which was 
          later published at the KES International Conference.
        </p>
      </div>
      
      <div className="relative pl-8 border-l-2 border-primary/30 mb-6">
        <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
        <div className="flex items-center mb-2">
          <BookOpen className="h-4 w-4 text-primary mr-2" />
          <h4 className="text-lg font-medium">Indian Institute of Information Technology</h4>
        </div>
        <div className="flex flex-wrap text-sm text-muted-foreground mb-2">
          <span className="mr-4">M.Tech, AI and Data Science (2022-2024)</span>
          <span>GPA: 9.9/10</span>
        </div>
        <motion.div 
          className="mt-2 text-muted-foreground"
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
        >
          <p>
            After gaining industry experience at Infosys and realizing the need for deeper specialization, I pursued an M.Tech at IIIT.
            I chose IIIT for its strong AI curriculum, research-driven approach, and industry collaborations.
          </p>
          <p className="mt-2">
            At IIIT, I focused on Explainable AI (XAI) and Generative AI. My research examined the limitations of 
            existing explainability techniques like LIME and SHAP, and I developed a novel RAG-based explainability approach
            for analyzing model deviations in LLMs like LLAMA and Mistral.
          </p>
        </motion.div>
      </div>
      
      <div className="relative pl-8 border-l-2 border-primary/30">
        <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
        <h4 className="text-lg font-medium">College Life: Highs and Lows</h4>
        <p className="mt-2 text-muted-foreground">
          My undergraduate years weren't about chasing grades. I prioritized self-learning, hands-on projects, and 
          research-driven exploration. I developed a mind-controlled keyboard for paralyzed individuals using an EEG device in our fab lab.
        </p>
        <p className="mt-2 text-muted-foreground">
          My best times? Finding close friends who supported me, late-night coding sprints, and discovering my passion for AI. 
          The worst times? Facing criticism and mockery when pitching ideas that seemed premature to classmates. Each laugh only 
          fueled my persistence, and when those "crazy" ideas finally worked, it was a powerful lesson in resilience.
        </p>
        <p className="mt-2 text-muted-foreground">
          At IIIT, I enjoyed working alongside professionals from various industries, but juggling full-time work and part-time
          studies required significant personal sacrifices. Despite the challenges, the experience was invaluable for my growth.
        </p>
      </div>
    </motion.div>
  );
};

export default EducationalBackground;
