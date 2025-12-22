import { motion } from "framer-motion";
import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
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

const CertificatesPage = () => {
  const [activeFilter, setActiveFilter] = useState<"tech" | "others">("tech");

  const filteredCertificates = certificates.filter(cert => cert.category === activeFilter);

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
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
                      {/* Certificate Image Placeholder */}
                      <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center border-b border-border/50">
                        {cert.image ? (
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <Award className="w-16 h-16 text-primary/40 mx-auto mb-3" />
                            <p className="text-xs text-muted-foreground">Certificate of Participation</p>
                            <p className="text-sm font-medium mt-2 text-foreground">{cert.name}</p>
                          </div>
                        )}
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
                          asChild
                        >
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-2" />
                            View
                          </a>
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
    </div>
  );
};

export default CertificatesPage;
