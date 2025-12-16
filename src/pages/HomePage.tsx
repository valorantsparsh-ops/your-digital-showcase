import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, MapPin, Briefcase, Mail, Github, Linkedin, Instagram, Facebook } from "lucide-react";
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

const workLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Grid Background */}
          <div className="absolute inset-0 grid-overlay opacity-40" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-slow" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/50 p-2 edit-highlight">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    {/* EDIT: Replace with your profile photo */}
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                      YN
                    </div>
                  </div>
                </div>
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

                {/* Role Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
                >
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                    >
                      {role}
                    </span>
                  ))}
                </motion.div>

                {/* Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                >
                  <div className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 edit-highlight">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">Your City, Country</p>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 edit-highlight">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Expertise</p>
                      <p className="text-sm font-medium">Web Dev, AI/ML</p>
                    </div>
                  </div>
                  <div className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 edit-highlight">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Contact</p>
                      <p className="text-sm font-medium">hello@yourname.com</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12"
            >
              {/* Connect with me */}
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex gap-4 edit-highlight">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* See what I'm doing */}
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">See what I'm doing</h3>
                <div className="flex gap-4 edit-highlight">
                  {workLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
