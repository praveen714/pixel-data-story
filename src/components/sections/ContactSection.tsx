
import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:hello@example.com",
      color: "hover:bg-red-500 hover:text-white",
    },
    {
      name: "Tableau Public",
      icon: <ExternalLink className="h-5 w-5" />,
      url: "https://public.tableau.com/",
      color: "hover:bg-blue-500 hover:text-white",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            formRef.current?.classList.add("animate-fade-in");
            formRef.current?.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding min-h-screen bg-muted/30 dark:bg-muted/10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto">
            Have a data analysis project in mind or want to discuss a potential collaboration?
            I'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="opacity-0 card-data border-primary/10 p-8 rounded-xl"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                  placeholder="I'd like to discuss a data analysis project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSubmitted
                  ? "Message Sent!"
                  : "Send Message"}
              </button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-6">
            <div className="card-data p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Feel free to reach out through the form or connect with me directly on any of these platforms.
                I'm always open to discussing new projects, data challenges, or opportunities.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-4 border border-border rounded-lg hover:border-transparent transition-all ${link.color}`}
                  >
                    <div className="p-2 rounded-full bg-muted mr-4 group-hover:bg-transparent transition-colors">
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.name}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
              
              <div className="mt-12 p-5 bg-muted/50 dark:bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-foreground/80">
                  Monday to Friday: 9:00 AM - 5:00 PM (EST)
                </p>
                <p className="text-foreground/80 mt-1">
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
