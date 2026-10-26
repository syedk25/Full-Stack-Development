import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lessons = [
  {
    id: "start",
    group: "START HERE",
    title: "What is Framer Motion?",
    subtitle: "First, understand where Motion fits in a React project.",
    idea: "React decides what is on the page. Framer Motion describes how an element changes over time.",
    terms: [
      ["React component", "A function that returns a piece of your interface."],
      ["motion.div", "A normal div enhanced with animation props."],
      ["Motion prop", "A setting like animate or whileHover that tells Motion what to do."]
    ],
    steps: [
      "You do not need previous Framer Motion experience. This course uses small React examples and explains each new Motion term.",
      "Motion works alongside React and CSS; it does not replace them.",
      "To use it in your own Vite + React project, install the package and import motion from framer-motion."
    ],
    code: "# Create a React project with Vite\nnpm create vite@latest my-motion-app -- --template react\ncd my-motion-app\nnpm install\nnpm install framer-motion\nnpm run dev",
    demo: "start"
  },
  {
    id: "first",
    group: "LEARN THE BASICS",
    title: "Your first animation",
    subtitle: "Three props describe the start, destination, and journey.",
    idea: "initial is where the element starts. animate is where it goes. transition describes the trip.",
    terms: [
      ["initial", "The starting visual values before an animation runs."],
      ["animate", "The target visual values. Motion moves from initial to this state."],
      ["transition", "How the change feels, such as how long it takes or whether it springs."]
    ],
    steps: [
      "Import motion from framer-motion.",
      "Change div to motion.div. It still renders a normal HTML div, but now understands Motion props.",
      "Press Replay. The shape fades in while moving to its final position."
    ],
    code: `import { motion } from "framer-motion";

function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello, Motion!
    </motion.div>
  );
}`,
    demo: "first"
  },
  {
    id: "properties",
    group: "LEARN THE BASICS",
    title: "Move, fade, turn, and scale",
    subtitle: "Animate several visual properties with one animate prop.",
    idea: "Motion values are numbers that describe the target appearance of an element.",
    terms: [
      ["x / y", "Move horizontally or vertically in pixels. Positive x moves right; positive y moves down."],
      ["opacity", "Visibility from 0 (invisible) to 1 (fully visible)."],
      ["rotate / scale", "Turn in degrees or resize. A scale of 1 is the original size."]
    ],
    steps: [
      "Choose a property in the control above the demo.",
      "Watch the target value change. Motion animates from the current value to the new one.",
      "Try combining x, rotate, scale, and opacity in one animate object."
    ],
    code: `<motion.div
  animate={{
    x: 40,       // move right 40 pixels
    rotate: 8,   // turn 8 degrees
    scale: 1.1,  // grow to 110%
    opacity: 1,  // fully visible
  }}
/>`,
    demo: "properties"
  },
  {
    id: "transitions",
    group: "LEARN THE BASICS",
    title: "Choose the feel",
    subtitle: "A transition controls the character of the movement.",
    idea: "Use a tween for a set duration. Use a spring when you want movement to feel physical.",
    terms: [
      ["Tween", "A predictable animation that takes the duration you set."],
      ["Spring", "A movement that settles naturally. stiffness and damping tune its bounce and settling speed."],
      ["duration", "Time in seconds for a tween. Springs use physical values instead."]
    ],
    steps: [
      "Switch between Spring and Tween to compare the same movement.",
      "A tween is steady and predictable. A spring can feel more connected to a user's action.",
      "There is no perfect value. Keep motion clear and quick enough not to slow the task down."
    ],
    code: `// Predictable timing
transition={{ type: "tween", duration: 0.45 }}

// Spring-like movement
transition={{ type: "spring", stiffness: 220, damping: 18 }}`,
    demo: "transitions"
  },
  {
    id: "gestures",
    group: "ADD INTERACTION",
    title: "Respond to a person",
    subtitle: "Gesture props describe temporary states during interaction.",
    idea: "whileHover and whileTap react to input, then return to the element's normal state.",
    terms: [
      ["whileHover", "Target values while a pointer is over an element."],
      ["whileTap", "Target values while an element is being pressed."],
      ["Feedback", "A small visual response can make a control feel connected to a person's action."]
    ],
    steps: [
      "Move your pointer over the button, then press and hold it.",
      "The button temporarily uses the whileHover and whileTap values.",
      "Motion also supports focus, drag, and pan gestures. Start with one clear response at a time."
    ],
    code: `<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Press me
</motion.button>`,
    demo: "gestures"
  },
  {
    id: "variants",
    group: "ADD INTERACTION",
    title: "Animate a group",
    subtitle: "Variants name reusable states and coordinate related elements.",
    idea: "A parent can coordinate named child states. staggerChildren adds a delay between each child.",
    terms: [
      ["Variant", "A named set of target values, often called hidden and visible."],
      ["Parent", "A motion element that tells variant-aware children which state is active."],
      ["staggerChildren", "A delay between children starting, so a group arrives in sequence."]
    ],
    steps: [
      "Use Show tiles to replay the group animation.",
      "The parent changes from hidden to visible. Each child uses the same named states.",
      "Staggering children is easier to manage than timing every tile separately."
    ],
    code: `const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.12 } },
  }}
>
  <motion.div variants={item} />
  <motion.div variants={item} />
</motion.div>`,
    demo: "variants"
  },
  {
    id: "exit",
    group: "ADD INTERACTION",
    title: "Animate an element leaving",
    subtitle: "Let Motion handle removal so an exit animation can finish.",
    idea: "AnimatePresence keeps a removed child around long enough to animate its exit prop.",
    terms: [
      ["AnimatePresence", "A wrapper that enables exit animations for children removed from React."],
      ["exit", "The visual values an element animates toward as it is removed."],
      ["key", "A stable identity React uses to tell one child apart from another."]
    ],
    steps: [
      "Dismiss the note, then bring it back. Watch it animate both ways.",
      "The note is conditionally rendered. AnimatePresence sees it disappear and runs its exit animation.",
      "Give an exiting child a key so Motion can track which element is leaving."
    ],
    code: `<AnimatePresence>
  {isVisible && (
    <motion.div
      key="note"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
    >
      A note
    </motion.div>
  )}
</AnimatePresence>`,
    demo: "exit"
  },
  {
    id: "drag",
    group: "ADD INTERACTION",
    title: "Drag with boundaries",
    subtitle: "Make an element draggable and keep it inside a parent.",
    idea: "drag enables pointer movement. A ref can define the dragConstraints boundary.",
    terms: [
      ["useRef", "A React tool for keeping a reference to a DOM element, such as the boundary."],
      ["dragConstraints", "The limits Motion uses to restrict how far the element can travel."],
      ["dragElastic", "How much the element can stretch beyond the limits. 0 is rigid."]
    ],
    steps: [
      "Drag the blue shape around inside the dotted boundary.",
      "The ref points to the boundary. Motion reads its size and uses it as the drag limit.",
      "Drag is useful when movement is part of the task, not just decoration."
    ],
    code: `import { useRef } from "react";
import { motion } from "framer-motion";

function Draggable() {
  const boundary = useRef(null);
  return (
    <div ref={boundary}>
      <motion.div
        drag
        dragConstraints={boundary}
        dragElastic={0.12}
      />
    </div>
  );
}`,
    demo: "drag"
  },
  {
    id: "project",
    group: "PUT IT TOGETHER",
    title: "Mini project: a notification",
    subtitle: "Combine React state, gestures, and an exit animation.",
    idea: "A small UI animation combines React state (what exists) with Motion states (how it changes).",
    terms: [
      ["State", "React remembers whether the notification should be shown."],
      ["Enter", "initial and animate describe how it appears."],
      ["Exit", "AnimatePresence and exit describe how it is removed."]
    ],
    steps: [
      "Dismiss the notification, then bring it back with Show notification.",
      "The button updates React state. That state decides whether the toast exists.",
      "Try changing a Motion value in the code example and compare the result."
    ],
    code: `import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ToastDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(true)}>Show</button>
      <AnimatePresence>
        {visible && (
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ scale: 1.02 }}
          >
            Saved successfully
            <button onClick={() => setVisible(false)}>Dismiss</button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}`,
    demo: "project"
  }
];

