import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import './App.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : theme==="dark"?"#333":"#0000ff",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };
  /* prev === "light" ? "dark" : prev==="dark"?"blue":"light" */
  return (
    <div id="c" style={appStyle}>
      <h1>{theme === "light" ? "Light Mode" : theme === "dark" ? "Dark Mode" : "Blue Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
