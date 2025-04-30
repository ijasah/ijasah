
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceCard = ({ title, company, period, description, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:shadow-md transition-all duration-300 border-primary/10 h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span>{company}</span>
            <span className="hidden sm:inline">•</span>
            <span>{period}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-muted-foreground">{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
