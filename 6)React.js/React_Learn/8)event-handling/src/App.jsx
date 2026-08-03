import { useState } from 'react'
import './App.css'
import Timer from './Components/UseEffectiveHook'
import { MyButton } from './Components/EventHandling' 
import { LoginForm } from './Components/UseStateHook'


function App() {
  return (
    <div className="App"> 
       <MyButton /> 
      <LoginForm/>
      <Timer />
    </div>

  )
}

export default App
