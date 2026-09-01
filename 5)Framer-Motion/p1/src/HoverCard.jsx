import React from "react";
// For modern Motion v12+, use imports from "motion/react"
// For older versions, use: import { motion } from "framer-motion";
import { motion } from "motion/react";

// 1. Parent variants defining the animated styles
const containerVariants = {
  hidden: {
    backgroundColor: "#ffffff", // bg-white
    scale: 1
  },
  hover: {
    backgroundColor: "#111827", // bg-gray-900
    scale: 1.02,
    transition: {
      duration: 0.3,
      staggerChildren: 0.08 // Staggers child entries on hover
    }
  }
};

// 2. Child variants defining the animated styles
const itemVariants = {
  hidden: {
    color: "#374151", // text-gray-700
    x: 0
  },
  hover: {
    color: "#38bdf8", // text-sky-400
    x: 12, // Translates 12px to the right
    transition: {
      type: "spring",
      duration: 0.3,
      stiffness: 250,
      damping: 20
    }
  }
};

export default function HoverCardTailwind() {
  const features = ["⚡ High Performance", "🎨 Custom Themes", "🔒 Secure Assets"];

  return (
    // Base layout container
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-12">
      {/* Parent Card Component */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileHover="hover"
        // Tailwind handles the layout, borders, padding, and base shadow
        className="w-80 p-8 rounded-2xl shadow-md border border-gray-200 cursor-pointer"
      >
        {/* Header - We use pure Tailwind to change text color dynamically on hover using 'group-hover' */}
        {/* Alternately, you can make this a motion.h3 and use variants */}
        <h3 className="text-xl font-bold font-sans text-gray-900 mb-6 transition-colors duration-300 group-hover:text-white">
          Hover Over Me
        </h3>

        {/* Child Items Wrapper */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              /* Inherits whileHover="hovered" from the parent automatically */
              className="text-base font-semibold font-sans"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
