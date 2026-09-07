
import React, { useContext } from 'react'
import { UserContext } from '../App'

function Footer() 
{

// Accessing context value using useContext hook
  const { user } = useContext(UserContext);
  return (
    <footer>
      <h1>Footer</h1>

// Using Consumer component to access context value
      <UserContext.Consumer>
        {
          ({ user }) => (
            <p>UserName: {user.uname}</p>
          )
        }
      </UserContext.Consumer>

      <p>UserName: {user.uname}</p>
    </footer>
  )
}

export default Footer