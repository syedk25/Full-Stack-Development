import React, { useState } from "react";
// For modern Motion v12+, use imports from "motion/react"
// For older versions, use: import { motion } from "framer-motion";
import { motion } from "motion/react";

// 1. Define parent variants with orchestration properties
const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // Delays the first child animation by 0.2 seconds
      delayChildren: 0.2,
      // Staggers the subsequent children by 0.1 seconds each
      staggerChildren: 0.1,
      staggerDirection: -9
    }
  }
};

// 2. Define child variants using the EXACT SAME keys ("hidden" & "visible")
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function AnimatedList() {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}
      >
        {isOpen ? "Hide List" : "Show List"}
      </button>

      {/* Parent Component */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        style={{
          listStyle: "none",
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
          width: "200px"
        }}
      >
        {items.map((item, index) => (
          /* Child Components */
          <motion.li
            key={index}
            variants={itemVariants}
            /* Notice: NO 'initial' or 'animate' props are needed here! */
            style={{
              padding: "10px",
              margin: "5px 0",
              background: "#fff",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
