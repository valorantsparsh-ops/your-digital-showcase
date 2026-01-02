import { motion } from "framer-motion";
import { X, Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
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
        <DialogDescription className="sr-only">Preview and download resume PDF</DialogDescription>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{RESUME_FILENAME}</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Open
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2"
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
              className="h-8 w-8"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* PDF Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 h-[calc(90vh-60px)] bg-muted/30"
        >
          <object
            data={RESUME_PDF_URL}
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback for browsers that can't display PDFs */}
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <FileText className="w-12 h-12 text-white" />
              </motion.div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">PDF Preview Not Available</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your browser doesn't support PDF preview.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button asChild variant="outline" className="gap-2">
                    <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Open in New Tab
                    </a>
                  </Button>
                  <Button asChild className="gap-2">
                    <a href={RESUME_PDF_URL} download={RESUME_FILENAME}>
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </object>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreviewDialog;
