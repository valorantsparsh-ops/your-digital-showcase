/**
 * ✏️ SKILL ICONS - Simply replace images in src/assets/skills/ folder
 * 
 * Naming convention: use lowercase skill name
 * Examples: react.png, python.png, javascript.png, nodejs.png
 * 
 * To add a new skill:
 * 1. Add image to src/assets/skills/ (e.g., java.png)
 * 2. Import it below
 * 3. Add to skillIcons object: "Java": javaIcon
 */

// ✏️ Import your skill images here
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

/**
 * ✏️ SKILL ICONS MAP - Add your skills here
 * Key = Display name, Value = imported image
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

// Fallback placeholder
const PlaceholderIcon = ({ name }: { name: string }) => (
  <div className="w-full h-full flex items-center justify-center text-primary font-bold text-sm">
    {name.slice(0, 2).toUpperCase()}
  </div>
);

// Skill Icon component
export const SkillIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const iconSrc = skillIcons[name];
  
  if (iconSrc) {
    return <img src={iconSrc} alt={`${name} icon`} className={`object-contain ${className}`} />;
  }
  
  return <PlaceholderIcon name={name} />;
};

export default SkillIcon;
