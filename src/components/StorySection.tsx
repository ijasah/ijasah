
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Calendar, User, Users, Star, BookOpen } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const StorySection = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent to-secondary/5"
        aria-hidden="true"
      />
      
      <div className="section-container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Journey
        </motion.h2>
        
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll threshold={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Education & Background */}
              <div className="space-y-8">
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
                
                {/* Leadership Philosophy Card */}
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
              </div>
              
              {/* Right Column - Career Journey */}
              <div className="space-y-8">
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
                
                {/* Work Habits */}
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
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
