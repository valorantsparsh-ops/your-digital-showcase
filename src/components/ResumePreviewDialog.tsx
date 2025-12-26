import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

// ═══════════════════════════════════════════════════════════════════════════
// ✏️ EDIT: Your resume data - Update all fields with your actual information
// ═══════════════════════════════════════════════════════════════════════════

const resumeData = {
  name: "YOUR NAME", // ✏️ EDIT: Your full name
  title: "Your Title / Role", // ✏️ EDIT: Your job title
  photoUrl: "", // ✏️ EDIT: Add your photo URL (or leave empty for placeholder)
  contact: {
    phone: "+91 XXXXXXXXXX", // ✏️ EDIT: Your phone number
    email: "your.email@gmail.com", // ✏️ EDIT: Your email
    address: "Your City, State, Country", // ✏️ EDIT: Your address
  },
  summary: "Write your professional summary here. Describe your experience, skills, and what you're looking for. Keep it concise but impactful - 2-3 sentences work best.", // ✏️ EDIT: Your professional summary
  projects: [
    {
      title: "Project Title 1", // ✏️ EDIT: Your project name
      description: "Describe what you built, the technologies used, and the impact or results achieved. Include any relevant metrics or achievements.", // ✏️ EDIT: Project description
      link: "", // ✏️ EDIT: Optional demo link
    },
    {
      title: "Project Title 2", // ✏️ EDIT: Your project name
      description: "Describe another significant project. Highlight the problem solved, your role, and the technologies or methodologies used.", // ✏️ EDIT: Project description
      link: "", // ✏️ EDIT: Optional demo link
    },
    {
      title: "Project Title 3 (In Progress)", // ✏️ EDIT: Your project name
      description: "You can also include ongoing projects to show what you're currently working on and learning.", // ✏️ EDIT: Project description
      link: "", // ✏️ EDIT: Optional demo link
    },
  ],
  skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"], // ✏️ EDIT: Your key skills
  education: [
    {
      degree: "Your Degree", // ✏️ EDIT: e.g., "B.Tech in Computer Science"
      institution: "University Name", // ✏️ EDIT: Your university
      year: "Year", // ✏️ EDIT: e.g., "2021-2025"
    },
  ],
};

// ✏️ EDIT: Your actual resume PDF URL for download
const RESUME_PDF_URL = "#";

interface ResumePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumePreviewDialog = ({ open, onOpenChange }: ResumePreviewDialogProps) => {
  const [zoom, setZoom] = useState(100);

