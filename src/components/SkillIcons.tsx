/**
 * ✏️ SKILL ICONS - Edit skill images here
 * 
 * To change a skill icon:
 * 1. Add your image to src/assets/skills/ folder
 * 2. Import it below
 * 3. Update the skillIcons object with the new import
 */

// Import skill images
import reactIcon from "@/assets/skills/react.png";
import htmlIcon from "@/assets/skills/html.png";
import cssIcon from "@/assets/skills/css.png";
import javascriptIcon from "@/assets/skills/javascript.png";
import typescriptIcon from "@/assets/skills/typescript.png";
import nodejsIcon from "@/assets/skills/nodejs.png";
import pythonIcon from "@/assets/skills/python.png";
import mongodbIcon from "@/assets/skills/mongodb.png";
import gitIcon from "@/assets/skills/git.png";
import tensorflowIcon from "@/assets/skills/tensorflow.png";
import cplusplusIcon from "@/assets/skills/cplusplus.png";
import mysqlIcon from "@/assets/skills/mysql.png";
import dockerIcon from "@/assets/skills/docker.png";
import awsIcon from "@/assets/skills/aws.png";

// Fallback placeholder for skills without custom icons
const PlaceholderIcon = ({ name }: { name: string }) => (
  <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xs">
    {name.slice(0, 2).toUpperCase()}
  </div>
);

/**
 * ✏️ SKILL ICONS MAP
 * 
 * Add or modify skill icons here.
 * The key should match the skill name exactly.
 */
export const skillIcons: Record<string, string> = {
  "React": reactIcon,
  "HTML": htmlIcon,
  "CSS": cssIcon,
  "JavaScript": javascriptIcon,
  "TypeScript": typescriptIcon,
  "Node.js": nodejsIcon,
  "Python": pythonIcon,
  "MongoDB": mongodbIcon,
  "Git": gitIcon,
  "TensorFlow": tensorflowIcon,
  "C++": cplusplusIcon,
  "MySQL": mysqlIcon,
  "Docker": dockerIcon,
  "AWS": awsIcon,
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
