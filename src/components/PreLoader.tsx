import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PreloaderLogo from "@/components/PreloaderLogo";
interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Animated circles */}
      <div className="relative mb-12">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-32 h-32 rounded-full blur-xl"
          style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-32 h-32 rounded-full"
          style={{ border: "2px solid rgba(255, 255, 255, 0.2)" }}
        >
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full"
            style={{ 
              borderWidth: "2px",
              borderStyle: "solid",
              borderTopColor: "#8b5cf6",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent"
            }}
          />
        </motion.div>

        {/* Center logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <PreloaderLogo className="w-16 h-16" />
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          Loading Portfolio
        </motion.p>

        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(to right, #8b5cf6, rgba(139, 92, 246, 0.5))" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs mt-2"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          {progress}%
        </motion.p>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
            backgroundColor: "rgba(139, 92, 246, 0.3)"
          }}
        />
      ))}
    </motion.div>
  );
};

export default PreLoader;
