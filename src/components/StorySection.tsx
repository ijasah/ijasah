
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Calendar, User } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.1 * i,
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const StorySection = () => {
  return (
    <section id="story" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent to-secondary/5"
        aria-hidden="true"
      />
      
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Journey
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll threshold={0.1}>
            <div className="space-y-8 mt-8">
              {/* Education Section */}
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
                  <h4 className="text-lg font-medium">Why SCMS?</h4>
                  <p className="mt-2 text-muted-foreground">
                    From the first day I set foot on the SCMS campus in 2015, I knew I wasn't there simply to earn 
                    a degree—I was there to find my place in the world of AI. SCMS gave me structure and safety. 
                    Its labs and fab labs became my playground for self-learning.
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
              
              {/* Career Journey */}
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
                  <div className={cn(
                    "relative pl-8 border-l-2 border-primary/30 pb-6",
                  )}>
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
                  
                  <div className={cn(
                    "relative pl-8 border-l-2 border-primary/30 pb-6",
                  )}>
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
                  
                  <div className={cn(
                    "relative pl-8 border-l-2 border-primary/30",
                  )}>
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
              
              {/* Core Learnings */}
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-foreground italic">
                      "End-to-end ownership beats isolated coding."
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-foreground italic">
                      "Transparent communication builds trust faster than perfect models."
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-foreground italic">
                      "Design for change—modularity isn't enough without anticipating evolution."
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-foreground italic">
                      "Mentoring refines both the mentor's and mentee's craft."
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Work Habits */}
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
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
