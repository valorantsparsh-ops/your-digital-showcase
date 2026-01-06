import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import { Button } from "@/components/ui/button";
import SkillIcon from "@/components/SkillIcons";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { useIsMobile } from "@/hooks/useIsMobile";

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

// Custom Cursor Component - Desktop only
const CustomCursor = ({ containerRef, enabled }: { containerRef: React.RefObject<HTMLDivElement>; enabled: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  if (!enabled) return null;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  if (!isInside) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full border-2 border-primary/50"
        style={{
          width: 36,
          height: 36,
          left: position.x,
          top: position.y,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="absolute rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          left: position.x,
          top: position.y,
          x: "-50%",
          y: "-50%",
          boxShadow: "0 0 15px hsl(var(--primary))",
        }}
      />
    </div>
  );
};

// 3D Tilt Card Component - Simplified for performance
const TiltCard = ({ children, className = "", enabled = true }: { children: React.ReactNode; className?: string; enabled?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }
  
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
      <div className={`h-full transition-transform duration-200 ${isHovered ? "scale-[1.01]" : ""}`}>
        {children}
      </div>
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
  const [isHovered, setIsHovered] = useState(false);

  // Responsive size classes - smaller on mobile
  const sizeClasses = {
    sm: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
    md: "w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24",
    lg: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",
    md: "w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12",
    lg: "w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.08 },
        scale: { duration: 0.5, delay: index * 0.08, type: "spring" },
        y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="absolute cursor-pointer flex flex-col items-center gap-1 sm:gap-2"
      style={{ 
        left: `${skill.x}%`, 
        top: `${skill.y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      {/* Dark bubble with glowing teal border */}
      <motion.div 
        animate={{
          boxShadow: isHovered 
            ? '0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.4), 0 0 90px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.15)'
            : '0 0 20px hsl(var(--primary) / 0.15), inset 0 0 20px hsl(var(--primary) / 0.05)',
          borderColor: isHovered 
            ? 'hsl(var(--primary) / 0.8)'
            : 'hsl(var(--primary) / 0.4)',
        }}
        transition={{ duration: 0.3 }}
        className={`${sizeClasses[skill.size as keyof typeof sizeClasses]} rounded-full flex items-center justify-center`}
        style={{
          background: 'linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)',
          border: '2px solid',
        }}
      >
        <SkillIcon name={skill.name} className={iconSizeClasses[skill.size as keyof typeof iconSizeClasses]} />
      </motion.div>
      {/* Label - hidden on very small screens, visible on sm+ */}
      <motion.span 
        animate={{ 
          color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.8)',
          textShadow: isHovered ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
        }}
        className="text-[10px] sm:text-xs font-medium whitespace-nowrap hidden sm:block"
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

const SkillsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
            <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-sm sm:text-base">Technical expertise blended with creativity — explore my core competencies below.</p>
            </div>
          </ScrollAnimationWrapper>

          {/* Floating Skills Container */}
          <ScrollAnimationWrapper delay={0.2} direction="scale">
            <motion.div
              ref={containerRef}
              className={`relative w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-2xl sm:rounded-3xl bg-card/30 backdrop-blur-sm border border-border/50 mb-12 sm:mb-16 overflow-hidden ${isMobile ? '' : 'cursor-none'}`}
              style={{ perspective: "1000px" }}
            >
              {/* Custom cursor - desktop only */}
              {!isMobile && <CustomCursor containerRef={containerRef} enabled={!isMobile} />}
              

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
              
              {/* Glowing orbs in background - only on desktop */}
              {!isMobile && (
                <>
                  <motion.div
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
                  />
                  <motion.div
                    animate={{ opacity: [0.12, 0.18, 0.12] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl"
                  />
                </>
              )}
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Skill Categories Grid with 3D Tilt */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            style={{ perspective: isMobile ? undefined : "1000px" }}
          >
            {skillCategories.map((category, index) => (
              <ScrollAnimationWrapper
                key={category.title}
                delay={isMobile ? 0 : index * 0.05}
                direction="up"
              >
                <TiltCard className="h-full" enabled={!isMobile}>
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
