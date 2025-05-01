
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Award, Star, Check, BarChart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    company: "Cognizant",
    achievements: [
      "GenAI Ideathon Winner",
      "5-star yearly performance review",
      "60% reduction in task completion time",
      "5x increase in productivity"
    ],
    icon: <Award className="h-12 w-12 text-primary" />,
    color: "bg-blue-500/20 text-blue-600 dark:text-blue-400"
  },
  {
    company: "Infosys",
    achievements: [
      "Learning Eklavya Award",
      "INSTA AWARD (Multiple times)",
      "RISE AWARD (Project Excellence)",
      "IBM Advanced Quantum badge"
    ],
    icon: <Star className="h-12 w-12 text-primary" />,
    color: "bg-purple-500/20 text-purple-600 dark:text-purple-400"
  },
  {
    company: "QBurst Technologies",
    achievements: [
      "5% improvement in predicting user purchasing intent",
      "Successful deployment of Car Damage Evaluator",
      "Developed predictive analytics tools for Insurance sector"
    ],
    icon: <Check className="h-12 w-12 text-primary" />,
    color: "bg-green-500/20 text-green-600 dark:text-green-400"
  },
  {
    company: "Publications & Certifications",
    achievements: [
      "Research on Android malware detectors (2021)",
      "Explainable AI in LLMs (2024)",
      "Deep Learning Specialization",
      "5-star problem solving on HackerRank"
    ],
    icon: <BarChart className="h-12 w-12 text-primary" />,
    color: "bg-amber-500/20 text-amber-600 dark:text-amber-400"
  }
];

const statItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    }
  })
};

const skillMetrics = [
  { name: 'Python', value: 90 },
  { name: 'Machine Learning', value: 85 },
  { name: 'Deep Learning', value: 80 },
  { name: 'NLP', value: 85 },
  { name: 'Generative AI', value: 95 },
  { name: 'LLM Fine-tuning', value: 85 },
  { name: 'RAG', value: 90 },
  { name: 'Cloud (GCP)', value: 80 },
];

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5" id="achievements">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16 text-center"
        >
          <h2 className="section-title mb-4">My Impact & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and recognitions throughout my professional journey that showcase my 
            expertise and contributions in the field of AI and data science.
          </p>
        </motion.div>
        
        {/* Skills Metrics Visualization */}
        <RevealOnScroll threshold={0.1}>
          <Card className="p-6 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Technical Proficiency
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Self-assessed competency levels in core technical areas
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {skillMetrics.map((skill, i) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <RevealOnScroll key={index} threshold={0.1} delay={index * 100}>
              <motion.div 
                className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    }
                  }
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full ${item.color} flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.company}</h3>
                  </div>
                  
                  <div className="mt-2">
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-2"
                          variants={statItem}
                          custom={i}
                        >
                          <span className={`inline-block p-1 rounded-full ${item.color} mt-0.5`}>
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
