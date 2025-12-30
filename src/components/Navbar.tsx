import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumePreviewDialog from "@/components/ResumePreviewDialog";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certificates", label: "Certificates" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About Me" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <ResumePreviewDialog open={resumeOpen} onOpenChange={setResumeOpen} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo - EDIT THIS */}
            <Link to="/" className="flex items-center gap-1.5 md:gap-2 text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                {/* ✏️ EDIT: Your Name */}
                <span className="font-display font-semibold text-base md:text-lg leading-tight">YourName</span>
                {/* ✏️ EDIT: Your Title */}
                <span className="text-[10px] md:text-xs text-muted-foreground leading-tight">ML • AI • Developer</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm xl:text-base font-medium transition-colors relative whitespace-nowrap ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Resume Button & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <ThemeToggle />
              <Button
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-3 xl:px-5 gap-1.5 xl:gap-2 text-xs xl:text-sm"
                onClick={() => setResumeOpen(true)}
              >
                <FileText className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                Resume
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors relative"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.to
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-l-2 border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Divider */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="h-px bg-border my-2"
              />
              
              {/* Theme Toggle Row */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="flex items-center justify-between py-2 px-3"
              >
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </motion.div>
              
              {/* Resume Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsOpen(false);
                  setResumeOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 mt-1 rounded-lg bg-primary text-primary-foreground text-sm font-medium w-full hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
};

export default Navbar;
