import React from "react";
import { useRef } from "react";
import { motion, useMotionValue } from "motion/react";

function Gestures() {
  const x = useMotionValue(0);
  const constraintsRef = useRef(null);
  const cardVariants = {
    normal: {
      scale: 1
    },

    hover: {
      scale: 1.03
    }
  };

  const arrowVariants = {
    normal: {
      x: 0
    },

    hover: {
      x: 8
    }
  };
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -3
        }}
      >
        View Project
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, y: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.95 }}
      >
        View Project
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15
        }}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        View My Projects
      </motion.button>
      <motion.input
        whileFocus={{
          scale: 1.02
        }}
        placeholder="Enter your name"
      />
      <motion.div
        drag="x"
        whileDrag={{
          scale: 1.1,
          rotate: 5
        }}
      >
        Drag Me
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: 300,
          top: 0,
          bottom: 300
        }}
      >
        Drag Me
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: 300,
          top: 0,
          bottom: 300
        }}
        dragElastic={0.2}
      >
        Drag Me
      </motion.div>
      <motion.div
        drag
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        whileDrag={{
          scale: 1.1,
          rotate: 5
        }}
      >
        Interactive Card
      </motion.div>
      <motion.div variants={cardVariants} initial="normal" whileHover="hover" className="rounded-xl border p-6">
        <h2 className="text-xl font-bold">Portfolio Website</h2>

        <p className="mt-2">React + Tailwind CSS portfolio.</p>

        <div className="mt-6 flex items-center gap-2">
          <span>View Project</span>

          <motion.span variants={arrowVariants}>→</motion.span>
        </div>
      </motion.div>
      <motion.div style={{ x }}>Hello</motion.div>
    </>
  );
}

export default Gestures;
