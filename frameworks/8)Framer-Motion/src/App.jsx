import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

const tiles = [
  { label: "01", color: "coral" },
  { label: "02", color: "blue" },
  { label: "03", color: "yellow" }
];

const tileVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

function Example({ number, title, description, code, className = "", children }) {
  return (
    <article className={`example ${className}`}>
      <div className="example-heading">
        <span className="example-number">{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="stage">{children}</div>
      <code className="code-note">{code}</code>
    </article>
  );
}

function App() {
  const [replayKey, setReplayKey] = useState(0);
  const [showNote, setShowNote] = useState(true);
  const [showTiles, setShowTiles] = useState(true);
  const dragArea = useRef(null);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Motion Lab home">
          <span className="wordmark-mark" aria-hidden="true">
            m
          </span>
          <span>motion lab</span>
        </a>
        <span className="topbar-note">A tiny, hands-on introduction</span>
        <a className="topbar-link" href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
          Framer Motion docs <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="intro" id="top">
        <div className="intro-copy">
          <p className="eyebrow">
            <span className="live-dot" /> FRAMER MOTION / FIELD NOTES 01
          </p>
          <h1>
            Make the interface
            <br />
            <span>feel alive.</span>
          </h1>
          <p className="intro-description">
            Small, useful motion patterns you can play with. Change a prop, press a button, and see what happens.
          </p>
        </div>
        <div className="intro-art" aria-hidden="true">
          <motion.div
            className="orbit orbit-one"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="orbit orbit-two"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="orbit-core"
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>m</span>
          </motion.div>
          <span className="orbit-label">
            motion
            <br />
            is a feature
          </span>
        </div>
      </section>

      <section className="examples-grid" aria-label="Framer Motion examples">
        <Example
          number="01"
          title="Enter + animate"
          description="Set a starting point, then animate to a new state."
          code={"initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}"}
          className="example-enter"
        >
          <div className="enter-stage">
            <motion.div
              key={replayKey}
              className="enter-shape"
              initial={{ opacity: 0, y: 24, rotate: -12, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 190, damping: 16 }}
            >
              <span>hello</span>
            </motion.div>
          </div>
          <button className="text-button" onClick={() => setReplayKey((key) => key + 1)}>
            <span aria-hidden="true">↻</span> Replay
          </button>
        </Example>

        <Example
          number="02"
          title="Hover + tap"
          description="Add an immediate response to user input."
          code={"whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}"}
          className="example-hover"
        >
          <div className="hover-stage">
            <motion.button
              className="hover-button"
              whileHover={{ scale: 1.07, rotate: -3 }}
              whileTap={{ scale: 0.93, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
            >
              <span className="hover-spark" aria-hidden="true">
                ✳
              </span>
              <span>Press me</span>
            </motion.button>
            <span className="stage-hint">hover · press</span>
          </div>
        </Example>

        <Example
          number="03"
          title="Variants + stagger"
          description="Coordinate related elements from one parent."
          code={"variants={container} transition={{ staggerChildren: 0.12 }}"}
          className="example-variants"
        >
          <div className="variants-stage">
            <motion.div
              className="tile-row"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              animate={showTiles ? "visible" : "hidden"}
            >
              {tiles.map((tile) => (
                <motion.div
                  key={tile.label}
                  className={`variant-tile ${tile.color}`}
                  variants={tileVariants}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  {tile.label}
                </motion.div>
              ))}
            </motion.div>
            <button className="text-button" onClick={() => setShowTiles((visible) => !visible)}>
              {showTiles ? "Hide tiles" : "Show tiles"} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </Example>

        <Example
          number="04"
          title="AnimatePresence"
          description="Animate an element as it enters and leaves."
          code={"<AnimatePresence>{isVisible && <motion.div exit={{ opacity: 0 }} />}</AnimatePresence>"}
          className="example-presence"
        >
          <div className="presence-stage">
            <div className="note-slot">
              <AnimatePresence mode="wait">
                {showNote && (
                  <motion.div
                    className="sticky-note"
                    key="note"
                    initial={{ opacity: 0, scale: 0.7, rotate: -12, y: 18 }}
                    animate={{ opacity: 1, scale: 1, rotate: 3, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, rotate: 12, y: -12 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  >
                    <span>
                      Be right
                      <br />
                      back!
                    </span>
                    <span className="note-star" aria-hidden="true">
                      ✳
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="text-button" onClick={() => setShowNote((visible) => !visible)}>
              {showNote ? "Dismiss note" : "Bring it back"} <span aria-hidden="true">↔</span>
            </button>
          </div>
        </Example>

        <Example
          number="05"
          title="Drag + constraints"
          description="Let an element move, but keep it in bounds."
          code={"drag dragConstraints={ref} dragElastic={0.12}"}
          className="example-drag"
        >
          <div className="drag-stage" ref={dragArea}>
            <div className="drag-outline" aria-hidden="true">
              <span>stay in here</span>
            </div>
            <motion.div
              className="drag-object"
              drag
              dragConstraints={dragArea}
              dragElastic={0.12}
              dragMomentum={false}
              whileDrag={{ scale: 1.08, rotate: 7, cursor: "grabbing" }}
            >
              <span aria-hidden="true">✣</span>
              <small>DRAG</small>
            </motion.div>
          </div>
        </Example>

        <aside className="closing-note">
          <span className="closing-mark" aria-hidden="true">
            ↗
          </span>
          <div>
            <p className="eyebrow">THAT'S THE MOTION</p>
            <p>Compose these building blocks to make interactions feel clear, responsive, and a little more human.</p>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <span>
          Motion Lab <span aria-hidden="true">·</span> React + Framer Motion
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
