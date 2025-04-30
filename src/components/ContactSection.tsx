
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "./RevealOnScroll";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_id";
const EMAILJS_TEMPLATE_ID = "template_id";
const EMAILJS_PUBLIC_KEY = "public_key";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Log the form data to the console
      console.log("Form data:", data);
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "ijas.ah96@gmail.com", // Your email address
      };
      
      // Use EmailJS to send the email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      // Show success toast
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset the form
      form.reset();
      
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show error toast
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 relative">
      <div className="section-container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <RevealOnScroll threshold={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:ijas.ah96@gmail.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    ijas.ah96@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/ijas-ah" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/ijas-ah
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg mt-8">
                <h4 className="font-semibold mb-2">How I Work</h4>
                <p className="text-muted-foreground">
                  I work at a moderate-to-fast pace for known tasks, slow down for complex problems, 
                  and maintain sharp boundaries for work-life balance. I'm organized with calendars 
                  and playbooks yet flexible enough to seize creative bursts.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll threshold={0.2} delay={100}>
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-sm text-muted-foreground text-center">
                <p>
                  I'll typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
