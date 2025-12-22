import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Sparkles, Flame, Code2, Database, Wrench, Award, 
  Zap, TrendingUp, Layers, Terminal, Palette, Cloud,
  Brain, Cpu, Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ✏️ EDIT: Your skill categories */
const skillCategories = [
  {
    title: "Frontend",
    subtitle: "Modern web interfaces",
    icon: Palette,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "React", proficiency: 90, hot: true },
      { name: "Next.js", proficiency: 85, hot: true },
      { name: "TypeScript", proficiency: 88, hot: false },
      { name: "TailwindCSS", proficiency: 95, hot: false },
      { name: "Framer Motion", proficiency: 75, hot: false },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & Database",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", proficiency: 88, hot: true },
      { name: "Python", proficiency: 82, hot: true },
      { name: "MongoDB", proficiency: 85, hot: false },
      { name: "PostgreSQL", proficiency: 78, hot: false },
      { name: "GraphQL", proficiency: 72, hot: false },
    ],
  },
  {
    title: "AI/ML",
    subtitle: "Machine Learning",
    icon: Brain,
    color: "from-rose-500 to-pink-500",
    skills: [
      { name: "TensorFlow", proficiency: 80, hot: true },
      { name: "PyTorch", proficiency: 75, hot: true },
      { name: "OpenCV", proficiency: 78, hot: false },
      { name: "Scikit-learn", proficiency: 82, hot: false },
      { name: "Keras", proficiency: 76, hot: false },
    ],
  },
  {
    title: "DevOps",
    subtitle: "Cloud & Tools",
    icon: Cloud,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Docker", proficiency: 80, hot: true },
      { name: "AWS", proficiency: 75, hot: false },
      { name: "Git", proficiency: 92, hot: false },
      { name: "CI/CD", proficiency: 78, hot: false },
      { name: "Linux", proficiency: 85, hot: false },
    ],
  },
];

/* ✏️ EDIT: Your core/featured skills */
const coreSkills = [
  { name: "Problem Solving", icon: Zap, level: 95 },
  { name: "System Design", icon: Layers, level: 88 },
  { name: "Clean Code", icon: Terminal, level: 92 },
  { name: "Performance", icon: TrendingUp, level: 85 },
];

/* ✏️ EDIT: Add your certificates here */
const certificates = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" }, /* ✏️ EDIT */
  { name: "Google Data Analytics", issuer: "Google", year: "2023" }, /* ✏️ EDIT */
  { name: "Meta Front-End Developer", issuer: "Meta", year: "2023" }, /* ✏️ EDIT */
];

const SkillBar = ({ skill, index, categoryColor }: { skill: { name: string; proficiency: number; hot: boolean }; index: number; categoryColor: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm group-hover:text-foreground transition-colors">
            {skill.name}
          </span>
          {skill.hot && (
            <motion.span 
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className="flex items-center gap-1 text-xs text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full"
            >
              <Flame className="w-3 h-3" />
              Hot
            </motion.span>
          )}
        </div>
        <motion.span 
          animate={{ scale: isHovered ? 1.2 : 1 }}
          className="text-xs font-bold text-muted-foreground"
        >
          {skill.proficiency}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${categoryColor} rounded-full relative`}
        >
          <motion.div
            animate={{ 
              opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
              x: isHovered ? [0, 5, 0] : 0 
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const OrbitingSkill = ({ skill, index, total }: { skill: typeof coreSkills[0]; index: number; total: number }) => {
  const angle = (index / total) * 360;
  const radius = 120;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: [0, 360],
      }}
      transition={{ 
        opacity: { duration: 0.5, delay: index * 0.2 },
        scale: { duration: 0.5, delay: index * 0.2 },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
      }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
      }}
      className="group"
    >
      <motion.div 
        whileHover={{ scale: 1.2 }}
        style={{ transform: `rotate(-${angle}deg)` }}
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
          <skill.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-xs font-medium">{skill.name}</p>
          <p className="text-xs text-primary">{skill.level}%</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
          <div className="absolute inset-0 grid-overlay opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Technical Arsenal</span>
            </motion.div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Skills</span> & Expertise
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Crafting digital experiences with cutting-edge technologies
            </p>
          </motion.div>

          {/* Core Skills Orbital */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative w-72 h-72 mx-auto mb-20"
          >
            {/* Center element */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(var(--primary-rgb), 0.2)",
                  "0 0 40px rgba(var(--primary-rgb), 0.4)",
                  "0 0 20px rgba(var(--primary-rgb), 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center"
            >
              <Cpu className="w-8 h-8 text-primary" />
            </motion.div>
            
            {/* Orbit ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/20" />
            
            {/* Orbiting skills */}
            {coreSkills.map((skill, index) => (
              <OrbitingSkill 
                key={skill.name} 
                skill={skill} 
                index={index} 
                total={coreSkills.length} 
              />
            ))}
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillCategories[activeCategory].color} flex items-center justify-center shadow-lg`}>
                  {(() => {
                    const Icon = skillCategories[activeCategory].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
                  <p className="text-muted-foreground">{skillCategories[activeCategory].subtitle}</p>
                </div>
              </div>

              <div className="space-y-5 edit-highlight">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={index}
                    categoryColor={skillCategories[activeCategory].color}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* All Skills Grid Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">Tech Universe</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skillCategories.flatMap(cat => 
                cat.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${cat.color} bg-opacity-10 border border-white/10 cursor-pointer transition-all duration-300 hover:shadow-lg`}
                    style={{ 
                      background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                      borderColor: 'rgba(255,255,255,0.1)'
                    }}
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-amber-400 transition-colors" />
                  </motion.div>
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
