import React from "react";
import { motion } from "motion/react";

function ProjectCard() {
  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const items = ["HTML", "CSS", "JAVASCRIPT", "JAVA", "REACT", "SPRING BOOT", "MYSQL", "GIT", "GITHUB"];

  return (
    <div className="min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4
        }}
        className="grid gap-3 md:grid-cols-3"
      >
        {items.map((item) => (
          <motion.h2
            key={item}
            variants={itemVariants}
            className="rounded-xl border border-white bg-yellow-400 p-6 text-center text-white"
          >
            {item}
          </motion.h2>
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectCard;
