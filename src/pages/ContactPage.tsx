import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { sendEmail, contactFormSchema } from "@/lib/emailjs";
import { useLocalStorage } from "@/hooks/useLocalStorage";

/* ✏️ EDIT: Your social links */
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" }, /* ✏️ EDIT */
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" }, /* ✏️ EDIT */
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" }, /* ✏️ EDIT */
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Use localStorage to remember user's name and email for convenience
  const [savedName, setSavedName] = useLocalStorage('contact_name', '');
  const [savedEmail, setSavedEmail] = useLocalStorage('contact_email', '');
  
  const [formData, setFormData] = useState({
    name: savedName,
    email: savedEmail,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const newErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    const response = await sendEmail(formData);
    
    setIsSubmitting(false);
    
    if (response.success) {
      // Save name and email to localStorage for future use
      setSavedName(formData.name);
      setSavedEmail(formData.email);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: formData.name, email: formData.email, subject: "", message: "" });
    } else {
      toast({
        title: "Failed to send",
        description: response.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <ScrollAnimationWrapper className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <ScrollAnimationWrapper direction="left">
              <div className="glass-card rounded-xl p-8 h-full contact-card-hover">
                <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  {/* ✏️ EDIT: Your email */}
                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-primary/5 cursor-pointer group"
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:your@email.com"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        your@email.com
                      </a>
                    </div>
                  </motion.div>

                  {/* ✏️ EDIT: Your phone */}
                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-primary/5 cursor-pointer group"
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </motion.div>

                  {/* ✏️ EDIT: Your location */}
                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-primary/5 cursor-pointer group"
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Your City, Country</p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                        aria-label={social.label}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Form */}
            <ScrollAnimationWrapper direction="right" delay={0.1}>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
                <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`bg-secondary/50 border-border focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                        required
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`bg-secondary/50 border-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                        required
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`bg-secondary/50 border-border focus:border-primary ${errors.subject ? 'border-destructive' : ''}`}
                      required
                    />
                    {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`bg-secondary/50 border-border focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                      required
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
