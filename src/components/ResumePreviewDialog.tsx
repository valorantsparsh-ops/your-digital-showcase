import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X, Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import PdfPreview from "@/components/PdfPreview";

// ═══════════════════════════════════════════════════════════════════════════
// NOTE: We serve the resume as a `.dat` file (PDF content) to avoid client
// blockers/extensions that sometimes block `.pdf` requests in embedded previews.
// To update your resume: replace `public/cv.dat` with your latest PDF (named cv.dat).
// ═══════════════════════════════════════════════════════════════════════════
const RESUME_DATA_URL = "/cv.dat";
const RESUME_FILENAME = "Atul_Patel_Resume.pdf";

interface ResumePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumePreviewDialog = ({ open, onOpenChange }: ResumePreviewDialogProps) => {
  const objectUrlRef = useRef<string | null>(null);
  const [busy, setBusy] = useState<"open" | "download" | null>(null);

  const cleanupObjectUrl = useCallback(() => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Cleanup when dialog closes/unmounts
    if (!open) cleanupObjectUrl();
    return () => cleanupObjectUrl();
  }, [open, cleanupObjectUrl]);

  const title = useMemo(() => "Resume Preview", []);
  const description = useMemo(() => "Preview and download resume", []);

  const getPdfObjectUrl = useCallback(async () => {
    if (objectUrlRef.current) return objectUrlRef.current;

    const res = await fetch(RESUME_DATA_URL);
    if (!res.ok) throw new Error(`Failed to fetch resume (${res.status})`);
    const buf = await res.arrayBuffer();
    const blob = new Blob([buf], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);
    objectUrlRef.current = url;
    return url;
  }, []);

  const handleOpen = useCallback(async () => {
    try {
      setBusy("open");
      const url = await getPdfObjectUrl();
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setBusy(null);
    }
  }, [getPdfObjectUrl]);

  const handleDownload = useCallback(async () => {
    try {
      setBusy("download");
      const url = await getPdfObjectUrl();

      const a = document.createElement("a");
      a.href = url;
      a.download = RESUME_FILENAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } finally {
      setBusy(null);
    }
  }, [getPdfObjectUrl]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-border overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {RESUME_FILENAME}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleOpen}
                disabled={busy !== null}
              >
                <ExternalLink className="h-4 w-4" />
                {busy === "open" ? "Opening…" : "Open"}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleDownload}
                disabled={busy !== null}
              >
                <Download className="h-4 w-4" />
                {busy === "download" ? "Preparing…" : "Download"}
              </Button>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onOpenChange(false)}
              type="button"
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
          <PdfPreview url={RESUME_DATA_URL} />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreviewDialog;
