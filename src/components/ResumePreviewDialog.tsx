import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2, Minimize2, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`p-0 overflow-hidden [&>button]:hidden transition-all duration-500 ease-out border-0 bg-transparent shadow-none ${
          isFullscreen 
            ? "max-w-[95vw] w-[95vw] h-[95vh] max-h-[95vh]" 
            : "max-w-4xl w-[92vw] sm:w-[92vw] h-[80vh] sm:h-[85vh] max-h-[85vh]"
        }`}
      >
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        <DialogDescription className="sr-only">Preview and download resume PDF</DialogDescription>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full h-full rounded-2xl overflow-hidden bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none" />
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-border/20 to-primary/20 -z-10 blur-sm" />

          {/* Header */}
          <div className="relative flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-muted/80 via-muted/60 to-muted/80 border-b border-border/50 backdrop-blur-sm">
            {/* File info */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-primary/10 bg-gradient-to-br from-red-500 to-red-600 border border-primary/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-foreground tracking-tight truncate max-w-[120px] sm:max-w-none">
                  {RESUME_FILENAME}
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">PDF Document</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground gap-1 sm:gap-2 px-2 sm:px-4 h-8 sm:h-9 shadow-lg shadow-primary/25 border border-primary/20"
                >
                  <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Open</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground gap-1 sm:gap-2 px-2 sm:px-4 h-8 sm:h-9 shadow-lg shadow-primary/25 border border-primary/20"
                >
                  <a href={RESUME_PDF_URL} download={RESUME_FILENAME}>
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="font-medium hidden sm:inline">Download</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25 border border-primary/20 hover:bg-destructive/10 hover:text-destructive transition-colors"
                  onClick={() => onOpenChange(false)}
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* PDF Preview */}
          <div className="relative flex-1 w-full h-[calc(100%-72px)] bg-gradient-to-b from-muted/20 to-muted/40">
            {/* Loading state */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm z-10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-3 border-primary/30 border-t-primary rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              src={`${RESUME_PDF_URL}#toolbar=0&navpanes=0&view=FitH`}
              className="w-full h-full border-0"
              title="Resume Preview"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreviewDialog;
