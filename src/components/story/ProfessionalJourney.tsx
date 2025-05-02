
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, AlertTriangle } from "lucide-react";
import { fadeIn, floatAnimation } from "./storyAnimations";
import { Badge } from "@/components/ui/badge";

const ProfessionalJourney = () => {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all duration-300"
      custom={2}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <Briefcase className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Professional Journey</h3>
      </div>
      
      <div className="space-y-8">
        <div className="relative pl-8 border-l-2 border-primary/30 pb-6">
          <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Dec 2022 - Present</span>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Cognizant Technology Solutions</h4>
            <Badge className="bg-primary/80">Senior Associate</Badge>
          </div>
          
          <motion.div 
            className="mt-4 space-y-4"
            variants={floatAnimation}
            initial="initial"
            animate="animate"
          >
            <div>
              <h5 className="text-md font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> Key Achievements
              </h5>
              <p className="mt-1 text-muted-foreground">
                Led two flagship GenAI projects—the Presentation Generator and a RAG-powered QA Assistant—while tools 
                like LangChain and LLM APIs were still evolving. Created custom evaluation pipelines combining automated 
                metrics with human feedback, and implemented intelligent caching and async processing.
              </p>
            </div>
            
            <div>
              <h5 className="text-md font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-primary" /> Challenges & Solutions
              </h5>
              <p className="mt-1 text-muted-foreground">
                Faced rapidly changing technologies, unclear benchmarks, and lack of GenAI-experienced resources. 
                Resolved by implementing version-aware designs with thin abstraction layers, creating internal playbooks, 
                and establishing knowledge-sharing sessions to build team expertise.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30 pb-6">
          <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Jan 2022 - Nov 2022</span>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Qburst Technologies</h4>
            <Badge>Data Scientist</Badge>
          </div>
          
          <div className="mt-4 space-y-4">
            <div>
              <h5 className="text-md font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> Key Achievements
              </h5>
              <p className="mt-1 text-muted-foreground">
                Developed production-ready AI systems with limited annotated data for car damage detection and document parsing.
                Built solutions across multiple AI domains—computer vision, NLP, and customer-intent modeling.
              </p>
            </div>
            
            <div>
              <h5 className="text-md font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-primary" /> Challenges & Learning
              </h5>
              <p className="mt-1 text-muted-foreground">
                Overcame data scarcity through creative approaches like data augmentation and semi-supervised learning.
                Learned that over-reliance on synthetic data can lead to poor generalization—a lesson applied when 
                our car damage model failed during real-user testing, prompting a redesign with better real image balance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Dec 2019 - Dec 2021</span>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Infosys Research (ICETS)</h4>
            <Badge variant="outline">Systems Engineer</Badge>
          </div>
          
          <div className="mt-4 space-y-4">
            <div>
              <h5 className="text-md font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> Key Achievements
              </h5>
              <p className="mt-1 text-muted-foreground">
                Worked on AI-driven solutions across industries like finance, telecom, and oil & gas.
                Contributed to POCs that evolved into business engagements and helped forge academia partnerships.
              </p>
            </div>
            
            <div>
              <h5 className="text-md font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-primary" /> Challenges & Mentorship
              </h5>
              <p className="mt-1 text-muted-foreground">
                Breaking into AI as a fresh systems engineer was my initial challenge. Through side projects and determination, 
                I caught Dr. Vijayaraghavan's attention and was invited to join ICETS, where I worked on explainable AI, 
                adversarial networks, and quantum machine learning experiments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalJourney;
