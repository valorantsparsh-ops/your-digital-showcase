import { motion } from "framer-motion";
import { X, Download, FileText, ExternalLink } from "lucide-react";
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[90vw] p-0 bg-card border-border overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
          <span className="text-sm font-medium text-foreground">Resume</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center gap-6">
          {/* PDF Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-24 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg"
          >
            <FileText className="w-12 h-12 text-white" />
          </motion.div>

          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-1">{RESUME_FILENAME}</h3>
            <p className="text-sm text-muted-foreground">PDF Document</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2"
              >
                <a href={RESUME_PDF_URL} download={RESUME_FILENAME}>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full gap-2"
              >
                <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreviewDialog;
