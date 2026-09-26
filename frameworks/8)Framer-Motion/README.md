# Framer Motion: Beginner Course

An interactive course for learning Framer Motion from the beginning. No prior Motion knowledge is assumed. It teaches the basic vocabulary, first animation, animatable properties, transitions, gestures, variants, exit animations, drag constraints, and a small notification project.

The course uses React, Vite, Framer Motion, and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev
```

Open the local URL printed by Vite and start with **What is Framer Motion?**. Each lesson includes plain-language explanations, a live example, copyable code, and a completion control. Lesson progress is saved in your browser.

## Create the same project from scratch

Use Node.js, then run:

```bash
npm create vite@latest my-motion-app -- --template react
cd my-motion-app
npm install
npm install framer-motion
npm install -D tailwindcss @tailwindcss/vite
npm run dev
```

In Vite, configure the Tailwind plugin:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()]
});
```

Then add `@import "tailwindcss";` to your main CSS file. Import Motion components with `import { motion } from "framer-motion";`.
