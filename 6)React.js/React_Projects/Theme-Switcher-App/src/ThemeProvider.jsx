import { createContext, useState } from "react";


export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : prev==="dark"?"blue":"light")); 
    //console.log(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;

{/*  {children} → means whatever is inside  */}