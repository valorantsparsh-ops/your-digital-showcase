import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

/* ✏️ EDIT: Your social links */
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@yourname.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors"
              >
                <Code2 className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-display text-xl font-bold">YourName</span> {/* ✏️ EDIT */}
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Building digital experiences that matter. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Built with
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            by <span className="text-foreground font-medium">YourName</span> {/* ✏️ EDIT */}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full border border-border group-hover:border-primary/50 flex items-center justify-center"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
