
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Minimalist Design",
    excerpt: "Explore why less is more in modern web design and how to achieve clean, functional interfaces.",
    date: "April 10, 2023",
    category: "Design",
    link: "#"
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    excerpt: "Learn techniques to improve your React application's performance and user experience.",
    date: "March 22, 2023",
    category: "Development",
    link: "#"
  },
  {
    id: 3,
    title: "User Experience Principles for Developers",
    excerpt: "Essential UX principles that every developer should know when building interfaces.",
    date: "February 15, 2023",
    category: "UX/UI",
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <CardTitle className="font-serif">{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <Button variant="link" className="p-0" asChild>
                  <a href={post.link}>Read More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
