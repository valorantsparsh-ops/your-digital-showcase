import { motion } from "framer-motion";
import { User, Heart, Code2, Coffee, Lightbulb, Award, GraduationCap, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ProfileImage from "@/components/ProfileImage";

// ═══════════════════════════════════════════════════════════════════════════
// ✏️ EDIT: Your resume URL - Replace "#" with your actual resume link
// ═══════════════════════════════════════════════════════════════════════════
const RESUME_URL = "#";

// ═══════════════════════════════════════════════════════════════════════════
// ✏️ EDIT: Your interests - Update with your actual hobbies/interests
// ═══════════════════════════════════════════════════════════════════════════
const interests = [
  { icon: Code2, label: "Coding", description: "Building things that matter" },
  { icon: Coffee, label: "Coffee", description: "Fuel for creativity" },
  { icon: Lightbulb, label: "Learning", description: "Always exploring new tech" },
  { icon: Heart, label: "Open Source", description: "Contributing to community" },
];

// ═══════════════════════════════════════════════════════════════════════════
// ✏️ EDIT: Your education - Update with your actual education details
// ═══════════════════════════════════════════════════════════════════════════
const education = [
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2019",
    description: "Your specialization or notable achievements",
  },
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2019",
    description: "Your specialization or notable achievements",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// ✏️ EDIT: Your certifications - Update with your actual certifications
// ═══════════════════════════════════════════════════════════════════════════
const certifications = [
  { name: "Certification Name 1", issuer: "Issuing Organization", year: "2023" },
  { name: "Certification Name 2", issuer: "Issuing Organization", year: "2022" },
  { name: "Certification Name 3", issuer: "Issuing Organization", year: "2022" },
];

// Animation variants
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-lg mx-auto"
            >
              A passionate developer who loves creating beautiful and functional web experiences
            </motion.p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
            {/* Bio Section */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-8 mb-12 relative overflow-hidden group"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
                {/* ✏️ EDIT: Add your profile photo */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  {/* Rotating border */}
                  <motion.div
                    animate={{ rotateZ: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-48 h-48 rounded-full border-2 border-dashed border-primary/50"
                  />
                  {/* Static image */}
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
                  {/* ✏️ EDIT: Your name and bio */}
                  <motion.h2 variants={itemVariants} className="font-display text-2xl font-bold mb-4">
                    Hello! I'm Your Name
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-4">
                    Write your bio here. Tell visitors about yourself, your background, and what drives you as a
                    developer. This is your chance to make a personal connection.
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-6">
                    Add more details about your interests, hobbies, or what you do when you're not coding. Make it
                    personal and authentic to who you are.
                  </motion.p>

                  {/* Resume Download Button */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
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
                </div>
              </div>
            </motion.div>

            {/* Interests Grid */}
            <motion.div variants={itemVariants} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-bold text-center mb-8"
              >
                What I Love
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    variants={scaleVariants}
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
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
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
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-primary/30 pl-4 group-hover:border-primary/60 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-medium">{edu.degree}</h3>
                      <p className="text-primary text-sm">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-2">{edu.year}</p>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
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
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
