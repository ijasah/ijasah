
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, User, Book, Award, Code, Server, Cloud, Database, Terminal, GitBranch, Docker, Api, Laptop } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Python", level: "Primary" },
        { name: "C/C++", level: "Occasional" },
        { name: "R", level: "Occasional" },
        { name: "SQL", level: "Occasional" },
        { name: "Java", level: "Occasional" }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Google Cloud (GCP)", level: "Advanced" },
        { name: "Vertex AI", level: "Advanced" },
        { name: "IBM Watson", level: "Intermediate" },
        { name: "Azure", level: "Intermediate" },
        { name: "Databricks", level: "Intermediate" }
      ]
    },
    {
      title: "Google Cloud Platform (GCP)",
      icon: <Cloud className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Agent Builder" },
        { name: "Gemini Models" },
        { name: "Google Bucket" },
        { name: "Google Logger (Monitoring)" },
        { name: "Cloud SQL" },
        { name: "Pub/Sub" },
        { name: "App Engine" },
        { name: "Google Colab Workspace" },
        { name: "Cloud Source Repositories" },
        { name: "Cloud Scheduler" },
        { name: "Cloud Build" },
        { name: "Cloud Run" }
      ]
    },
    {
      title: "Generative AI",
      icon: <Server className="h-5 w-5 text-primary" />,
      skills: [
        { name: "LLM Fine-tuning" },
        { name: "LLM Evaluation" },
        { name: "Prompt Engineering" },
        { name: "OpenAI API" },
        { name: "Google PaLM" },
        { name: "LLAMA 2 & 3" },
        { name: "LangChain" },
        { name: "GPT2" },
        { name: "Agentic AI Development" },
        { name: "Multi-Agent Collaboration" },
        { name: "Langflow" },
        { name: "Agno / Phidata" },
        { name: "RAG (Retrieval-Augmented Generation)" },
        { name: "Agentic RAG" },
        { name: "Crew AI" },
        { name: "Embeddings" },
        { name: "Fine-tuning Open-Source Models" },
        { name: "Mistral" }
      ]
    },
    {
      title: "Libraries & Tools",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Matplotlib" },
        { name: "SciPy" },
        { name: "scikit-learn" },
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "Huggingface Transformers" },
        { name: "MLFlow" },
        { name: "FastAPI" },
        { name: "Django" },
        { name: "HTML" }
      ]
    },
    {
      title: "AI/ML Techniques",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Deep Learning (CNN, RNN, DNN)" },
        { name: "Reinforcement Learning (RLHF)" },
        { name: "Explainable AI (XAI, LIME)" },
        { name: "ModelOps" },
        { name: "Predictive Analytics" },
        { name: "Machine Learning (Naive Bayes, Decision Trees, SVM, Random Forest, KNN, K-Means, Hierarchical Clustering)" },
        { name: "Object Detection (RCNN, FRCNN)" },
        { name: "Transformers (BERT, GPT)" },
        { name: "Optimizers (Adam, RMSprop)" },
        { name: "Gradient Descent" },
        { name: "Natural Language Processing (NLP)" }
      ]
    },
    {
      title: "Data Engineering & Infrastructure",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Distributed Computing" },
        { name: "Vector Databases (Chroma, FAISS)" },
        { name: "Docker" },
        { name: "REST APIs" },
        { name: "Git" },
        { name: "DVC (Data Version Control)" },
        { name: "Linux, Windows, macOS" }
      ]
    },
    {
      title: "Containerization & DevOps",
      icon: <Docker className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Docker" },
        { name: "CI/CD Pipelines" },
        { name: "RESTful API Design" },
        { name: "Microservices Architecture" },
        { name: "API Gateways" }
      ]
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Git Version Control" },
        { name: "Jupyter Notebooks" },
        { name: "VS Code" },
        { name: "PyCharm" },
        { name: "DVC (Data Version Control)" }
      ]
    },
    {
      title: "System Architecture",
      icon: <Laptop className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Microservices" },
        { name: "Event-Driven Architecture" },
        { name: "Serverless Computing" },
        { name: "High-Availability Systems" },
        { name: "Scalable Infrastructure" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Cross-functional Team Leadership" },
        { name: "Project Management" },
        { name: "Technical Communication" },
        { name: "Stakeholder Management" },
        { name: "Problem Solving" },
        { name: "Technical Documentation" },
        { name: "Agile Methodologies" }
      ]
    }
  ];

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
              
              <div className="mt-8">
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
            </div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            <RevealOnScroll threshold={0.3} delay={100}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 relative inline-block">
                  Technical Skills
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20"></span>
                </h3>
                
                <div className="flex flex-col space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {skillCategories.map((category, categoryIndex) => (
                    <div 
                      key={category.title}
                      className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    >
                      <h4 className="text-lg font-medium flex items-center gap-2 mb-3">
                        {category.icon} {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1.5 bg-background rounded-full text-sm flex items-center gap-1 hover:shadow-sm transition-all"
                          >
                            {skill.name}
                            {skill.level && (
                              <span className={`ml-1 px-1.5 py-0.5 text-xs rounded ${
                                skill.level === "Primary" ? "bg-green-500/20 text-green-700" : 
                                skill.level === "Advanced" ? "bg-blue-500/20 text-blue-700" :
                                "bg-slate-500/20 text-slate-700"
                              }`}>
                                {skill.level}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
