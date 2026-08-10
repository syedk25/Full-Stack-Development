import { motion, useMotionValue, useTransform } from "motion/react";

export default function SwipeCard() {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-30, 30]);

  const opacity = useTransform(x, [-250, -150, 0, 150, 250], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      drag
      style={{
        x,
        rotate, 
      }}
      className="h-64 w-48 rounded-2xl bg-blue-500"
    >
      Swipe Me
    </motion.div>
  );
}
