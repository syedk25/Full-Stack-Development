import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./coponents/Header";
import Hero from "./coponents/Hero";
import Main from "./coponents/Main";
import Pricing from "./coponents/Pricing";
import Stories from "./coponents/Stories";
import Footer from "./coponents/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Hero/>
      <Main/>
      <Pricing/>
      <Stories/>
      <Footer/>
    </>
  );
}

export default App;
