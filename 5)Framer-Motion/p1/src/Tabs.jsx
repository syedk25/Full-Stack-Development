import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("about");

  const [isOpen,setIsOpen]=useState(false);
  const content = {
    about: "About me content",
    skills: "My skills content",
    projects: "My projects content"
  };

  return (
    <div>
      <div className="flex gap-4">
        <button onClick={() => setActiveTab("about")}>About</button>

        <button onClick={() => setActiveTab("skills")}>Skills</button>

        <button onClick={() => setActiveTab("projects")}>Projects</button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.3
          }}
        >
          {content[activeTab]}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 30
              }}
            >
              Modal Content
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={(isOpen) => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
      >
        btn
      </button>
      <nav>
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                x: "100%"
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: "100%"
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
