import React from 'react'
import {motion,AnimatePresence} from 'motion/react'

function AnimatePresence1() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            Hello 👋
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Menu</button>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4
              }}
            >
              <button onClick={() => setIsOpen(false)}>Close</button>

              <p>Home</p>
              <p>About</p>
              <p>Projects</p>
              <p>Contact</p>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AnimatePresence1