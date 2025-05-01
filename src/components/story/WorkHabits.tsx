
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { fadeIn } from "./storyAnimations";

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
      
      <p className="text-muted-foreground mb-4">
        I work at a moderate-to-fast pace for known tasks, slow down for complex problems, and maintain 
        sharp boundaries for work-life balance—while still jotting down exciting ideas after hours. 
        I'm organized with calendars and playbooks yet flexible enough to seize creative bursts. 
        I need little supervision once objectives are clear but proactively seek alignment when ambiguity looms.
      </p>
      
      <p className="text-muted-foreground">
        I stay calm under stress—debugging performance bottlenecks with batch-processing workarounds, 
        or defusing stakeholder fears about AI replacing jobs through empathetic demos. I'm steady emotionally, 
        though unclear goals and low-impact grunt work can sap my energy; I counter this by reframing tasks 
        or automating where possible.
      </p>
    </motion.div>
  );
};

export default WorkHabits;
