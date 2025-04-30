
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const publications = [
  {
    id: 1,
    title: "Vulnerability evaluation of android malware detectors against adversarial examples",
    journal: "Procedia Computer Science 192 (2021): 3320-3331",
    authors: "Ah, Ijas, P. Vinod, Akka Zemmari, D. Harikrishnan, Godvin Poulose, Don Jose, Francesco Mercaldo, Fabio Martinelli, and Antonella Santone",
    link: "#"
  },
  {
    id: 2,
    title: "Exploring Explainable AI in Large Language Models: Enhancing Transparency and Trust",
    journal: "11th International Conference on Advances in Computing and Communications (ICACC), 2024",
    authors: "I. A. H, A. A. Jo and E. D. Raj",
    link: "https://doi.org/10.1109/ICACC63692.2024.10845370"
  }
];

const Publications = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Publications</h2>
      
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <RevealOnScroll key={pub.id} delay={index * 200}>
            <Card className="border border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-start gap-1 group">
                  <span>{pub.title}</span>
                  <a href={pub.link} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 inline ml-1" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                <p className="text-xs text-muted-foreground italic">{pub.journal}</p>
              </CardContent>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Publications;
