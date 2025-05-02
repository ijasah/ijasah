
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import EducationalBackground from "./story/EducationalBackground";
import LeadershipPhilosophy from "./story/LeadershipPhilosophy";
import ProfessionalJourney from "./story/ProfessionalJourney";
import CoreLessons from "./story/CoreLessons";
import WorkHabits from "./story/WorkHabits";

const StorySection = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent to-secondary/5"
        aria-hidden="true"
      />
      
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-title mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From passion to expertise — the story of my personal and professional development in AI
          </motion.p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll threshold={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Rearranged for better balance */}
              <div className="space-y-8">
                <EducationalBackground />
                <CoreLessons />
              </div>
              
              {/* Right Column - Rearranged for better balance */}
              <div className="space-y-8">
                <ProfessionalJourney />
                <LeadershipPhilosophy />
                <WorkHabits />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
