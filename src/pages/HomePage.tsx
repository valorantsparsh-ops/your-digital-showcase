import { motion } from "framer-motion";
import { MapPin, Briefcase, Mail, Github, Linkedin, Instagram, Facebook, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

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
/* LeetCode SVG Icon Component */
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.120 1.631l6.089 6.018a1.374 1.374 0 0 0 1.937-.008l6.089-6.018a5.938 5.938 0 0 0 1.120-1.631 5.83 5.83 0 0 0 .349-1.017 5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104l-3.854-4.126L14.443.438A1.374 1.374 0 0 0 13.483 0zm-2.484 7.05 3.957 4.233L17.983 9.1a3.773 3.773 0 0 1 .859 1.5 3.774 3.774 0 0 1-.012 2.116 3.773 3.773 0 0 1-.859 1.5l-4.982 4.918-4.982-4.918a3.773 3.773 0 0 1-.859-1.5 3.774 3.774 0 0 1 .012-2.116 3.773 3.773 0 0 1 .859-1.5l3.957-4.05zm-3.957 4.233a1.374 1.374 0 0 0-.329.89 1.374 1.374 0 0 0 .329.89L11 17.05l4.038-3.987a1.374 1.374 0 0 0 .329-.89 1.374 1.374 0 0 0-.329-.89L11 7.296 7.042 11.283z"/>
  </svg>
);

const workLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/yourusername", label: "LeetCode", isCustomIcon: true },
];

/* ✏️ EDIT: Your resume URL */
const RESUME_URL = "#";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Profile Image - only border rotates */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
              >
                {/* Rotating border */}
                <motion.div 
                  className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/50"
                  animate={{ rotateZ: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                {/* Static image container */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-2 edit-highlight">
                  <motion.div 
                    className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                      YN
                    </div>
                  </motion.div>
                </div>
                {/* Pulsing glow rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/20"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
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
                      {'isCustomIcon' in link ? (
                        <link.icon />
                      ) : (
                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
