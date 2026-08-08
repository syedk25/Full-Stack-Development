import { easeInOut, motion, transform } from "motion/react";
import AnimatedList from "./AnimatedList";
import StaggerChildren from "./StaggerChildren";
import Hero from "./Hero";
import HoverCard from "./HoverCard";
import About from "./About";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";

function App() 
{
  const itemVariant={
    hidden:{
      opacity:0,y:30
    },
    visible:{
      opacity:1,y:0,
      transition:{duration:0.6,ease:"easeOut"}
    }
  }
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotate: -5
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0
        }}
        transition={{
          duration: 0.8
        }}
        className="rounded-xl bg-black/20 backdrop-blur-lg border border-black px-8 py-6 text-black"
      >
        Hello 👋
      </motion.div>
      <motion.div
        className=" bg-pink-500 px-5 py-2 rounded-full text-white border focus:border-black"
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
        whileHover={{
          scale: 1.2
        }}
        whileTap={{
          scale: 0.95
        }}
        whileInView={{
          y: 10
        }}
      >
        Click me!
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-center border p-5 gap-2  mt-5 rounded-xl bg-pink-600/20 backdrop-blur-xl"
      >
        {" "}
        <h1>Title</h1> <h2>Description</h2>{" "}
        <motion.button
          type="spring"
          whileTap={{ scale: 1.1 }}
          className="bg-blue-600 px-4 py-2 rounded-full text-whit self-start"
        >
          click me
        </motion.button>
      </motion.div>
      <div className="gap-4 mt-4 flex   rounded-xl">
        <motion.div
          className="bg-yellow-300 py-4 px-6  rounded-full border-2 border-black"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "tween"
          }}
        >
          tween animation
        </motion.div>
        <motion.div
          className="bg-yellow-300 py-4 px-6 rounded-full border-2 border-black"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "spring"
          }}
        >
          spring animation
        </motion.div>
        <motion.div
          className="bg-yellow-300 py-4 px-6 rounded-full border-2 border-black"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ scale: 1.15, type: "spring", stiffness: 300, damping: 20 }}
        >
          spring animation
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          x: -100
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          x: {
            duration: 1
          },
          opacity: {
            duration: 0.5
          }
        }}
      >
        multiple keyframes
      </motion.div>
       
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
          damping: 17
        }}
        className="rounded-lg px-6 py-3 bg-orange-400 "
      >
        View Projects
      </motion.button>
        <motion.div 
        variants={itemVariant} initial="hidden" animate="visible">Hello</motion.div>

    <AnimatedList/>
    <StaggerChildren/>
    <Hero/>
    <HoverCard/>
    <About/>
    <Skills/>
    <ProjectCard/>
    </div>
  );
}

export default App;
