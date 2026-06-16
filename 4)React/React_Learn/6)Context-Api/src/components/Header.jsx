import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react';

function Header() {

  // Using Hook to receive prop or data
  let { user: { age } } = useContext(UserContext);

  return (
    <header>
      <h1>Todo List </h1>
      <p style={{ backgroundColor: "black", color: "white", padding: "0.25em", borderRadius: "50%" }}>{age} </p>
      </header>
  )
}

export default Header