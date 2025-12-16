import { motion } from "framer-motion";
import { User, Heart, Code2, Coffee, Lightbulb, Award, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ✏️ EDIT: Your interests */
const interests = [
  { icon: Code2, label: "Coding", description: "Building things that matter" },
  { icon: Coffee, label: "Coffee", description: "Fuel for creativity" },
  { icon: Lightbulb, label: "Learning", description: "Always exploring new tech" },
  { icon: Heart, label: "Open Source", description: "Contributing to community" },
];

/* ✏️ EDIT: Your education */
const education = [
  {
    degree: "Your Degree", /* ✏️ EDIT */
    institution: "University Name", /* ✏️ EDIT */
    year: "2019", /* ✏️ EDIT */
    description: "Your specialization or notable achievements", /* ✏️ EDIT */
  },
];

/* ✏️ EDIT: Your certifications */
const certifications = [
  { name: "Certification Name 1", issuer: "Issuing Organization", year: "2023" }, /* ✏️ EDIT */
  { name: "Certification Name 2", issuer: "Issuing Organization", year: "2022" }, /* ✏️ EDIT */
  { name: "Certification Name 3", issuer: "Issuing Organization", year: "2022" }, /* ✏️ EDIT */
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Get to Know Me
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A passionate developer who loves creating beautiful and functional web experiences
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-xl p-8 mb-12 edit-highlight"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* ✏️ EDIT: Add your profile photo */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <div className="w-44 h-44 rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-primary">
                    YN {/* ✏️ EDIT: Your initials or photo */}
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  {/* ✏️ EDIT: Your name and bio */}
                  <h2 className="font-display text-2xl font-bold mb-4">Hello! I'm Your Name</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Write your bio here. Tell visitors about yourself, your background, 
                    and what drives you as a developer. This is your chance to make a personal connection.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Add more details about your interests, hobbies, or what you do when you're not coding. 
                    Make it personal and authentic to who you are.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold text-center mb-8">What I Love</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
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
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="glass-card rounded-xl p-6 h-full edit-highlight">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-bold">Education</h2>
                  </div>
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <h3 className="font-medium">{edu.degree}</h3>
                      <p className="text-primary text-sm">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mb-2">{edu.year}</p>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="glass-card rounded-xl p-6 h-full edit-highlight">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-bold">Certifications</h2>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="p-3 rounded-lg bg-secondary/30">
                        <h3 className="font-medium text-sm">{cert.name}</h3>
                        <p className="text-muted-foreground text-xs">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
