import { motion } from "framer-motion";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

// ═══════════════════════════════════════════════════════════════════════════
// To update your resume: Simply replace the file at public/resume.pdf
// ═══════════════════════════════════════════════════════════════════════════
const RESUME_PDF_URL = "/resume.pdf";
const RESUME_FILENAME = "Atul_Rajesh_Patel_Resume.pdf"; // ✏️ EDIT: Change download filename

interface ResumePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumePreviewDialog = ({ open, onOpenChange }: ResumePreviewDialogProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF_URL;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-[#1a1a1a] border-border overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#2a2a2a] border-b border-border">
          <span className="text-sm text-muted-foreground font-medium">Resume Preview</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-[#3a3a3a]"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* PDF Embed */}
        <div className="flex-1 h-[calc(90vh-120px)] bg-[#525659]">
          <iframe
            src={`${RESUME_PDF_URL}#toolbar=0&navpanes=0`}
            className="w-full h-full"
            title="Resume Preview"
          />
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

export default ResumePreviewDialog;
