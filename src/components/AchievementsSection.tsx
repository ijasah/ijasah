
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Award, Star, Check, BarChart } from "lucide-react";

const achievements = [
  {
    company: "Cognizant",
    achievements: [
      "GenAI Ideathon Winner",
      "5-star yearly performance review",
      "60% reduction in task completion time",
      "5x increase in productivity"
    ],
    icon: <Award className="h-12 w-12 text-primary" />
  },
  {
    company: "Infosys",
    achievements: [
      "Learning Eklavya Award",
      "INSTA AWARD (Multiple times)",
      "RISE AWARD (Project Excellence)",
      "IBM Advanced Quantum badge"
    ],
    icon: <Star className="h-12 w-12 text-primary" />
  },
  {
    company: "QBurst Technologies",
    achievements: [
      "5% improvement in predicting user purchasing intent",
      "Successful deployment of Car Damage Evaluator",
      "Developed predictive analytics tools for Insurance sector"
    ],
    icon: <Check className="h-12 w-12 text-primary" />
  },
  {
    company: "Publications & Certifications",
    achievements: [
      "Research on Android malware detectors (2021)",
      "Explainable AI in LLMs (2024)",
      "Deep Learning Specialization",
      "5-star problem solving on HackerRank"
    ],
    icon: <BarChart className="h-12 w-12 text-primary" />
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

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-secondary/10" id="achievements">
      <div className="section-container">
        <h2 className="section-title mb-12">Achievements & Impact</h2>
        
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
                    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
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
                          <span className="inline-block p-1 rounded-full bg-primary/20 text-primary mt-0.5">
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
