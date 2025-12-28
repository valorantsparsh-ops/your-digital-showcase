import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import { Button } from "@/components/ui/button";
import SkillIcon from "@/components/SkillIcons";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

/* ✏️ EDIT: Your floating skill icons - positions and sizes only
 * To change skill images, edit src/components/SkillIcons.tsx
 */
const floatingSkills = [
  { name: "React", x: 15, y: 20, size: "lg" },
  { name: "HTML", x: 35, y: 30, size: "md" },
  { name: "CSS", x: 75, y: 15, size: "lg" },
  { name: "JavaScript", x: 50, y: 45, size: "lg" },
  { name: "TypeScript", x: 85, y: 40, size: "md" },
  { name: "Node.js", x: 10, y: 55, size: "md" },
  { name: "Python", x: 65, y: 55, size: "lg" },
  { name: "MongoDB", x: 70, y: 75, size: "md" },
  { name: "Git", x: 20, y: 40, size: "sm" },
  { name: "TensorFlow", x: 90, y: 25, size: "lg" },
  { name: "C++", x: 55, y: 20, size: "md" },
  { name: "MySQL", x: 40, y: 70, size: "md" },
  { name: "Docker", x: 25, y: 75, size: "sm" },
  { name: "AWS", x: 80, y: 60, size: "sm" },
];

/* ✏️ EDIT: Your skill categories */
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Next.js", "TailwindCSS", "Node.js"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Git", "Docker", "Linux"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Express.js", "FastAPI", "TensorFlow", "PyTorch", "Framer Motion"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning", "System Design"],
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
  },
];

// Mouse following particles
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

const MouseParticles = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create new particles
      const newParticles: Particle[] = [];
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: particleIdRef.current++,
          x,
          y,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2,
        });
      }

      setParticles(prev => [...prev.slice(-50), ...newParticles]);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocityX,
            y: p.y + p.velocityY,
            opacity: p.opacity - 0.02,
            size: p.size * 0.98,
          }))
          .filter(p => p.opacity > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary))`,
          }}
        />
      ))}
    </div>
  );
};

// 3D Tilt Card Component
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
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
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={`h-full transition-all duration-300 ${isHovered ? "scale-[1.02]" : ""}`}
      >
        {children}
      </div>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Floating Skill Icon Component - Blends with dark background
const FloatingSkillIcon = ({ 
  skill, 
  index 
}: { 
  skill: typeof floatingSkills[0]; 
  index: number 
}) => {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-24 h-24",
    lg: "w-28 h-28",
  };

  const iconSizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        scale: { duration: 0.5, delay: index * 0.1, type: "spring" },
        y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      className="absolute cursor-pointer flex flex-col items-center gap-2"
      style={{ 
        left: `${skill.x}%`, 
        top: `${skill.y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      {/* Dark bubble with glowing teal border */}
      <div 
        className={`${sizeClasses[skill.size as keyof typeof sizeClasses]} rounded-full flex items-center justify-center transition-all duration-300`}
        style={{
          background: 'linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)',
          border: '2px solid hsl(var(--primary) / 0.4)',
          boxShadow: '0 0 20px hsl(var(--primary) / 0.15), inset 0 0 20px hsl(var(--primary) / 0.05)',
        }}
      >
        <SkillIcon name={skill.name} className={iconSizeClasses[skill.size as keyof typeof iconSizeClasses]} />
      </div>
      {/* Label always visible below */}
      <span className="text-xs font-medium text-primary/80 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <ScrollAnimationWrapper className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
              My Skills
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <p>Technical expertise blended with creativity — explore my core competencies below.</p>
            </div>
          </ScrollAnimationWrapper>

          {/* Floating Skills Container with Mouse Particles */}
          <ScrollAnimationWrapper delay={0.2} direction="scale">
            <motion.div
              ref={containerRef}
              className="relative w-full h-[500px] md:h-[600px] rounded-3xl bg-card/30 backdrop-blur-sm border border-border/50 mb-16 overflow-hidden cursor-crosshair"
              style={{ perspective: "1000px" }}
            >
              {/* Mouse following particles */}
              <MouseParticles containerRef={containerRef} />

              {/* Decorative grid background */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                  backgroundSize: "40px 40px"
                }} />
              </div>
              
              {/* Floating skill icons */}
              {floatingSkills.map((skill, index) => (
                <FloatingSkillIcon key={skill.name} skill={skill} index={index} />
              ))}
              
              {/* Glowing orbs in background */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl"
              />
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Skill Categories Grid with 3D Tilt */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            style={{ perspective: "1000px" }}
          >
            {skillCategories.map((category, index) => (
              <ScrollAnimationWrapper
                key={category.title}
                delay={index * 0.1}
                direction="up"
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                    <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollAnimationWrapper>
            ))}
          </div>

          {/* View Certificates CTA */}
          <ScrollAnimationWrapper delay={0.2} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">Certifications</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              View all my technical and professional certifications
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/certificates">
                <Award className="w-4 h-4 mr-2" />
                View All Certificates
              </Link>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
