
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import Publications from "@/components/Publications";
import SkillBar from "@/components/SkillBar";
import { Briefcase, Award, Star, FileText } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const experiences = [
  {
    title: "Senior Associate, Data Scientist | AI Engineer | Generative AI Engineer",
    company: "Cognizant",
    period: "2022-Present",
    description: [
      "Led the development and deployment of a generative AI solution for a high-profile client, automating content creation processes and reducing task completion time by ~60%, resulting in a 5x increase in productivity and servicing over 40,000 users with 99.9% uptime on GCP.",
      "Worked extensively with closed-source LLMs, including OpenAI LLMs and Google Gemini LLM, optimizing and fine tuning models for client-specific needs.",
      "Led end to end development of POC and subsequently MVP for GENERATIVE PRESENTATION TOOL, a generative ai powered business pitch generator that automatically creates structured, professional presentations from domain-specific data.",
      "Successfully secured client contracts through proof-of-concept (POC) demonstrations, showcasing the tool's ability to adapt to diverse business contexts and produce high-quality, impactful presentations.",
      "Contributed in developing a highly scalable, high speed, efficient deep learning based text classifier for a top retail client that can classify retail products into 1000's of categories."
    ]
  },
  {
    title: "Data Scientist",
    company: "QBurst Technologies",
    period: "2022",
    description: [
      "Focused on developing AI solutions in the insurance & finance and hi-tech domains, enhancing operational efficiency and customer engagement.",
      "Worked on the CAR DAMAGE EVALUATOR project (an object detection tool to assess and evaluate damages), improving assessment faster and there by validating claims faster.",
      "Developed predictive analytics tool (INSURE AWARE) for the Insurance and Finance sectors, leading to a 5% improvement in predicting user purchasing intent.",
      "Deployed AI models served through FastAPI and Django."
    ]
  },
  {
    title: "Systems Engineer - R&D | Center of Excellence (ML, DL)",
    company: "Trivandrum, Bangalore",
    period: "2019-2022",
    description: [
      "Worked across multiple sectors including finance, oil and gas, and telecom, applying AI and optimization techniques to solve industry challenges, increasing operational efficiency by streamlining processes and improving decision-making models.",
      "Led a research project to develop advanced defenses against adversarial attacks on neural networks, resulting in a 2x improvement in the model's ability to resist attacks, as measured by a specialized adversarial dataset.",
      "Conducted research across AI domains, including explainable AI, natural language processing (NLP), computer vision, privacy-based AI, and responsible AI, delivering practical solutions for various sectors.",
      "Guided interns and conducted comparative studies on Explainable AI and Federated Learning, contributing to research and development efforts."
    ]
  }
];

const skills = [
  { name: "Python & Data Science Libraries", percentage: 95 },
  { name: "Machine Learning", percentage: 90 },
  { name: "Deep Learning", percentage: 88 },
  { name: "Generative AI & LLMs", percentage: 92 },
  { name: "Cloud Platforms (GCP, Azure)", percentage: 85 },
  { name: "Computer Vision", percentage: 80 },
  { name: "Natural Language Processing", percentage: 88 },
  { name: "Docker & Deployment", percentage: 75 }
];

const certifications = [
  "Deep learning specialization (Coursera)",
  "Infosys Certified Global Agile Developer",
  "Infosys Certified open chain practitioner",
  "Infosys Certified Big Data Developer",
  "Unix Fundamentals - Infosys Certification",
  "Infosys Certified Data Science using R Professional",
  "IBM Applied AI Professional Certificate",
  "Infosys Certified Python Programmer",
  "Infosys Certified Python Associate",
  "Certified Ethical Hacker (Expired)"
];

const awards = [
  "5 star rating - yearly review (Cognizant)",
  "Cognizant GenAI ideathon winner",
  "Learning Eklavya award",
  "INSTA AWARD (Multiple times, for Guiding ML Research and performance)",
  "RISE AWARD (Multiple times, Project Excellence)",
  "IBM Advanced Quantum badge for qiskit challenge 2021",
  "Techzooka competition award by Infosys (for presenting AI)"
];

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        
        <main>
          <section className="pt-32 pb-24 relative overflow-hidden">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
                <p className="text-muted-foreground">
                  My journey as a Data Scientist and AI Engineer, working across multiple sectors and technologies.
                </p>
              </motion.div>
              
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Work History</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {experiences.map((exp, index) => (
                  <ExperienceCard 
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold">Technical Skills</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <SkillBar 
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={index * 100}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <FileText className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold">Certifications</h2>
                  </div>
                  
                  <motion.ul
                    className="space-y-2 mb-10"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {certifications.map((cert, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-2"
                        variants={item}
                      >
                        <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-muted-foreground">{cert}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-semibold">Awards</h2>
                  </div>
                  
                  <motion.ul
                    className="space-y-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {awards.map((award, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-2"
                        variants={item}
                      >
                        <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs shrink-0 mt-0.5">
                          ★
                        </span>
                        <span className="text-muted-foreground">{award}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
              
              <Publications />
            </div>
            
            <div className="absolute -z-10 top-0 right-0 opacity-5">
              <svg width="800" height="800" viewBox="0 0 200 200">
                <path
                  fill="currentColor"
                  d="M46.5,-78.3C60.2,-71.6,71.5,-59.5,79.2,-45.6C86.9,-31.7,91,-16,90.4,-0.7C89.8,14.6,84.5,29.3,76.6,42.6C68.7,55.9,58.3,67.8,45.1,74.9C31.9,82.1,15.9,84.4,0.1,84.3C-15.8,84.1,-31.6,81.5,-44.9,73.8C-58.2,66.1,-69,53.4,-76.4,39.1C-83.9,24.8,-87.9,8.9,-85.8,-5.9C-83.7,-20.8,-75.4,-34.6,-65.5,-46.7C-55.6,-58.8,-44,-69.3,-30.8,-76.5C-17.7,-83.7,-2.9,-87.7,11.3,-85.4C25.5,-83.1,50.9,-74.6,46.5,-78.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </section>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default Experience;
