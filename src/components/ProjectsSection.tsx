
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "QA Assistant",
    description: "Production-grade Retrieval-Augmented Generation (RAG) tool deployed on GCP, providing accurate and context-aware responses for user queries.",
    tags: ["Generative AI", "RAG", "Vector DB", "LangChain", "GCP"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    achievements: "Achieved 5x productivity improvement and 99.9% uptime",
    link: "#"
  },
  {
    id: 2,
    title: "Generative Presentation Tool",
    description: "AI-powered business pitch generator that uses Generative AI to automatically create structured, professional presentations from domain-specific data.",
    tags: ["Generative AI", "RAG", "LangChain", "Agentic Flow"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    achievements: "20% reduction in presentation creation time",
    link: "#"
  },
  {
    id: 3,
    title: "Insure Aware",
    description: "Digital solution suite for the life insurance industry, leveraging predictive modeling to generate actionable marketing insights and predict user purchasing intent.",
    tags: ["Machine Learning", "Predictive Analytics", "Insurance"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    achievements: "Improved user purchasing intent prediction by 5%",
    link: "#"
  },
  {
    id: 4,
    title: "Car Damage Evaluator",
    description: "A software solution that utilizes deep learning (Object detection) to identify damaged parts, evaluate damages and predict possible insurance reimbursement amounts.",
    tags: ["Computer Vision", "Deep Learning", "Object Detection"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    achievements: "Accelerated damage assessment and claim validation",
    link: "#"
  },
  {
    id: 5,
    title: "Adversarial Defense Neural Net",
    description: "A set of complex neural network architectures designed to fight and prevent adversarial attacks on AI systems.",
    tags: ["Deep Learning", "Security", "Neural Networks"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    achievements: "2x improvement in model resistance to attacks",
    link: "#"
  },
  {
    id: 6,
    title: "Malware Visualization",
    description: "A static analyzer tool based on computer vision that can detect malware with improved accuracy and reduced computational requirements.",
    tags: ["Machine Learning", "Computer Vision", "Security"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    achievements: "Published in KES 2021 International Conference",
    link: "#"
  }
];

const ProjectsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="bg-secondary/30 py-16 relative overflow-hidden">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100} threshold={0.1}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-primary/5 h-full flex flex-col group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="font-medium text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-3 text-sm text-primary/80 font-medium">
                    {project.achievements}
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  <Button variant="ghost" className="p-0 group" asChild>
                    <a href={project.link} className="flex items-center gap-1 text-primary/80 hover:text-primary transition-colors">
                      View Project
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -z-10">
        <svg width="600" height="600" viewBox="0 0 200 200" className="text-primary/5">
          <path
            fill="currentColor"
            d="M48.2,-69.2C59.3,-60.1,63.2,-42.8,68.1,-26.3C72.9,-9.8,78.7,5.8,76.7,20.6C74.7,35.4,64.8,49.3,51.5,55.9C38.1,62.4,21.2,61.5,6.9,59.5C-7.4,57.4,-19.2,54.1,-33.4,49.1C-47.6,44.2,-64.2,37.5,-69.7,25.8C-75.2,14.1,-69.6,-2.7,-61.6,-16.3C-53.5,-29.9,-43,-40.4,-31.2,-49.2C-19.4,-58.1,-6.2,-65.4,9.3,-67.6C24.8,-69.9,49.7,-67.1,58.4,-72.4C67,-77.6,59.7,-91.1,48.2,-69.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsSection;
