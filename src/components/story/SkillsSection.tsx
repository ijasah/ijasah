
import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Terminal } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "./storyAnimations";

const SkillsSection = () => {
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
        { name: "Embeddings" }
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
      title: "Soft Skills",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: [
        { name: "Cross-functional Team Leadership" },
        { name: "Project Management" },
        { name: "Technical Communication" },
        { name: "Stakeholder Management" }
      ]
    }
  ];

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
          <Code className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Technical Skills</h3>
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            variants={fadeIn}
            custom={categoryIndex}
            className="bg-primary/5 p-4 rounded-lg"
          >
            <h4 className="text-lg font-medium flex items-center gap-2 mb-3">
              {category.icon} {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill.name}
                  variants={slideIn}
                  custom={skillIndex}
                  className="px-3 py-1.5 bg-background rounded-full text-sm flex items-center gap-1"
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
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
