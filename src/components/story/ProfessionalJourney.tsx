
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { fadeIn } from "./storyAnimations";

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
            <span className="text-sm text-muted-foreground">Dec 2019 - Dec 2021</span>
          </div>
          <h4 className="text-lg font-medium">Infosys</h4>
          <p className="mt-2 text-muted-foreground">
            <strong>Key Challenge:</strong> Breaking into AI as a fresh systems engineer. I worked hard on side projects until Dr. Vijayaraghavan invited me into ICETS.
          </p>
          <p className="mt-2 text-muted-foreground">
            <strong>Biggest Impact:</strong> Contributing to POCs that morphed into business engagements and forging academia partnerships.
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30 pb-6">
          <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Jan 2022 - Nov 2022</span>
          </div>
          <h4 className="text-lg font-medium">Qburst Technologies</h4>
          <p className="mt-2 text-muted-foreground">
            <strong>Key Challenge:</strong> Building production-ready AI systems with sparse annotated data for car damage detection and document parsing.
          </p>
          <p className="mt-2 text-muted-foreground">
            <strong>Biggest Impact:</strong> Delivering robust models that automated business processes and mentoring juniors.
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Dec 2022 - Present</span>
          </div>
          <h4 className="text-lg font-medium">Cognizant</h4>
          <p className="mt-2 text-muted-foreground">
            <strong>Key Challenge:</strong> Leading two flagship GenAI projects—the Presentation Generator and a RAG-powered QA Assistant—while tools like LangChain and LLM APIs were still immature.
          </p>
          <p className="mt-2 text-muted-foreground">
            <strong>Biggest Impact:</strong> Building custom evaluation pipelines (automated metrics + human feedback), intelligent caching, async processing; mentoring peers via workshops and playbooks; securing multiple 5/5 performance ratings.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalJourney;
