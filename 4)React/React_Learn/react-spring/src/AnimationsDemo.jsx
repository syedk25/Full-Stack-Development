import React, { useState } from "react";
import "./AnimationsDemo.css";
import { useSpring, useTrail, useTransition, useChain, animated, useSpringRef } from "@react-spring/web";
import { useMemo } from "react";

export default function AnimationsDemo() {
  const [show, setShow] = useState(false);

  // 🔹 1. Simple spring animation (fade + slide)
  const springStyles = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  // 🔹 2. Trail animation (list items staggered)
  const items = ["React", "Spring", "Animations"];
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  });

  // 🔹 3. Transition animation (mount/unmount)
  const transition = useTransition(show, {
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
  });

  // 🔹 4. Chain animation (sequence)
  const springRef = useSpringRef();
  const chainSpring = useSpring({
    ref: springRef,
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  const trailRef = useSpringRef();
  const chainTrail = useTrail(3, {
    ref: trailRef,
    from: { opacity: 0, transform: "translateX(-30px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  });

  useChain([springRef, trailRef], [0, 0.5]); // sequence animations

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Spring Animations Demo</h1>

      {/* 1. Spring */}
      <animated.div style={springStyles} className="box">
        Simple Spring Animation
      </animated.div>

      {/* 2. Trail */}
      <div style={{ marginTop: "1rem" }}>
        {trail.map((style, i) => (
          <animated.div key={i} style={style} className="list-item">
            {items[i]}
          </animated.div>
        ))}
      </div>

      {/* 3. Transition */}
      <button onClick={() => setShow(!show)} style={{ marginTop: "1rem" }}>
        Toggle Transition
      </button>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="popup">
            Transition Animation (Mount/Unmount)
          </animated.div>
        ) : null
      )}

      {/* 4. Chain */}
      <div style={{ marginTop: "2rem" }}>
        <animated.div style={chainSpring} className="chain-box">
          Chain Animation Start
        </animated.div>
        {chainTrail.map((style, i) => (
          <animated.div key={i} style={style} className="chain-item">
            Chain Item {i + 1}
          </animated.div>
        ))}
      </div>
    </div>
  );
}
