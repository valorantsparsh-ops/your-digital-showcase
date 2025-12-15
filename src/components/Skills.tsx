import { motion } from "framer-motion";
import { Sparkles, Flame } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "Modern web interfaces",
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
    skills: [
      { name: "VS Code", proficiency: "Expert", hot: true },
      { name: "Git", proficiency: "Advanced", hot: false },
      { name: "Docker", proficiency: "Intermediate", hot: false },
      { name: "AWS", proficiency: "Intermediate", hot: false },
      { name: "Figma", proficiency: "Advanced", hot: false },
    ],
  },
];

const proficiencyColors: Record<string, string> = {
  Expert: "text-green-400",
  Advanced: "text-blue-400",
  Intermediate: "text-yellow-400",
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Skills & Technologies
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A comprehensive overview of my technical expertise across various development domains and tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
            >
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
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
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Proficiency</span>
                        <span className={`text-xs font-medium ${proficiencyColors[skill.proficiency]}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
