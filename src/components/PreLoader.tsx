import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PreloaderLogo from "@/components/PreloaderLogo";
import { useIsMobile } from "@/hooks/useIsMobile";

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Faster loading on mobile
    const increment = isMobile ? 4 : 2;
    const interval = isMobile ? 20 : 30;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Grid overlay - reduced opacity on mobile */}
      <div className={`absolute inset-0 grid-overlay ${isMobile ? 'opacity-20' : 'opacity-30'}`} />

      {/* Simplified loader */}
      <div className="relative mb-8">
        {/* Static glow on mobile, animated on desktop */}
        {!isMobile && (
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-24 h-24 rounded-full bg-primary/20 blur-xl"
          />
        )}
        
        {/* Spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: isMobile ? 2 : 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-24 h-24 rounded-full border-2 border-muted-foreground/20"
        >
          <div className="absolute inset-1 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent" />
        </motion.div>

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PreloaderLogo className="w-12 h-12" />
        </div>
      </div>

      {/* Loading text - simplified */}
      <div className="text-center">
        <p className="text-muted-foreground text-sm mb-3 tracking-widest uppercase">
          Loading
        </p>

        {/* Progress bar */}
        <div className="w-40 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {progress}%
        </p>
      </div>

      {/* Floating particles - only on desktop */}
      {!isMobile && [...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${25 + i * 15}%`,
            top: `${35 + (i % 2) * 25}%`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default PreLoader;
