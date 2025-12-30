import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

/* ✏️ EDIT: Replace with your actual projects */
const projects = [
  {
    title: "Mammogram Malignancy Detector" /* ✏️ EDIT */,
    emoji: "🔬",
    description:
      "Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference." /* ✏️ EDIT */,
    techStack: ["TensorFlow", "Keras", "OpenCV", "YOLOv8"],
    link: "#" /* ✏️ EDIT: Live demo URL */,
    github: "#" /* ✏️ EDIT: GitHub repo URL */,
    image: null /* ✏️ EDIT: Add project screenshot */,
  },
  {
    title: "Mental Health Analyzer" /* ✏️ EDIT */,
    emoji: "🧠",
    description:
      "NLP-based system that analyzes user text to detect signs of anxiety, stress, and depression using sentiment analysis and transformer models." /* ✏️ EDIT */,
    techStack: ["Python", "Transformers", "NLTK", "scikit-learn"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "Sign Language Interpreter" /* ✏️ EDIT */,
    emoji: "🤟",
    description:
      "Real-time gesture recognition and translation using Mediapipe + TensorFlow, enabling live sign-to-text interpretation." /* ✏️ EDIT */,
    techStack: ["Mediapipe", "TensorFlow", "React", "Flask"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "Portfolio Website" /* ✏️ EDIT */,
    emoji: "💼",
    description:
      "A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI." /* ✏️ EDIT */,
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "AI Chatbot Assistant" /* ✏️ EDIT */,
    emoji: "🤖",
    description:
      "Intelligent conversational agent powered by OpenAI GPT, featuring context-aware responses and memory capabilities." /* ✏️ EDIT */,
    techStack: ["Node.js", "OpenAI", "MongoDB", "Express"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "E-commerce Platform" /* ✏️ EDIT */,
    emoji: "🛒",
    description:
      "Full-stack shopping platform with payment integration, inventory management, and real-time order tracking." /* ✏️ EDIT */,
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "E-commerce Platform" /* ✏️ EDIT */,
    emoji: "🛒",
    description:
      "Full-stack shopping platform with payment integration, inventory management, and real-time order tracking." /* ✏️ EDIT */,
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "E-commerce Platform" /* ✏️ EDIT */,
    emoji: "🛒",
    description:
      "Full-stack shopping platform with payment integration, inventory management, and real-time order tracking." /* ✏️ EDIT */,
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
  {
    title: "E-commerce Platform" /* ✏️ EDIT */,
    emoji: "🛒",
    description:
      "Full-stack shopping platform with payment integration, inventory management, and real-time order tracking." /* ✏️ EDIT */,
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "#" /* ✏️ EDIT */,
    github: "#" /* ✏️ EDIT */,
    image: null,
  },
];

// 3D Tilt Card Component (matching Skills page)
const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Reduced tilt angle for mobile/tablet (5deg mobile, 10deg tablet, 15deg desktop)
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024;
  const tiltAngle = isMobile ? 5 : isTablet ? 10 : 15;
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltAngle}deg`, `-${tiltAngle}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltAngle}deg`, `${tiltAngle}deg`]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Prevent 3D stacking from covering the page header on small/medium screens
  const zLift = isHovered ? (isMobile ? 12 : isTablet ? 30 : 56) : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <div
        style={{
          transform: `translateZ(${zLift}px)`,
          transformStyle: "preserve-3d",
        }}
        className={`h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 ${isHovered ? "scale-[1.02] border-primary/30" : ""}`}
      >
        {/* Project Image */}
        <div className="relative h-32 sm:h-40 md:h-44 lg:h-48 bg-gradient-to-br from-primary/5 to-secondary/20 overflow-hidden">
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
                className="text-4xl sm:text-5xl md:text-6xl"
              >
                {project.emoji}
              </motion.div>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col">
          {/* Title with emoji */}
          <div className="flex items-start gap-2 mb-2 md:mb-3">
            <span className="text-base sm:text-lg md:text-xl">{project.emoji}</span>
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3">{project.description}</p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 md:mb-4 lg:mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-1.5 sm:px-2 md:px-3 py-0.5 md:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 md:gap-3 mt-auto">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 text-[10px] sm:text-xs md:text-sm h-8 md:h-9 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild className="flex-1 text-[10px] sm:text-xs md:text-sm h-8 md:h-9 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                Live
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 blur-2xl -z-10"
        animate={{ 
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/30 blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header */}
          <ScrollAnimationWrapper className="relative z-20 text-center mb-6 sm:mb-10 md:mb-14 lg:mb-16">
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3 md:mb-4">
              <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-widest">My Work</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Projects</h1>
            <p className="text-muted-foreground max-w-md md:max-w-lg mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2">
              A collection of my recent projects and open source contributions
            </p>
          </ScrollAnimationWrapper>

          {/* Projects Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-none mx-auto" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimationWrapper delay={0.3} className="text-center">
            {/* ✏️ EDIT: Your GitHub URL */}
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full border-border hover:border-accent hover:border-primary/50 hover:bg-primary/5 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on Github
              </a>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

{
  /* variant="outline"
                size="lg"
                className="rounded-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" */
}

export default ProjectsPage;
