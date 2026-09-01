import { hover, motion, scale } from "motion/react";

const containerVariants = {
  hidden: {},

  visible: {
    transition: { 
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  },
  hover:{
   scale:1.2
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: "100%"
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  
};

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <motion.div variants={containerVariants} whileHover="hover" initial="hidden" animate="visible" className="text-center">
        <motion.h1 variants={itemVariants}  className="text-5xl font-bold">
          Hi, I'm Syed
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-4 text-xl">
          Full Stack Developer
        </motion.p>

        <motion.button variants={itemVariants} className="mt-6 rounded-lg px-6 py-3">
          View Projects
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
