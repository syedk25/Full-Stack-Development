 🛤 What is React Router?
- React by itself only builds single-page apps (SPA).
- That means everything is one page, and React just swaps components in and out.
- But real apps need multiple views (Home, About, Contact, etc.).
- React Router is a library that lets us create virtual pages inside a SPA.
- It doesn’t reload the browser—it just changes what component is shown, making navigation fast.

🛤 Why We Use React Router
- Navigation without refresh → Clicking links doesn’t reload the whole page.
- Multiple views → You can organize your app into pages.
- Dynamic routes → You can show different content based on URL (e.g., /user/123).
- Cleaner structure → Keeps code modular and easy to maintain.

🛤 How It Works (Step by Step)

1. Wrap App with BrowserRouter
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>


- BrowserRouter is like a traffic controller.
- It watches the browser’s URL and decides which component to show.
- Without this, React doesn’t know how to handle routes.

2. Define Routes
import { Routes, Route, Link } from "react-router-dom";


- Routes → container that holds all possible routes.
- Route → defines one path and which component to show.
- Link → clickable navigation that changes the URL without refreshing.

3. Example App

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}


Explanation:

- <Link to="/">Home</Link> → When clicked, changes URL to / <Home />.
- <Routes> → Holds all possible paths.
- <Route path="/about" element={<About />} /> → If URL is /about, show <About />.

4. Page Components
function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}


- Each function is a separate page.
- React Router decides which one to render based on the URL.

✅ How It All Connects
- BrowserRouter → watches the URL.
- Routes + Route → map URLs to components.
- Link → lets users navigate without refresh.
- Components → act like pages inside the SPA.

🎯 Checkpoint: You now understand what React Router is, why we use it, and how it works line by line.
👉 Next milestone: we can explore Dynamic Routing (e.g., /user/123) where the route changes based on parameters
