# Redux Simplified

A beginner-friendly React + TypeScript + Redux Toolkit learning project.

This project demonstrates how to build a small cart flow (car parts shop) with a clean, practical Redux architecture:

- central state in a Redux store
- reducer logic inside a feature slice
- typed dispatch and selector hooks
- UI actions dispatched from components
- derived UI values computed from state

## What are we building

### The App

<img width="1579" height="818" alt="Redux simplified by Rikam Palkar" src="https://github.com/user-attachments/assets/10689dc0-39a4-4e91-b833-420ce91d0fd2" />

### Cart feature
<img width="643" height="480" alt="Redux Simplified by Rikam Palkar 1" src="https://github.com/user-attachments/assets/63827a5b-d5a0-4afe-8129-ccf2b5093061" />

### How cart works
<img width="1280" height="740" alt="Output Rikam Palkar" src="https://github.com/user-attachments/assets/477202d5-5360-440d-87e5-f803611cd222" />


## What this project is about

The app focuses on one realistic use case: cart state shared across multiple components.

You can:

- browse products
- add items to cart
- increase/decrease quantities
- see live cart quantity in the header
- see cart total price calculated from state

The goal is to learn Redux by implementation, not by isolated theory.

## 5-Article Learning Path

These five articles were originally written as a step-by-step implementation series. This repository now keeps the practical summary here in the README.

1. **Foundations: The Day Your Cart State Outgrew Props**
   - explains why local state and prop drilling become hard in growing apps
   - introduces Redux mental model: store, actions, reducers, selectors
   - sets expectations for the implementation sequence used in this project

2. **Store and Slice Setup**
   - defines cart state and cart item types
   - creates `cart-slice` with `addToCart` and `removeFromCart`
   - configures the Redux store
   - exports typed helpers (`RootState`, `AppDispatch`)

3. **Typed Hooks and Provider Wiring**
   - adds typed custom hooks for dispatch and selector usage
   - wraps app with `Provider` so all components can access store
   - shows why typed hooks improve autocomplete and reduce mistakes

4. **Dispatching and Reading State in Components**
   - dispatches `addToCart` from product cards
   - dispatches add/remove actions from cart item controls
   - connects user actions (button clicks) to predictable state transitions

5. **Cart UI Flow and Derived State**
   - reads cart state with selectors
   - derives total quantity and total price with `reduce`
   - uses selected state to drive conditional rendering
   - explains the full Redux update cycle from dispatch to re-render

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- Vite

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
