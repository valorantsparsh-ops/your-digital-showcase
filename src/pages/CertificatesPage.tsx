import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

/* ✏️ EDIT: Your certificates - add image URLs when you have them */
const certificates = [
  {
    id: 1,
    name: "Flipkart Hackathon",
    issuer: "Flipkart",
    year: "2022",
    category: "tech",
    image: null, /* ✏️ EDIT: Add your certificate image URL */
    link: "#", /* ✏️ EDIT: Add view link */
  },
  {
    id: 2,
    name: "Solution Challenge",
    issuer: "Google Developers",
    year: "2023",
    category: "tech",
    image: null,
    link: "#",
  },
  {
    id: 3,
    name: "ADira",
    issuer: "SCET AI Club",
    year: "2025",
    category: "tech",
    image: null,
    link: "#",
  },
  {
    id: 4,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    category: "tech",
    image: null,
    link: "#",
  },
  {
    id: 5,
    name: "Leadership Excellence",
    issuer: "University",
    year: "2023",
    category: "others",
    image: null,
    link: "#",
  },
  {
    id: 6,
    name: "Community Service",
    issuer: "NGO Foundation",
    year: "2022",
    category: "others",
    image: null,
    link: "#",
  },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/10 blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

// Lightbox Modal Component
const Lightbox = ({ 
  isOpen, 
  onClose, 
  certificate 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  certificate: typeof certificates[0] | null;
}) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-card/80 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all z-10"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Certificate Image */}
            <div className="aspect-[16/10] bg-secondary/30 flex items-center justify-center">
              {certificate.image ? (
                <img 
                  src={certificate.image} 
                  alt={certificate.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-12">
                  <Award className="w-24 h-24 text-primary/40 mx-auto mb-6" />
                  <p className="text-lg text-muted-foreground">Certificate of Participation</p>
                  <h3 className="text-2xl font-bold mt-4 text-foreground">{certificate.name}</h3>
                  <p className="text-muted-foreground mt-2">{certificate.issuer} • {certificate.year}</p>
                </div>
              )}
            </div>

            {/* Certificate Info Bar */}
            <div className="p-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-xl">{certificate.name}</h3>
                <p className="text-muted-foreground">{certificate.issuer} • {certificate.year}</p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Original
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CertificatesPage = () => {
  const [activeFilter, setActiveFilter] = useState<"tech" | "others">("tech");
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredCertificates = certificates.filter(cert => cert.category === activeFilter);

  const openLightbox = (cert: typeof certificates[0]) => {
    setSelectedCertificate(cert);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="font-display text-3xl md:text-4xl font-bold">Certificates</h1>
                <span className="text-3xl">🏅</span>
              </div>
              <p className="text-muted-foreground text-lg">
                Explore my certifications — technical & others.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-3 mb-10">
              <Button
                onClick={() => setActiveFilter("tech")}
                variant={activeFilter === "tech" ? "default" : "secondary"}
                className={`px-6 ${activeFilter === "tech" ? "bg-primary text-primary-foreground" : ""}`}
              >
                Tech
              </Button>
              <Button
                onClick={() => setActiveFilter("others")}
                variant={activeFilter === "others" ? "default" : "secondary"}
                className={`px-6 ${activeFilter === "others" ? "bg-primary text-primary-foreground" : ""}`}
              >
                Others
              </Button>
            </div>

            {/* Certificates Grid */}
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltCard>
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300 group">
                      {/* Certificate Image Placeholder with hover effect */}
                      <div 
                        className="aspect-[4/3] bg-secondary/30 flex items-center justify-center border-b border-border/50 relative cursor-pointer overflow-hidden"
                        onClick={() => openLightbox(cert)}
                      >
                        {cert.image ? (
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <Award className="w-16 h-16 text-primary/40 mx-auto mb-3" />
                            <p className="text-xs text-muted-foreground">Certificate of Participation</p>
                            <p className="text-sm font-medium mt-2 text-foreground">{cert.name}</p>
                          </div>
                        )}
                        {/* Hover Overlay */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center"
                        >
                          <div className="flex items-center gap-2 text-primary">
                            <ZoomIn className="w-6 h-6" />
                            <span className="font-medium">View Full</span>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Certificate Info */}
                      <div className="p-5">
                        <h3 className="font-display font-bold text-lg mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {cert.issuer} • {cert.year}
                        </p>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => openLightbox(cert)}
                        >
                          <ZoomIn className="w-3 h-3 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredCertificates.length === 0 && (
              <div className="text-center py-16">
                <Award className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No certificates in this category yet.</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      <Lightbox 
        isOpen={isLightboxOpen} 
        onClose={closeLightbox} 
        certificate={selectedCertificate} 
      />
    </div>
  );
};

export default CertificatesPage;
