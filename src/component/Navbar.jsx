import React from "react";
import { useActiveSection } from "./useActiveSection";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Navbar() {
  const activeSection = useActiveSection();

  return (
    <nav className="fixed top-4 left-8 right-8 z-50 rounded-2xl bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* LOGO */}
        <img src="./ren_logo.png" className="h-5 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center relative">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2 font-medium text-primary/80 hover:text-primary transition-all duration-300 text-sm lg:text-base transform active:translate-y-0 rounded-md menu__link ${
                  activeSection === item.href.slice(1) ? "active" : ""
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="font-poppins px-4 inline-block transform transition-transform duration-300 hover:-translate-y-1.5 relative z-10">
                  {item.name}
                </span>
              </motion.button>
            );
          })}

          <button variant="ghost" className="flex items-center justify-center w-8 h-8 ml-4 bg-primary rounded-full">
            <Moon className="h-6 w-6 fill-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
