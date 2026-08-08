import React from 'react'
import { motion } from 'motion/react';

function StaggerChildren() 
{
 const containerVariants = {
   hidden: {},

   visible: {
     transition: {
       staggerChildren: 0.2,
      delayChildren: 0.5,
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
   }
 };
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1 variants={itemVariants}>Hi, I'm Syed</motion.h1>

      <motion.p variants={itemVariants}>Full Stack Developer</motion.p>

      <motion.button variants={itemVariants}>View Projects</motion.button>
    </motion.div>
  );
}

export default StaggerChildren