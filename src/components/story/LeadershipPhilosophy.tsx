
import { motion } from "framer-motion";
import { Users, Star, BookOpen } from "lucide-react";
import { fadeIn } from "./storyAnimations";
import { Card, CardContent } from "@/components/ui/card";

const LeadershipPhilosophy = () => {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all duration-300"
      custom={4}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Leadership Philosophy</h3>
      </div>
      
      <Card className="bg-primary/5 border-none mb-6">
        <CardContent className="pt-6">
          <p className="italic text-foreground">
            "I lead by building trust, respecting individual aspirations, and balancing autonomy with business alignment."
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium flex items-center gap-2">
            <Star className="h-4 w-4 text-primary" /> Team Development
          </h4>
          <p className="mt-1 text-muted-foreground">
            I believe in being hands-on enough to understand challenges deeply but hands-off enough to let the team own solutions. 
            Creating safe spaces for experimentation while maintaining alignment with business goals is my priority.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" /> Mentorship Approach
          </h4>
          <p className="mt-1 text-muted-foreground">
            My team would say I'm approachable, supportive, and create a safe space for experimentation. I tailor communication to 
            different personalities and learning styles, ensuring everyone grows through challenges.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadershipPhilosophy;
