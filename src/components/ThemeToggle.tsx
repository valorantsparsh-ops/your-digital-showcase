import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <motion.button
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
  );
};

export default ThemeToggle;
