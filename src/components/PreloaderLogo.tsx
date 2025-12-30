// ═══════════════════════════════════════════════════════════════════════════
// ✏️ PRELOADER LOGO COMPONENT
// To change your preloader logo, simply update the import below
// ═══════════════════════════════════════════════════════════════════════════

import preloaderLogo from "@/assets/preloader-logo.png";

interface PreloaderLogoProps {
  className?: string;
}

const PreloaderLogo = ({ className = "w-20 h-20" }: PreloaderLogoProps) => {
  return (
    <img
      src={preloaderLogo}
      alt="Atul Patel logo"
      className={`${className} object-contain bg-transparent mix-blend-multiply brightness-110 contrast-110`}
      draggable={false}
    />
  );
};

export default PreloaderLogo;
