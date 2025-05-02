
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, User, Book, Award, Code, Server } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    "Python", "Machine Learning", "Deep Learning", "NLP", 
    "Generative AI", "LLM Fine-tuning", "RAG", "TensorFlow", 
    "PyTorch", "Google Cloud (GCP)", "Docker", "FastAPI"
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-16 relative">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <RevealOnScroll threshold={0.2} delay={100}>
            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 border border-primary/10 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Background</h3>
                  <p className="text-muted-foreground">
                    Data Scientist and Generative AI Engineer with over 5 years of experience in building data-driven solutions and large-scale AI applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
          
          <RevealOnScroll threshold={0.2} delay={200}>
            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 border border-primary/10 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    I've worked across multiple sectors including retail, hi-tech, finance, and insurance, applying AI techniques to solve complex industry challenges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
          
          <RevealOnScroll threshold={0.2} delay={300}>
            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 border border-primary/10 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    M.Tech in AI and Data Science from IIIT Kottayam (2022-2024) with 9.9 CGPA and B.Tech in Computer Science from SCMS School of Engineering and Technology (2015-2019).
                  </p>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <RevealOnScroll threshold={0.3}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                Professional Journey
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20"></span>
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-primary/30 pb-6">
                  <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-medium">Senior Associate, Data Scientist | AI Engineer</h4>
                  <p className="text-sm text-muted-foreground">Cognizant • 2022-Present</p>
                  <p className="mt-2 text-muted-foreground">
                    Led development of generative AI solutions, reducing task completion time by ~60% and increasing productivity 5x.
                    Worked with closed-source LLMs including OpenAI and Google Gemini.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary/30 pb-6">
                  <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-medium">Data Scientist</h4>
                  <p className="text-sm text-muted-foreground">QBurst Technologies • 2022</p>
                  <p className="mt-2 text-muted-foreground">
                    Developed AI solutions in insurance & finance and hi-tech domains, enhancing operational efficiency.
                    Created Car Damage Evaluator project to assess and evaluate damages.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-medium">Systems Engineer - R&D | Center of Excellence</h4>
                  <p className="text-sm text-muted-foreground">2019-2022</p>
                  <p className="mt-2 text-muted-foreground">
                    Led research on advanced defenses against adversarial attacks on neural networks.
                    Conducted research in explainable AI, NLP, computer vision, and responsible AI.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            <RevealOnScroll threshold={0.3} delay={100}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                  Technical Skills
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20"></span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Programming</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">Python, R, SQL, C/C++, Java</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Cloud</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">GCP, IBM Watson, Azure, Databricks</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll threshold={0.3} delay={200}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                  Achievements
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20"></span>
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">5-star rating in yearly review at Cognizant</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Cognizant GenAI ideathon award winner</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Multiple INSTA and RISE awards for guiding ML research and project excellence</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">5-star for problem solving and Python programming on HackerRank</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 bottom-20 -z-10 opacity-5">
        <svg width="600" height="600" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M39.9,-68.1C52.8,-62.5,65.2,-53.8,72.7,-41.7C80.1,-29.6,82.6,-14.8,81.2,-0.8C79.9,13.2,74.6,26.3,67.2,38.4C59.9,50.4,50.5,61.3,38.6,68.5C26.8,75.7,13.4,79.2,-0.7,80.4C-14.8,81.7,-29.6,80.7,-41.6,74C-53.5,67.3,-62.7,55,-70,41.3C-77.4,27.6,-83,13.8,-83.1,-0.1C-83.3,-14,-78,-28,-69.9,-39.9C-61.8,-51.8,-50.9,-61.5,-38.5,-67.5C-26.1,-73.5,-13,-75.6,0.5,-76.5C14.1,-77.4,28.1,-77,39.9,-68.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
