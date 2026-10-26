 
import './App.css'
import Hello from './Components/Hello.jsx' 
import Counter from './Components/Counter.jsx'
import FavoriteColor from './Components/FavoriteColor.jsx' 

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