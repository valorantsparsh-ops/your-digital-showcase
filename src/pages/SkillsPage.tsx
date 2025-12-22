import { motion } from "framer-motion";
import { Sparkles, Flame, Code2, Database, Wrench, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "Modern web interfaces",
    icon: Code2,
    skills: [
      { name: "Next.js 15", proficiency: "Advanced", hot: true },
      { name: "React", proficiency: "Advanced", hot: false },
      { name: "TailwindCSS", proficiency: "Expert", hot: false },
      { name: "TypeScript", proficiency: "Advanced", hot: false },
      { name: "Framer Motion", proficiency: "Intermediate", hot: false },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & Database",
    icon: Database,
    skills: [
      { name: "Node.js", proficiency: "Advanced", hot: true },
      { name: "MongoDB", proficiency: "Advanced", hot: false },
      { name: "Express.js", proficiency: "Advanced", hot: true },
      { name: "PostgreSQL", proficiency: "Intermediate", hot: false },
      { name: "GraphQL", proficiency: "Intermediate", hot: false },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Development & Productivity",
    icon: Wrench,
    skills: [
      { name: "VS Code", proficiency: "Expert", hot: true },
      { name: "Git", proficiency: "Advanced", hot: false },
      { name: "Docker", proficiency: "Intermediate", hot: false },
      { name: "AWS", proficiency: "Intermediate", hot: false },
      { name: "Figma", proficiency: "Advanced", hot: false },
    ],
  },
];

/* ✏️ EDIT: Add your certificates here */
const certificates = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" }, /* ✏️ EDIT */
  { name: "Google Data Analytics", issuer: "Google", year: "2023" }, /* ✏️ EDIT */
  { name: "Meta Front-End Developer", issuer: "Meta", year: "2023" }, /* ✏️ EDIT */
];

const proficiencyColors: Record<string, string> = {
  Expert: "text-green-400 bg-green-400/10",
  Advanced: "text-blue-400 bg-blue-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
};

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Technical Stack
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Skills</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A comprehensive overview of my technical expertise across various development domains and tools
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              >
                <div className="glass-card rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-sm">{skill.name}</span>
                          {skill.hot && (
                            <span className="flex items-center gap-1 text-xs text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full">
                              <Flame className="w-3 h-3" />
                              Hot
                            </span>
                          )}
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${proficiencyColors[skill.proficiency]}`}>
                          {skill.proficiency}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">Certificates</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 edit-highlight">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
