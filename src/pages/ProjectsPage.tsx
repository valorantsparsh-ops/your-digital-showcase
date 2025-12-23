import { motion } from "framer-motion";
import { useState } from "react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

/* ✏️ EDIT: Replace with your actual projects */
const projects = [
  {
    title: "Mammogram Malignancy Detector", /* ✏️ EDIT */
    emoji: "🔬",
    description: "Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference.", /* ✏️ EDIT */
    techStack: ["TensorFlow", "Keras", "OpenCV", "YOLOv8"],
    link: "#", /* ✏️ EDIT: Live demo URL */
    github: "#", /* ✏️ EDIT: GitHub repo URL */
    image: null, /* ✏️ EDIT: Add project screenshot */
  },
  {
    title: "Mental Health Analyzer", /* ✏️ EDIT */
    emoji: "🧠",
    description: "NLP-based system that analyzes user text to detect signs of anxiety, stress, and depression using sentiment analysis and transformer models.", /* ✏️ EDIT */
    techStack: ["Python", "Transformers", "NLTK", "scikit-learn"],
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: null,
  },
  {
    title: "Sign Language Interpreter", /* ✏️ EDIT */
    emoji: "🤟",
    description: "Real-time gesture recognition and translation using Mediapipe + TensorFlow, enabling live sign-to-text interpretation.", /* ✏️ EDIT */
    techStack: ["Mediapipe", "TensorFlow", "React", "Flask"],
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: null,
  },
  {
    title: "Portfolio Website", /* ✏️ EDIT */
    emoji: "💼",
    description: "A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.", /* ✏️ EDIT */
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: null,
  },
  {
    title: "AI Chatbot Assistant", /* ✏️ EDIT */
    emoji: "🤖",
    description: "Intelligent conversational agent powered by OpenAI GPT, featuring context-aware responses and memory capabilities.", /* ✏️ EDIT */
    techStack: ["Node.js", "OpenAI", "MongoDB", "Express"],
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: null,
  },
  {
    title: "E-commerce Platform", /* ✏️ EDIT */
    emoji: "🛒",
    description: "Full-stack shopping platform with payment integration, inventory management, and real-time order tracking.", /* ✏️ EDIT */
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "#", /* ✏️ EDIT */
    github: "#", /* ✏️ EDIT */
    image: null,
  },
];

// 3D Tilt Card Component
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className="relative group"
    >
      <div className="h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/20 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: isHovered ? -5 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="text-6xl"
              >
                {project.emoji}
              </motion.div>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col">
          {/* Title with emoji */}
          <div className="flex items-start gap-2 mb-3">
            <span className="text-xl">{project.emoji}</span>
            <h3 className="font-display text-lg font-bold text-primary group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/10 blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ProjectsPage = () => {
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
              <FolderGit2 className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                My Work
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A collection of my recent projects and open source contributions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            {/* ✏️ EDIT: Your GitHub URL */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View More on Github
              </Button>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
