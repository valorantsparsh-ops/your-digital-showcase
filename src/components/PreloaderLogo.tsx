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
      alt="Logo"
      className={`${className} object-contain`}
    />
  );
};

export default PreloaderLogo;
