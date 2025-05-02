
import { motion } from "framer-motion";
import { User, Heart, AlertCircle } from "lucide-react";
import { fadeIn, staggerContainer } from "./storyAnimations";

const WorkHabits = () => {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all duration-300"
      custom={5}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Work Habits & Temperament</h3>
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-5"
      >
        <motion.div 
          variants={fadeIn}
          custom={1}
          className="bg-primary/5 p-4 rounded-lg"
        >
          <h4 className="text-lg font-medium flex items-center gap-2 mb-2">
            <Heart className="h-4 w-4 text-primary" /> Work Style
          </h4>
          <p className="text-muted-foreground">
            I work at a moderate-to-fast pace for known tasks, slow down for complex problems, and maintain 
            sharp boundaries for work-life balance—while still jotting down exciting ideas after hours. 
            I'm organized with calendars and playbooks yet flexible enough to seize creative bursts.
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          custom={2}
          className="bg-primary/5 p-4 rounded-lg"
        >
          <h4 className="text-lg font-medium flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-primary" /> Under Pressure
          </h4>
          <p className="text-muted-foreground">
            I stay calm under stress—debugging performance bottlenecks with batch-processing workarounds, 
            or defusing stakeholder fears about AI replacing jobs through empathetic demos. I haven't "lost my cool" 
            in months, choosing transparency and data over defensiveness.
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          custom={3}
          className="bg-primary/5 p-4 rounded-lg"
        >
          <h4 className="text-lg font-medium flex items-center gap-2 mb-2">
            <User className="h-4 w-4 text-primary" /> Interpersonal Dynamics
          </h4>
          <p className="text-muted-foreground">
            My best manager, Dr. Vijayaraghavan, mentored without micromanaging and encouraged bold ideas. I apply those 
            lessons when mentoring others, like Arun at Cognizant, guiding him to slow down on quick decisions and adapt under pressure.
          </p>
          <p className="mt-2 text-muted-foreground">
            I'm balanced in assertiveness—listening carefully before advocating for data-driven approaches. When faced with resistance 
            to our GenAI rollout, I overcame it through patient, data-backed conversations and inclusive problem-solving.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkHabits;
