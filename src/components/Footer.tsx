import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import coderi8Logo from "@/assets/coderi8.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Internship", href: "/internship" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-1 sm:px-2 lg:px-4 relative z-10 py-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link to="/">
                <img src={coderi8Logo} alt="Coderi8" className="h-14 md:h-16 lg:h-20 w-auto" />
              </Link>
            </motion.div>
            <div className="mt-6 space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary lg:w-6 lg:h-6" />
                <span>support@coderi8.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground lg:gap-4 lg:text-base">
                <Phone className="w-5 h-5 text-primary lg:w-6 lg:h-6" />
                <span>+91 9344521726</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:text-center">
            <h4 className="font-heading font-semibold mb-4 lg:mb-6 lg:text-lg">Quick Links</h4>
            <div className="flex flex-wrap gap-3 lg:gap-4 lg:justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors lg:text-base whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:text-right">
            <p className="text-sm text-muted-foreground lg:text-base">
              © 2026 Coderi8. All Rights Reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground lg:text-base">
              Empowering students with practical tech skills.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
