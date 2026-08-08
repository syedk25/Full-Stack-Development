import { motion } from "motion/react";

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
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",

      type: "spring",
      stiffness: 100,
      damping: 15
    }
  } 
}; 
function Skills() {
  const skills = ["Java", "Spring Boot", "React", "JavaScript", "MySQL", "Docker"];

  return (
    <section className="min-h-screen px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2
        }}
        className="grid gap-6 md:grid-cols-3"
      >
        {skills.map((skill) => (
          <motion.div key={skill} variants={itemVariants} className="rounded-xl border p-6">
            {skill}
          </motion.div>
        ))}
      </motion.div>      
    </section>
  );
}

export default Skills;
