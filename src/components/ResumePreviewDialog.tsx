import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Maximize2, Minimize2, FileText } from "lucide-react";
import { useState } from "react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={`p-0 overflow-hidden [&>button]:hidden transition-all duration-500 ease-out border-0 bg-transparent shadow-none ${
          isFullscreen 
            ? "max-w-[95vw] w-[95vw] h-[95vh] max-h-[95vh]" 
            : "max-w-4xl w-[92vw] h-[85vh] max-h-[85vh]"
        }`}
      >
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        
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
          <div className="relative flex items-center justify-between px-5 py-4 bg-gradient-to-r from-muted/80 via-muted/60 to-muted/80 border-b border-border/50 backdrop-blur-sm">
            {/* File info */}
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-2 rounded-xl bg-primary/10 border border-primary/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FileText className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground tracking-tight">
                  {RESUME_FILENAME}
                </span>
                <span className="text-xs text-muted-foreground">
                  PDF Document
                </span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <AnimatePresence mode="wait">
                    {isFullscreen ? (
                      <motion.div
                        key="minimize"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Minimize2 className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="maximize"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="sm"
                  className="rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground gap-2 px-4 shadow-lg shadow-primary/25 border border-primary/20"
                >
                  <a href={RESUME_PDF_URL} download={RESUME_FILENAME}>
                    <Download className="h-4 w-4" />
                    <span className="font-medium">Download</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors"
                  onClick={() => onOpenChange(false)}
                >
                  <X className="h-5 w-5" />
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
