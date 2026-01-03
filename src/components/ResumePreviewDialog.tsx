import { motion } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
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
const RESUME_FILENAME = "Atul_Patel_Resume.pdf";

interface ResumePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumePreviewDialog = ({ open, onOpenChange }: ResumePreviewDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-border overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">{RESUME_FILENAME}</span>
          </div>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full"
              >
                <a href={RESUME_PDF_URL} download={RESUME_FILENAME}>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </motion.div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* PDF Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 w-full h-[calc(100%-56px)] bg-muted/20"
        >
          <iframe
            src={`${RESUME_PDF_URL}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-0"
            title="Resume Preview"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreviewDialog;
