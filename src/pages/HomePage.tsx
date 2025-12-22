import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, Mail, Github, Linkedin, Instagram, Facebook, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roles = [
  "AI Enthusiast",
  "Machine Learning Engineer",
  "Deep Learning Expert",
  "Computer Vision Researcher",
  "Developer",
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@yourname.com", label: "Email" },
  { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },
];

/* ✏️ EDIT: Your work/coding profile links */
const workLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Code2, href: "https://leetcode.com/yourusername", label: "LeetCode" },
];

/* ✏️ EDIT: Your resume URL */
const RESUME_URL = "#";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Animated Grid Background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 grid-overlay" 
          />
          
          {/* Animated Gradient Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" 
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${10 + (i * 6)}%`,
                  top: `${20 + (i * 5)}%`,
                }}
                animate={{ 
                  y: [-20, -60, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Profile Image with floating animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ 
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  y: { duration: 3, repeat: Infinity }
                }}
                className="relative"
              >
                <motion.div 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/50 p-2 edit-highlight"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <motion.div 
                      className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      YN
                    </motion.div>
                  </div>
                </motion.div>
                {/* Glowing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                >
                  Hi, I'm{" "}
                  <span className="gradient-text edit-highlight">Your Name</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-muted-foreground mb-6 edit-highlight inline-block"
                >
                  Full Stack Developer | Tech Explorer | Problem Solver
                </motion.p>

                {/* Role Tags with stagger animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
                >
                  {roles.map((role, index) => (
                    <motion.span
                      key={role}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                      className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      {role}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                >
                  {[
                    { icon: MapPin, label: "Location", value: "Your City, Country" },
                    { icon: Briefcase, label: "Expertise", value: "Web Dev, AI/ML" },
                    { icon: Mail, label: "Contact", value: "hello@yourname.com" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 edit-highlight cursor-pointer"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Resume Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex justify-center lg:justify-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2 shadow-lg shadow-primary/25"
                    >
                      <a href={RESUME_URL} download target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5" />
                        Download Resume
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12"
            >
              {/* Connect with me */}
              <div className="text-center">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg font-medium mb-4"
                >
                  Connect with me
                </motion.h3>
                <div className="flex gap-4 edit-highlight">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* See what I'm doing */}
              <div className="text-center">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg font-medium mb-4"
                >
                  See what I'm doing
                </motion.h3>
                <div className="flex gap-4 edit-highlight">
                  {workLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
