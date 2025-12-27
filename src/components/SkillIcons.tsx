/**
 * ✏️ SKILL ICONS - Edit skill images here
 * 
 * To change a skill icon:
 * 1. Add your image to src/assets/skills/ folder
 * 2. Import it below
 * 3. Update the skillIcons object with the new import
 */

// Import skill images
import reactIcon from "@/assets/skills/react.svg";
import htmlIcon from "@/assets/skills/html.svg";
import cssIcon from "@/assets/skills/css.svg";
import javascriptIcon from "@/assets/skills/javascript.svg";
import typescriptIcon from "@/assets/skills/typescript.svg";
import nodejsIcon from "@/assets/skills/nodejs.svg";
import pythonIcon from "@/assets/skills/python.svg";
import mongodbIcon from "@/assets/skills/mongodb.svg";
import gitIcon from "@/assets/skills/git.svg";
import tensorflowIcon from "@/assets/skills/tensorflow.svg";
import cplusplusIcon from "@/assets/skills/cplusplus.svg";
import mysqlIcon from "@/assets/skills/mysql.svg";
import dockerIcon from "@/assets/skills/docker.svg";
import awsIcon from "@/assets/skills/aws.svg";

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
