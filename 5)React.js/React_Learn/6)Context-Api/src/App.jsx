
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import React, { createContext,useState } from 'react';


export const UserContext = createContext(); //creating context

function App() {

  let [user, setUser] = useState({ uname: "syed", age: 21, email: "abc@gmail.com" });


  return (
    
    //sending user data to components using provider
    <UserContext.Provider value={{ user }}> 
      <div className='App'>
        <Header />
        <Content />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App

