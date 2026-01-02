import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker for Vite (and disable it as a fallback if extensions block workers)
import PdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = PdfWorkerUrl;
(pdfjs as any).disableWorker = true;


type PdfPreviewProps = {
  url: string; // points to a PDF-like file (we use .dat to avoid client blockers)
  className?: string;
};

export default function PdfPreview({ url, className }: PdfPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState<number>(0);
  const [hasError, setHasError] = useState(false);
  const [pdfData, setPdfData] = useState<ArrayBuffer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? 0;
      setContainerWidth(Math.floor(w));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        setHasError(false);
        setPdfData(null);
        const res = await fetch(url, { signal: ac.signal });
        if (!res.ok) throw new Error(`Failed to fetch PDF data (${res.status})`);
        const buf = await res.arrayBuffer();
        setPdfData(buf);
      } catch {
        if (!ac.signal.aborted) setHasError(true);
      }
    })();

    return () => ac.abort();
  }, [url]);

  const pageWidth = Math.max(320, Math.min(containerWidth - 32, 960));

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="max-w-md text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            PDF preview is blocked in this browser context. Please open it in a new tab.
          </p>
          <Button asChild variant="outline" className="gap-2">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Open in New Tab
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={"h-full w-full overflow-auto " + (className ?? "")}
    >
      <div className="mx-auto w-fit px-4 py-6">
        {!pdfData ? (
          <div className="text-sm text-muted-foreground">Loading resume…</div>
        ) : (
          <Document
            file={{ data: pdfData }}
            onLoadSuccess={({ numPages: n }) => setNumPages(n)}
            onLoadError={() => setHasError(true)}
            error={null}
            noData={null}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <Page
                  pageNumber={i + 1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                />
              </div>
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}

