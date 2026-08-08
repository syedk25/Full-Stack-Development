import { motion } from "motion/react";

function About()
 {
  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },

    visible: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            x: 50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.7
          }}
        >
          <h2>About Me</h2>
          <p>I'm a Full Stack Developer.</p>
        </motion.div>
      </section>
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.9
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        viewport={{
          once: true
        }}
      >
        My Skills
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true
        }}
      >
        <motion.div variants={itemVariants}>Java</motion.div>

        <motion.div variants={itemVariants}>Spring Boot</motion.div>

        <motion.div variants={itemVariants}>React</motion.div>

        <motion.div variants={itemVariants}>MySQL</motion.div>

        <motion.div variants={itemVariants}>Docker</motion.div>
      </motion.div>
    </>
  );
}

export default About;
