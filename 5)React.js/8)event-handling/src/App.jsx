import { useState } from 'react'
import './App.css'
import Timer from './Components/UseEffectiveHook' 
import { LoginForm } from './Components/UseStateHook'
import MyButton from "./Components/EventHandling"

function App() {
  return (
    <div className="App"> 
       <MyButton/>
      <LoginForm/>
      <Timer />
    </div>

  )
}

export default App
