
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A minimalist portfolio website built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1pbmltYWxpc3QlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with a focus on user experience.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1565171777071-28d7326be673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1pbmltYWxpc3QlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A clean and efficient task management application with drag-and-drop functionality.",
    tags: ["React", "Redux", "Firebase"],
    image: "https://images.unsplash.com/photo-1665823258007-f451e3ef27fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1pbmltYWxpc3QlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-secondary/30 py-16">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="p-4 pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className="p-0" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
