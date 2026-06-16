 
import './App.css'
import Hello from './Components/Hello.jsx' 
import Counter from './Components/Counter.jsx'
import FavoriteColor from './Components/FavoriteColor.jsx'
// App.js
import { useContext } from 'react';
import { ThemeContext } from './Components/Context.jsx'

function App() {
  return (
    <div className="App">
      <Hello />                         {/* props */}
      <Counter />                        {/* state */}
      <FavoriteColor />                  {/* state */}         
    </div>
  );
}

export default App; 