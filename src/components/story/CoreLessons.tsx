
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { fadeIn } from "./storyAnimations";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CoreLessons = () => {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all duration-300"
      custom={3}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <Code className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Core Lessons</h3>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
          variants={fadeIn}
          custom={1}
        >
          <p className="text-foreground italic">
            "End-to-end ownership beats isolated coding."
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
          variants={fadeIn}
          custom={2}
        >
          <p className="text-foreground italic">
            "Transparent communication builds trust faster than perfect models."
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
          variants={fadeIn}
          custom={3}
        >
          <p className="text-foreground italic">
            "Design for change—modularity isn't enough without anticipating evolution."
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
          variants={fadeIn}
          custom={4}
        >
          <p className="text-foreground italic">
            "Mentoring refines both the mentor's and mentee's craft."
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CoreLessons;