  const handleDownload = () => {
    if (RESUME_PDF_URL && RESUME_PDF_URL !== "#") {
      const link = document.createElement("a");
      link.href = RESUME_PDF_URL;
      link.download = `${resumeData.name.replace(/\s+/g, "_")}_Resume.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-[#1a1a1a] border-border overflow-hidden">
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2a2a2a] border-b border-border">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">1 / 1</span>
            <div className="flex items-center gap-2 bg-[#3a3a3a] rounded px-2 py-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-[#4a4a4a]"
                onClick={() => setZoom(Math.max(50, zoom - 10))}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm min-w-[40px] text-center">{zoom}%</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-[#4a4a4a]"
                onClick={() => setZoom(Math.min(150, zoom + 10))}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-[#3a3a3a]"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar Thumbnails */}
          <div className="w-48 bg-[#1a1a1a] border-r border-border p-4 overflow-y-auto hidden md:block">
            <div className="relative">
              <div className="aspect-[8.5/11] bg-white rounded shadow-lg overflow-hidden border-2 border-primary">
                <div className="transform scale-[0.15] origin-top-left w-[666%] h-[666%]">
                  <ResumeContent zoom={100} compact />
                </div>
              </div>
              <span className="block text-center text-primary text-sm mt-2">1</span>
            </div>
          </div>

          {/* Main Preview Area */}
          <div className="flex-1 overflow-auto bg-[#525659] p-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded shadow-2xl overflow-hidden"
              style={{ 
                width: `${(612 * zoom) / 100}px`,
                minHeight: `${(792 * zoom) / 100}px`,
              }}
            >
              <ResumeContent zoom={zoom} />
            </motion.div>
          </div>
        </div>

        {/* Footer with Download Button */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-[#2a2a2a] border-t border-border">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Resume Content Component
const ResumeContent = ({ zoom, compact = false }: { zoom: number; compact?: boolean }) => {
  const scale = compact ? 1 : zoom / 100;
  
  return (
    <div 
      className="p-8 text-black font-sans"
      style={{ 
        fontSize: compact ? '12px' : `${12 * scale}px`,
        lineHeight: 1.5,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6 border-b-4 border-cyan-400 pb-4">
        <div>
          <h1 
            className="font-bold text-cyan-600 uppercase tracking-wide"
            style={{ fontSize: compact ? '24px' : `${28 * scale}px` }}
          >
            {resumeData.name}
          </h1>
          <p className="text-gray-600 italic" style={{ fontSize: compact ? '12px' : `${14 * scale}px` }}>
            {resumeData.title}
          </p>
        </div>
        <div 
          className="bg-gray-200 rounded overflow-hidden flex-shrink-0"
          style={{ 
            width: compact ? '60px' : `${80 * scale}px`, 
            height: compact ? '80px' : `${100 * scale}px` 
          }}
        >
          {resumeData.photoUrl ? (
            <img 
              src={resumeData.photoUrl} 
              alt={resumeData.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
              Photo
            </div>
          )}
        </div>
      </div>

      {/* Contact */}
      <div className="mb-6">
        <h2 
          className="font-bold text-black uppercase mb-2"
          style={{ fontSize: compact ? '14px' : `${16 * scale}px` }}
        >
          Contact
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-1 text-gray-700" style={{ fontSize: compact ? '10px' : `${11 * scale}px` }}>
          <span>Phone: {resumeData.contact.phone}</span>
          <span>Address: {resumeData.contact.address}</span>
          <span>Email: {resumeData.contact.email}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 
          className="font-bold text-black uppercase mb-2"
          style={{ fontSize: compact ? '14px' : `${16 * scale}px` }}
        >
          Professional Summary
        </h2>
        <p className="text-gray-700 text-justify" style={{ fontSize: compact ? '10px' : `${11 * scale}px` }}>
          {resumeData.summary}
        </p>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 
          className="font-bold text-black uppercase mb-3"
          style={{ fontSize: compact ? '14px' : `${16 * scale}px` }}
        >
          Projects
        </h2>
        <div className="space-y-4">
          {resumeData.projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <h3 
                  className="font-semibold text-black"
                  style={{ fontSize: compact ? '11px' : `${12 * scale}px` }}
                >
                  {index + 1}. {project.title}
                </h3>
                {project.link && (
                  <span className="text-cyan-600 underline" style={{ fontSize: compact ? '9px' : `${10 * scale}px` }}>
                    # Live Demo
                  </span>
                )}
              </div>
              <p className="text-gray-700 ml-4 text-justify" style={{ fontSize: compact ? '10px' : `${11 * scale}px` }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 
          className="font-bold text-black uppercase mb-2"
          style={{ fontSize: compact ? '14px' : `${16 * scale}px` }}
        >
          Skills
        </h2>
        <p className="text-gray-700" style={{ fontSize: compact ? '10px' : `${11 * scale}px` }}>
          {resumeData.skills.join(" • ")}
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 
          className="font-bold text-black uppercase mb-2"
          style={{ fontSize: compact ? '14px' : `${16 * scale}px` }}
        >
          Education
        </h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="text-gray-700" style={{ fontSize: compact ? '10px' : `${11 * scale}px` }}>
            <span className="font-medium">{edu.degree}</span> - {edu.institution} ({edu.year})
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreviewDialog;
