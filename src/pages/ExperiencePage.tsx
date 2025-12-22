import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

/* ✏️ EDIT: Replace with your actual work experience */
const experiences = [
  {
    title: "Your Job Title", /* ✏️ EDIT */
    company: "Company Name", /* ✏️ EDIT */
    period: "2023 - Present", /* ✏️ EDIT */
    location: "Remote / City", /* ✏️ EDIT */
    description: "Describe your role and main responsibilities here.", /* ✏️ EDIT */
    achievements: [
      "Key achievement or responsibility #1", /* ✏️ EDIT */
      "Key achievement or responsibility #2", /* ✏️ EDIT */
      "Key achievement or responsibility #3", /* ✏️ EDIT */
      "Key achievement or responsibility #4", /* ✏️ EDIT */
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"], /* ✏️ EDIT */
  },
  {
    title: "Previous Job Title", /* ✏️ EDIT */
    company: "Previous Company", /* ✏️ EDIT */
    period: "2021 - 2023", /* ✏️ EDIT */
    location: "City, Country", /* ✏️ EDIT */
    description: "Description of your previous role and what you accomplished.", /* ✏️ EDIT */
    achievements: [
      "Achievement from this role #1", /* ✏️ EDIT */
      "Achievement from this role #2", /* ✏️ EDIT */
      "Achievement from this role #3", /* ✏️ EDIT */
      "Achievement from this role #4", /* ✏️ EDIT */
    ],
    skills: ["Skill A", "Skill B", "Skill C", "Skill D"], /* ✏️ EDIT */
  },
  {
    title: "Earlier Position", /* ✏️ EDIT */
    company: "First Company", /* ✏️ EDIT */
    period: "2019 - 2021", /* ✏️ EDIT */
    location: "On-site", /* ✏️ EDIT */
    description: "Description of your early career experience.", /* ✏️ EDIT */
    achievements: [
      "What you learned or accomplished #1", /* ✏️ EDIT */
      "What you learned or accomplished #2", /* ✏️ EDIT */
      "What you learned or accomplished #3", /* ✏️ EDIT */
    ],
    skills: ["Tool 1", "Tool 2", "Tool 3"], /* ✏️ EDIT */
  },
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Career Journey
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A journey through my professional career and key achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content Card */}
                <div className="glass-card rounded-xl p-6 ml-4 hover:border-primary/30 transition-colors duration-300 edit-highlight">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
