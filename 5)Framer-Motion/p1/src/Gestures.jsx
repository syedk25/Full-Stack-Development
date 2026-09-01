import React from "react";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "motion/react";

function Gestures() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  let currentValue = 0;
  const rotate = useTransform(x, (latest) => 1 + latest);

  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  const background = useTransform(x, [-200, 0, 200], ["#ef4444", "#ffffff", "#22c55e"]);
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
      <div
        ref={constraintsRef}
        className="relative h-40 w-full overflow-hidden rounded-xl border border-dashed border-slate-500 p-4"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="h-20 w-20 rounded-xl bg-blue-500"
          style={{ x, rotate }}
        >
          Hello
        </motion.div>
        <motion.div
          drag
          style={{
            x,
            rotate,
            scale,
            background
          }}
          className="h-24 w-24 rounded-xl bg-blue-500"
        >
          welcome
        </motion.div>
      </div>
      <button
        onClick={() => {
          currentValue = x.get();
          x.set(100);
        }}
      >
        move
      </button>
      <button
        onClick={() => {
          x.set(currentValue);
        }}
      >
        move back
      </button>
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-amber-600"
        style={{ scaleX: scrollYProgress, transformOrigin: "left", opacity, scale }}
      ></motion.div>
      <motion.div style={{ y }}>Background</motion.div>
      <motion.div className="text-4xl bg-amber-300" style={{ opacity }}>
        Content
      </motion.div>
      <section ref={ref} className="min-h-screen">
        <motion.div style={{ x }}>About Me</motion.div>
      </section>
    </>
  );
}

export default Gestures;
