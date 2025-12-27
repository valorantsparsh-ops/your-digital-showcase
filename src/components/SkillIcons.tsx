/**
 * ✏️ SKILL ICONS - Edit skill images here
 * 
 * To change a skill icon:
 * 1. Add your image to src/assets/skills/ folder
 * 2. Import it below
 * 3. Update the skillIcons object with the new import
 */

// Import your skill images here
// Example: import reactIcon from "@/assets/skills/react.png";

// Fallback placeholder for skills without custom icons
const PlaceholderIcon = ({ name }: { name: string }) => (
  <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xs">
    {name.slice(0, 2).toUpperCase()}
  </div>
);

/**
 * ✏️ ADD YOUR SKILL ICONS HERE
 * 
 * Format: "Skill Name": importedImage
 * 
 * Example:
 * import reactIcon from "@/assets/skills/react.png";
 * import pythonIcon from "@/assets/skills/python.png";
 * 
 * export const skillIcons: Record<string, string> = {
 *   "React": reactIcon,
 *   "Python": pythonIcon,
 * };
 */
export const skillIcons: Record<string, string> = {
  // Add your skill icons here
  // "React": reactIcon,
  // "Python": pythonIcon,
  // "JavaScript": javascriptIcon,
};

// Component to render a skill icon
export const SkillIcon = ({ 
  name, 
  className = "" 
}: { 
  name: string; 
  className?: string;
}) => {
  const iconSrc = skillIcons[name];
  
  if (iconSrc) {
    return (
      <img 
        src={iconSrc} 
        alt={`${name} icon`} 
        className={`object-contain ${className}`}
      />
    );
  }
  
  // Return placeholder if no custom icon is set
  return <PlaceholderIcon name={name} />;
};

export default SkillIcon;
