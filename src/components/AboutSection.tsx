
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, User, Book } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript/TypeScript", 
    "React & Next.js", 
    "UX/UI Design", 
    "Tailwind CSS", 
    "Node.js", 
    "Figma"
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Background</h3>
                <p className="text-muted-foreground">
                  With over 5 years experience in design and development, I create purposeful digital products.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  I've worked with startups and established companies to build products that users love.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor's in Computer Science with focus on human-computer interaction and design systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I'm passionate about creating intuitive, accessible, and beautiful digital experiences. 
              My approach combines technical expertise with a strong design sensibility.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding or designing, you'll find me exploring photography, 
              reading about design systems, or hiking in nature to find new inspiration.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
