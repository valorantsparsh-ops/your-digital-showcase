// ═══════════════════════════════════════════════════════════════════════════
// ✏️ PROFILE IMAGE COMPONENT
// Dark mode: profile-image.png | Light mode: profile-image-light.png
// ═══════════════════════════════════════════════════════════════════════════

import { useState, useEffect } from "react";
import profileImageDark from "@/assets/profile-image.png";
import profileImageLight from "@/assets/profile-image-light.png";

interface ProfileImageProps {
  className?: string;
}

const ProfileImage = ({ className = "w-full h-full" }: ProfileImageProps) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isLight = document.documentElement.classList.contains("light");
    setIsLightMode(isLight);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isLight = document.documentElement.classList.contains("light");
          setIsLightMode(isLight);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Static circular pattern border */}
      <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30" />
      <div className="absolute -inset-6 rounded-full border border-primary/15" />
      <img
        src={isLightMode ? profileImageLight : profileImageDark}
        alt="Profile"
        className={`${className} object-cover rounded-full relative z-10`}
      />
    </div>
  );
};

export default ProfileImage;
