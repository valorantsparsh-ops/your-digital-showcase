/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EXPERIENCE PAGE - Work history and career journey
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This page displays your professional experience in a timeline format.
 * 
 * WHAT TO EDIT:
 * - Line 27-77: Your work experience entries
 * 
 * EXPERIENCE STRUCTURE:
 * {
 *   title: "Job Title",
 *   company: "Company Name",
 *   period: "2023 - Present",
 *   location: "City, Country or Remote",
 *   description: "Brief role description",
 *   achievements: ["Achievement 1", "Achievement 2"],
 *   skills: ["Skill 1", "Skill 2"],
 * }
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

/* ═══════════════════════════════════════════════════════════════════════════
 * ✏️ EDIT: Your work experience
 * Add your jobs in reverse chronological order (most recent first)
 * Each entry creates a timeline card with achievements and skills
 * ═══════════════════════════════════════════════════════════════════════════ */
const experiences = [
  {
    title: "Your Job Title",           // ✏️ EDIT: e.g., "Senior Software Engineer"
    company: "Company Name",           // ✏️ EDIT: e.g., "Google"
    period: "2023 - Present",          // ✏️ EDIT: Date range
    location: "Remote / City",         // ✏️ EDIT: Location
    description: "Describe your role and main responsibilities here.",  // ✏️ EDIT
    achievements: [
      "Key achievement or responsibility #1",  // ✏️ EDIT
      "Key achievement or responsibility #2",  // ✏️ EDIT
      "Key achievement or responsibility #3",  // ✏️ EDIT
      "Key achievement or responsibility #4",  // ✏️ EDIT
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],  // ✏️ EDIT
  },
  {
    title: "Previous Job Title",
    company: "Previous Company",
    period: "2021 - 2023",
    location: "City, Country",
    description: "Description of your previous role and what you accomplished.",
    achievements: [
      "Achievement from this role #1",
      "Achievement from this role #2",
      "Achievement from this role #3",
      "Achievement from this role #4",
    ],
    skills: ["Skill A", "Skill B", "Skill C", "Skill D"],
  },
  {
    title: "Earlier Position",
    company: "First Company",
    period: "2019 - 2021",
    location: "On-site",
    description: "Description of your early career experience.",
    achievements: [
      "What you learned or accomplished #1",
      "What you learned or accomplished #2",
      "What you learned or accomplished #3",
    ],
    skills: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    title: "Earlier Position",
    company: "First Company",
    period: "2019 - 2021",
    location: "On-site",
    description: "Description of your early career experience.",
    achievements: [
      "What you learned or accomplished #1",
      "What you learned or accomplished #2",
      "What you learned or accomplished #3",
    ],
    skills: ["Tool 1", "Tool 2", "Tool 3"],
  },
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-full overflow-hidden">
          {/* Page Header */}
          <ScrollAnimationWrapper className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">Career Journey</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Experience</h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto px-2">
              A journey through my professional career and key achievements
            </p>
          </ScrollAnimationWrapper>

          {/* ═══════════════════════════════════════════════════════════
           * TIMELINE
           * Each experience entry is displayed as a card in the timeline
           * ═══════════════════════════════════════════════════════════ */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ScrollAnimationWrapper
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
                className="relative pl-5 sm:pl-6 md:pl-8 pb-6 sm:pb-8 md:pb-12 last:pb-0"
              >
                {/* Timeline line (connects cards) */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[7px] sm:left-[9px] md:left-[11px] top-5 sm:top-6 bottom-0 w-px bg-border" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                </div>

                {/* Experience Card */}
                <div className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 ml-2 sm:ml-3 md:ml-4 hover:border-primary/30 transition-colors duration-300 edit-highlight w-full box-border">
                  {/* Header with title and meta info */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-0.5 sm:mb-1 break-words">{exp.title}</h3>
                      <p className="text-primary font-medium text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="flex flex-row sm:flex-col gap-2 sm:gap-1 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate">{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate">{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements list */}
                  <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-2 sm:mb-3 md:mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                        <span className="break-words">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
