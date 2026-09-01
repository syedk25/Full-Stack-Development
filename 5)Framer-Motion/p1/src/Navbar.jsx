import React, { useState } from "react";
// For modern Motion v12+, use imports from "motion/react"
// For older versions, use: import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react";

// 1. Mobile Menu Container Variants
const menuVariants = {
  closed: {
    x: "100%",
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
      // Staggers the 4 navigation links sequentially
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeIn",
      // Staggers in reverse order when closing the menu
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// 2. Individual Link Item Variants
const linkVariants = {
  closed: {
    x: 50,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Projects"];

  return (
    // Base layout component using Tailwind
    <nav className="relative w-full h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between font-sans z-50">
      {/* Brand Logo Placeholder */}
      <span className="text-xl font-bold tracking-tight text-gray-900">Portfolio</span>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 p-2 text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          // Close Icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* AnimatePresence listens to direct child unmounting to trigger exit states */}
      <AnimatePresence>
        {isOpen && (
          /* Mobile Menu Fullscreen Overlay */
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 top-16 left-0 w-full h-[calc(100vh-4rem)] bg-gray-900 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              /* Navigation Links (Inheriting closed, open, and exit keys) */
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                variants={linkVariants}
                onClick={() => setIsOpen(false)} // Auto-closes panel when a link is clicked
                className="text-2xl font-medium text-gray-300 hover:text-sky-400 transition-colors duration-200"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
