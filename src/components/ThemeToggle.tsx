import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { createPortal } from "react-dom";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [ripple, setRipple] = useState<{ x: number; y: number; toLight: boolean } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    
    // Get button position for ripple origin
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      setRipple({ x, y, toLight: isDark });
    }
    
    // Change theme after ripple starts
    setTimeout(() => {
      setIsDark(!isDark);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("light", newTheme === "light");
    }, 200);
    
    // Hide ripple after animation
    setTimeout(() => {
      setRipple(null);
    }, 800);
  };

  // Calculate the maximum distance from ripple origin to screen corners
  const getMaxRadius = (x: number, y: number) => {
    const corners = [
      { x: 0, y: 0 },
      { x: window.innerWidth, y: 0 },
      { x: 0, y: window.innerHeight },
      { x: window.innerWidth, y: window.innerHeight },
    ];
    return Math.max(...corners.map(c => Math.sqrt((c.x - x) ** 2 + (c.y - y) ** 2)));
  };

  return (
    <>
      {/* Ripple overlay using portal */}
      {createPortal(
        <AnimatePresence>
          {ripple && (
            <motion.div
              initial={{ 
                clipPath: `circle(0px at ${ripple.x}px ${ripple.y}px)`,
                opacity: 1
              }}
              animate={{ 
                clipPath: `circle(${getMaxRadius(ripple.x, ripple.y)}px at ${ripple.x}px ${ripple.y}px)`,
                opacity: 1
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                clipPath: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.4 }
              }}
              className="fixed inset-0 pointer-events-none z-[9999]"
              style={{
                background: ripple.toLight 
                  ? "linear-gradient(135deg, hsl(0 0% 96%) 0%, hsl(0 0% 98%) 100%)"
                  : "linear-gradient(135deg, hsl(0 0% 6%) 0%, hsl(0 0% 4%) 100%)"
              }}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
      
      <motion.button
        ref={buttonRef}
        onClick={toggleTheme}
        className="relative w-14 h-7 rounded-full bg-secondary border border-border flex items-center px-1 cursor-pointer overflow-hidden"
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isDark 
              ? "linear-gradient(135deg, hsl(0 0% 14%) 0%, hsl(0 0% 8%) 100%)"
              : "linear-gradient(135deg, hsl(45 100% 90%) 0%, hsl(200 80% 85%) 100%)"
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icons */}
        <div className="relative w-full h-full flex items-center justify-between px-1 z-10">
          <Sun className={`w-3.5 h-3.5 transition-colors duration-300 ${isDark ? "text-muted-foreground" : "text-amber-500"}`} />
          <Moon className={`w-3.5 h-3.5 transition-colors duration-300 ${isDark ? "text-primary" : "text-muted-foreground"}`} />
        </div>
        
        {/* Toggle ball */}
        <motion.div
          className="absolute w-5 h-5 rounded-full shadow-md z-20"
          animate={{
            x: isDark ? 28 : 2,
            backgroundColor: isDark ? "hsl(0 0% 85%)" : "hsl(45 100% 60%)"
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>
    </>
  );
};

export default ThemeToggle;
