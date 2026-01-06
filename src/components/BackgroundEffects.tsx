import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const BackgroundEffects = () => {
  const isMobile = useIsMobile();

  // On mobile, render a simpler static background
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Static Grid Background */}
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        {/* Static Gradient Orbs - no animation */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[128px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Grid Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 grid-overlay" 
      />
      
      {/* Animated Gradient Orbs - reduced animation complexity */}
      <motion.div 
        animate={{ 
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] will-change-[opacity]" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] will-change-[opacity]" 
      />

      {/* Reduced floating particles - only 6 instead of 20 */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full will-change-transform"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${15 + (i * 12)}%`,
          }}
          animate={{ 
            y: [-20, -40, -20],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
