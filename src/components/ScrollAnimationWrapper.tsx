import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number;
}

const getVariants = (direction: string, isMobile: boolean): Variants => {
  // Simpler animations on mobile - just fade
  if (isMobile) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  const variants: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return variants[direction] || variants.up;
};

const ScrollAnimationWrapper = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}: ScrollAnimationWrapperProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants(direction, isMobile)}
      transition={{
        duration: isMobile ? 0.3 : duration,
        delay: isMobile ? Math.min(delay, 0.1) : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