const propertyTargets = {
  x: { x: 42, y: 0, rotate: 0, scale: 1, opacity: 1 },
  y: { x: 0, y: -28, rotate: 0, scale: 1, opacity: 1 },
  rotate: { x: 0, y: 0, rotate: 22, scale: 1, opacity: 1 },
  scale: { x: 0, y: 0, rotate: 0, scale: 1.25, opacity: 1 },
  opacity: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 0.25 }
};

function loadProgress() {
  try {
    const value = JSON.parse(window.localStorage.getItem("motion-lab-progress") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-md border border-ink/15 bg-ink text-paper">
      <div className="flex items-center justify-between border-b border-paper/15 px-4 py-2 font-mono text-[10px] tracking-wide text-paper/60">
        <span>EXAMPLE CODE</span>
        <button
          className="rounded px-2 py-1 text-paper transition hover:bg-paper/10 hover:text-white"
          onClick={copyCode}
          type="button"
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-6 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function LessonDemo({ lesson, boundaryRef }) {
  const [replay, setReplay] = useState(0);
  const [property, setProperty] = useState("x");
  const [transitionType, setTransitionType] = useState("spring");
  const [tilesVisible, setTilesVisible] = useState(true);
  const [noteVisible, setNoteVisible] = useState(true);
  const [toastVisible, setToastVisible] = useState(true);

  switch (lesson.demo) {
    case "start": {
      return (
        <div className="flex max-w-lg flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-coral px-4 py-3 font-display text-lg text-white">React</span>
            <span className="font-mono text-xl text-muted">+</span>
            <span className="rounded-md bg-blue px-4 py-3 font-display text-lg text-ink">Motion</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Keep your React components. Add Motion to the elements whose changes should feel animated.
          </p>
        </div>
      );
    }

    case "first": {
      return (
        <div className="flex flex-col items-center gap-5">
          <motion.div
            key={replay}
            className="grid size-24 place-items-center rounded-[35%] bg-coral font-display text-xl text-white shadow-lg shadow-coral/20"
            initial={{ opacity: 0, y: 34, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 190, damping: 16 }}
          >
            Hello!
          </motion.div>
          <button
            className="rounded-sm border border-ink/20 px-4 py-2 text-xs font-semibold transition hover:border-coral hover:text-coral"
            onClick={() => setReplay((value) => value + 1)}
            type="button"
          >
            Replay entrance
          </button>
        </div>
      );
    }

    case "properties": {
      return (
        <div className="flex w-full max-w-xl flex-col items-center gap-5">
          <div
            className="flex flex-wrap justify-center gap-1 rounded-md border border-ink/10 bg-paper p-1"
            aria-label="Choose a motion property"
          >
            {Object.keys(propertyTargets).map((name) => (
              <button
                className={`rounded px-3 py-2 font-mono text-xs transition ${property === name ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}
                key={name}
                aria-pressed={property === name}
                onClick={() => setProperty(name)}
                type="button"
              >
                {name}
              </button>
            ))}
          </div>
          <div className="grid h-32 w-full place-items-center overflow-hidden border-y border-dashed border-ink/20">
            <motion.div
              className="size-16 rounded-lg bg-blue shadow-md"
              animate={propertyTargets[property]}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
            />
          </div>
          <p className="text-xs text-muted">
            Currently animating: <strong className="font-mono text-ink">{property}</strong>
          </p>
        </div>
      );
    }

    case "transitions": {
      const transition =
        transitionType === "spring"
          ? { type: "spring", stiffness: 180, damping: 13 }
          : { type: "tween", duration: 0.7, ease: "easeInOut" };
      return (
        <div className="flex w-full max-w-xl flex-col items-center gap-5">
          <div className="flex gap-1 rounded-md border border-ink/10 bg-paper p-1">
            {["spring", "tween"].map((name) => (
              <button
                className={`rounded px-4 py-2 font-mono text-xs ${transitionType === name ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}
                key={name}
                aria-pressed={transitionType === name}
                onClick={() => setTransitionType(name)}
                type="button"
              >
                {name}
              </button>
            ))}
          </div>
          <div className="grid h-32 w-full place-items-center overflow-hidden border-y border-dashed border-ink/20">
            <motion.div
              key={transitionType}
              className="size-16 rounded-lg bg-yellow shadow-md"
              initial={{ x: -90, rotate: -12 }}
              animate={{ x: 90, rotate: 12 }}
              transition={transition}
            />
          </div>
          <p className="text-xs text-muted">
            Selected feel: <strong className="font-mono text-ink">{transitionType}</strong>
          </p>
        </div>
      );
    }

    case "gestures": {
      return (
        <div className="flex flex-col items-center gap-5">
          <motion.button
            className="rounded-md bg-ink px-7 py-4 font-display text-lg text-paper shadow-md"
            whileHover={{ scale: 1.07, rotate: -3 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            type="button"
          >
            Hover, then press
          </motion.button>
          <p className="text-xs text-muted">Try a pointer or touch screen.</p>
        </div>
      );
    }

    case "variants": {
      return (
        <div className="flex flex-col items-center gap-5">
          <motion.div
            className="flex gap-3"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            initial="hidden"
            animate={tilesVisible ? "visible" : "hidden"}
          >
            {["bg-coral", "bg-blue", "bg-yellow"].map((color, index) => (
              <motion.div
                className={`grid size-16 place-items-center rounded-sm font-mono text-sm text-ink ${color}`}
                key={color}
                variants={{ hidden: { opacity: 0, y: 18, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ type: "spring", stiffness: 210, damping: 18 }}
              >
                0{index + 1}
              </motion.div>
            ))}
          </motion.div>
          <button
            className="rounded-sm border border-ink/20 px-4 py-2 text-xs font-semibold hover:border-coral hover:text-coral"
            onClick={() => setTilesVisible((visible) => !visible)}
            type="button"
          >
            {tilesVisible ? "Hide tiles" : "Show tiles"}
          </button>
        </div>
      );
    }

    case "exit": {
      return (
        <div className="flex flex-col items-center gap-3">
          <div className="grid h-24 place-items-center">
            <AnimatePresence mode="wait">
              {noteVisible && (
                <motion.div
                  className="grid h-16 w-40 place-items-center bg-yellow px-5 text-center font-display text-sm shadow-md"
                  key="lesson-note"
                  initial={{ opacity: 0, y: 16, rotate: -8, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
                  exit={{ opacity: 0, y: -12, rotate: 8, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 230, damping: 18 }}
                >
                  Exit gracefully
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className="rounded-sm border border-ink/20 px-4 py-2 text-xs font-semibold hover:border-coral hover:text-coral"
            onClick={() => setNoteVisible((visible) => !visible)}
            type="button"
          >
            {noteVisible ? "Dismiss note" : "Bring it back"}
          </button>
        </div>
      );
    }

    case "drag": {
      return (
        <div
          className="relative grid h-56 w-full max-w-xl place-items-center rounded-sm border border-dashed border-ink/35 bg-paper/60"
          ref={boundaryRef}
        >
          <span className="absolute left-3 top-3 font-mono text-[10px] uppercase text-muted">
            Drag inside this area
          </span>
          <motion.div
            className="grid size-16 cursor-grab touch-none select-none place-items-center rounded-full border border-ink bg-blue font-mono text-xs text-ink shadow-md active:cursor-grabbing"
            drag
            dragConstraints={boundaryRef}
            dragElastic={0.12}
            dragMomentum={false}
            whileDrag={{ scale: 1.08, rotate: 6 }}
          >
            <span aria-hidden="true" className="text-xl">
              +
            </span>
            <small>DRAG</small>
          </motion.div>
        </div>
      );
    }

    default:
      return (
        <div className="flex w-full max-w-xl flex-col items-center gap-3">
          <button
            className="rounded-sm border border-ink/20 px-4 py-2 text-xs font-semibold hover:border-coral hover:text-coral"
            onClick={() => setToastVisible(true)}
            type="button"
          >
            Show notification
          </button>
          <div className="grid min-h-24 w-full place-items-center">
            <AnimatePresence>
              {toastVisible && (
                <motion.aside
                  className="flex w-full max-w-sm items-center gap-3 border border-ink/15 bg-white px-4 py-3 shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue font-mono text-[9px]">
                    OK
                  </span>
                  <span className="flex-1 text-sm">Saved successfully</span>
                  <button
                    className="text-xs text-muted underline decoration-dotted underline-offset-4 hover:text-coral"
                    onClick={() => setToastVisible(false)}
                    type="button"
                  >
                    Dismiss
                  </button>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
  }
}

function App() {
  const [activeId, setActiveId] = useState("start");
  const [completed, setCompleted] = useState(loadProgress);
  const boundaryRef = useRef(null);
  const activeIndex = lessons.findIndex((lesson) => lesson.id === activeId);
  const lesson = lessons[activeIndex] || lessons[0];
  const percent = Math.round((completed.length / lessons.length) * 100);
  const isFinalLesson = activeIndex === lessons.length - 1;
  const lessonIsComplete = completed.includes(lesson.id);
  let continueLabel = "Complete and continue";

  if (isFinalLesson) {
    continueLabel = "Finish course";
  } else if (lessonIsComplete) {
    continueLabel = "Continue to next lesson";
  }

  useEffect(() => {
    window.localStorage.setItem("motion-lab-progress", JSON.stringify(completed));
  }, [completed]);

  function selectLesson(id) {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function completeLesson() {
    setCompleted((current) => (current.includes(lesson.id) ? current : [...current, lesson.id]));
    if (activeIndex < lessons.length - 1) selectLesson(lessons[activeIndex + 1].id);
  }

  function continueCourse() {
    if (isFinalLesson) {
      setCompleted((current) => (current.includes(lesson.id) ? current : [...current, lesson.id]));
      return;
    }
    completeLesson();
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="mx-auto flex min-h-16 max-w-[1320px] items-center justify-between border-b border-line px-4 sm:px-8">
        <a
          className="flex items-center gap-2 font-display text-base font-bold"
          href="#course"
          aria-label="Motion Lab course home"
        >
          <span className="grid size-7 place-items-center rounded-full bg-coral text-lg leading-none text-white">
            m
          </span>
          <span>motion lab</span>
        </a>
        <span className="hidden text-xs text-muted sm:block">A beginner course in Framer Motion</span>
        <a
          className="flex items-center gap-2 text-xs hover:text-coral"
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noreferrer"
        >
          Official docs <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section
        className="mx-auto flex max-w-[1320px] flex-col gap-6 px-4 py-8 sm:px-8 sm:py-10 md:flex-row md:items-end md:justify-between"
        id="course"
      >
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-wide text-muted">REACT ANIMATION / START AT THE BEGINNING</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Framer Motion, <span className="text-coral">from zero.</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
            A hands-on path from your first motion component to a working animated notification. No Framer Motion
            experience needed.
          </p>
        </div>
        <div className="w-full max-w-xs md:pb-1">
          <div className="mb-2 flex justify-between font-mono text-[10px] text-muted">
            <span>COURSE PROGRESS</span>
            <strong className="text-ink">
              {completed.length}/{lessons.length}
            </strong>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-coral transition-[width] duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </section>

      <div className="mx-auto grid min-w-0 grid-cols-1 max-w-[1320px] gap-8 px-4 pb-10 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
        <aside className="min-w-0 self-start lg:sticky lg:top-5" aria-label="Course lessons">
          <div className="mb-3 flex justify-between border-b border-line pb-2 font-mono text-[10px] text-muted">
            <span>YOUR LEARNING PATH</span>
            <span>09</span>
          </div>
          <nav className="flex gap-6 overflow-x-auto pb-2 lg:block lg:overflow-visible">
            {[...new Set(lessons.map((item) => item.group))].map((group) => (
              <div className="min-w-48 lg:mb-5 lg:min-w-0" key={group}>
                <p className="mb-2 font-mono text-[9px] tracking-wide text-muted">{group}</p>
                <div className="flex gap-1 lg:flex-col">
                  {lessons
                    .filter((item) => item.group === group)
                    .map((item) => {
                      const index = lessons.indexOf(item);
                      const active = item.id === lesson.id;
                      const done = completed.includes(item.id);
                      const linkColor = active ? "bg-ink text-paper" : "text-ink hover:bg-ink/5";
                      let badgeColor = "bg-ink/5 text-muted";
                      if (active) badgeColor = "bg-coral text-white";
                      else if (done) badgeColor = "bg-blue text-ink";
                      return (
                        <button
                          className={`flex min-h-9 shrink-0 items-center gap-2 rounded-sm px-2 text-left text-xs transition lg:w-full ${linkColor}`}
                          key={item.id}
                          aria-current={active ? "step" : undefined}
                          onClick={() => selectLesson(item.id)}
                          type="button"
                        >
                          <span
                            className={`grid size-5 shrink-0 place-items-center rounded-full font-mono text-[9px] ${badgeColor}`}
                          >
                            {done ? "✓" : String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </nav>
          <p className="mt-3 hidden border-l-2 border-yellow pl-3 text-[11px] leading-5 text-muted lg:block">
            Your completed lessons are saved in this browser. Revisit any topic whenever you need.
          </p>
        </aside>

        <main className="min-w-0">
          <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-muted">
            <span>
              LESSON {String(activeIndex + 1).padStart(2, "0")} / {String(lessons.length).padStart(2, "0")}
            </span>
            {completed.includes(lesson.id) && <span className="text-coral">COMPLETED</span>}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{lesson.title}</h2>
              <p className="mt-2 text-sm text-muted">{lesson.subtitle}</p>
            </div>
            <span className="hidden font-display text-5xl font-semibold text-line sm:block">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <section className="mt-6 border-l-4 border-coral bg-coral/5 px-4 py-4 sm:px-5">
            <p className="font-mono text-[9px] tracking-wide text-coral">THE BIG IDEA</p>
            <p className="mt-1 text-sm leading-6">{lesson.idea}</p>
          </section>

          <div className="mt-8 grid min-w-0 grid-cols-1 gap-8 xl:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)]">
            <section>
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-coral">A</span>
                <h3 className="font-display text-lg font-semibold">Understand the pieces</h3>
              </div>
              <div className="divide-y divide-line border-y border-line">
                {lesson.terms.map(([term, meaning]) => (
                  <div className="py-3" key={term}>
                    <h4 className="font-mono text-xs font-medium">{term}</h4>
                    <p className="mt-1 text-xs leading-5 text-muted">{meaning}</p>
                  </div>
                ))}
              </div>
              <div className="mb-4 mt-8 flex items-center gap-2">
                <span className="font-mono text-xs text-coral">B</span>
                <h3 className="font-display text-lg font-semibold">Follow along</h3>
              </div>
              <ol className="space-y-3">
                {lesson.steps.map((step, index) => (
                  <li className="flex gap-3" key={step}>
                    <span className="pt-0.5 font-mono text-[10px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs leading-5 text-muted">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="min-w-0">
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-coral">C</span>
                <h3 className="font-display text-lg font-semibold">Try it yourself</h3>
              </div>
              <p className="mb-3 text-xs text-muted">Use the controls, then notice what changed.</p>
              <div className="grid min-h-56 place-items-center overflow-hidden border-y border-line bg-stage px-4 py-6">
                <LessonDemo key={lesson.id} lesson={lesson} boundaryRef={boundaryRef} />
              </div>
              <div className="mb-3 mt-7 flex items-center gap-2">
                <span className="font-mono text-xs text-coral">D</span>
                <h3 className="font-display text-lg font-semibold">Read the code</h3>
              </div>
              <p className="mb-3 text-xs leading-5 text-muted">
                Look for the props from this lesson. The names are the same as the ones in the demo.
              </p>
              <CodeBlock code={lesson.code} />
            </section>
          </div>

          <div className="mt-9 flex items-center justify-between border-t border-line pt-5">
            <button
              className="text-xs text-muted transition hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
              disabled={activeIndex === 0}
              onClick={() => selectLesson(lessons[activeIndex - 1].id)}
              type="button"
            >
              ← Previous lesson
            </button>
            <button
              className="flex min-h-10 items-center gap-3 rounded-sm bg-ink px-4 text-xs font-medium text-paper transition hover:bg-coral"
              onClick={continueCourse}
              type="button"
            >
              {continueLabel}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </main>
      </div>

      <footer className="mx-auto flex max-w-[1320px] flex-col justify-between gap-2 border-t border-line px-4 py-5 font-mono text-[9px] text-muted sm:flex-row sm:px-8">
        <span>Motion Lab / Learn by changing one thing at a time.</span>
        <span>Built with React + Framer Motion</span>
      </footer>
    </div>
  );
}

export default App;
