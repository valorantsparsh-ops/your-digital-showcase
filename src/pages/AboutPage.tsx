/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ABOUT PAGE - Personal information and background
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This page showcases your personal story, interests, education, and certifications.
 * 
 * WHAT TO EDIT:
 * - Line 30-35: Your interests/hobbies
 * - Line 42-60: Your education history
 * - Line 67-71: Your certifications
 * - Line 178: Your name
 * - Line 179-186: Your bio paragraphs
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Heart, Code2, Gamepad2, Lightbulb, Award, GraduationCap, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ProfileImage from "@/components/ProfileImage";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import ResumePreviewDialog from "@/components/ResumePreviewDialog";

/* ═══════════════════════════════════════════════════════════════════════════
 * ✏️ EDIT: Your interests/hobbies
 * Each interest has an icon, label, and description
 * Available icons: Code2, Gamepad2, Lightbulb, Heart, Music, Camera, Book, etc.
 * Import additional icons from "lucide-react" as needed
 * ═══════════════════════════════════════════════════════════════════════════ */
const interests = [
  { icon: Code2, label: "Coding", description: "Building things that matter" },
  { icon: Gamepad2, label: "Gaming", description: "Built on grind,focus and dominance" },
  { icon: Lightbulb, label: "Learning", description: "Always exploring new tech" },
  { icon: Heart, label: "Open Source", description: "Contributing to community" },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * ✏️ EDIT: Your education history
 * Add your degrees, universities, and years
 * You can add multiple education entries
 * ═══════════════════════════════════════════════════════════════════════════ */
const education = [
  {
    degree: "Your Degree",                    // e.g., "Bachelor of Technology"
    institution: "University Name",           // e.g., "MIT"
    year: "2019",                             // Graduation year
    description: "Your specialization or notable achievements",
  },
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2019",
    description: "Your specialization or notable achievements",
  },
];

// Additional education (displayed in second column if needed)
const education2 = [
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2019",
    description: "Your specialization or notable achievements",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * ✏️ EDIT: Your certifications
 * Add your professional certifications
 * ═══════════════════════════════════════════════════════════════════════════ */
const certifications = [
  { name: "Certification Name 1", issuer: "Issuing Organization", year: "2023" },
  { name: "Certification Name 2", issuer: "Issuing Organization", year: "2022" },
  { name: "Certification Name 3", issuer: "Issuing Organization", year: "2022" },
];

/* ═══════════════════════════════════════════════════════════════════════════
 * Animation variants for smooth page transitions
 * ═══════════════════════════════════════════════════════════════════════════ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const AboutPage = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResumePreviewDialog open={resumeOpen} onOpenChange={setResumeOpen} />
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* ═══════════════════════════════════════════════════════════
           * PAGE HEADER
           * ═══════════════════════════════════════════════════════════ */}
          <ScrollAnimationWrapper className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Get to Know Me</span>
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A passionate developer who loves creating beautiful and functional web experiences
            </p>
          </ScrollAnimationWrapper>

          <div className="max-w-5xl mx-auto">
            {/* ═══════════════════════════════════════════════════════════
             * BIO SECTION - Profile image and personal bio
             * ═══════════════════════════════════════════════════════════ */}
            <ScrollAnimationWrapper className="mb-12">
              <motion.div whileHover={{ y: -5 }} className="glass-card rounded-xl p-8 relative overflow-hidden group">
                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
                  {/* Profile Image with rotating border */}
                  <motion.div className="relative">
                    <motion.div
                      animate={{ rotateZ: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-48 h-48 rounded-full border-2 border-dashed border-primary/50"
                    />
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 overflow-hidden">
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ProfileImage />
                      </motion.div>
                    </div>
                    {/* Pulsing rings */}
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

                  <div className="flex-1 text-center lg:text-left">
                    {/* ✏️ EDIT: Your name and bio paragraphs */}
                    <h2 className="font-display text-2xl font-bold mb-4">Hello! I'm Your Name</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Write your bio here. Tell visitors about yourself, your background, and what drives you as a
                      developer. This is your chance to make a personal connection.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Add more details about your interests, hobbies, or what you do when you're not coding. Make it
                      personal and authentic to who you are.
                    </p>

                    {/* Resume Download Button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2 shadow-lg shadow-primary/25"
                        onClick={() => setResumeOpen(true)}
                      >
                        <Download className="w-5 h-5" />
                        Download Resume
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* ═══════════════════════════════════════════════════════════
             * INTERESTS GRID - Your hobbies and passions
             * ═══════════════════════════════════════════════════════════ */}
            <ScrollAnimationWrapper delay={0.1} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-center mb-8">What I Love</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <ScrollAnimationWrapper key={interest.label} delay={index * 0.1} direction="scale">
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <interest.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      </motion.div>
                      <h3 className="font-medium mb-1">{interest.label}</h3>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </motion.div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </ScrollAnimationWrapper>

            {/* ═══════════════════════════════════════════════════════════
             * EDUCATION & CERTIFICATIONS - Two column layout
             * ═══════════════════════════════════════════════════════════ */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Column */}
              <ScrollAnimationWrapper direction="left">
                <motion.div whileHover={{ y: -5 }}>
                  <div className="glass-card rounded-xl p-6 h-full group">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h2 className="font-display text-xl font-bold">Education</h2>
                    </div>
                    <div className="space-y-5">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-primary/30 pl-4 group-hover:border-primary/60 transition-colors"
                        >
                          <h3 className="font-medium">{edu.degree}</h3>
                          <p className="text-primary text-sm">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm mb-2">{edu.year}</p>
                          <p className="text-muted-foreground text-sm">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>

              {/* Certifications Column */}
              <ScrollAnimationWrapper direction="right">
                <motion.div whileHover={{ y: -5 }}>
                  <div className="glass-card rounded-xl p-6 h-full group">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h2 className="font-display text-xl font-bold">Certifications</h2>
                    </div>
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <h3 className="font-medium text-sm">{cert.name}</h3>
                          <p className="text-muted-foreground text-xs">
                            {cert.issuer} • {cert.year}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
