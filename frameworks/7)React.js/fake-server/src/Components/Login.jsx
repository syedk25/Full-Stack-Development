import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

  let { user } = useParams();
  
  let navigate = useNavigate(); // hook to navigate programmatically

  function goHome() {
    navigate('/'); // navigate to home page
  }
  return (
    <>
      <h1>Login Successful!<br /><br />
        User Name: {user}</h1>
      <button onClick={goHome}>go home</button>

      <button onClick={() => navigate('/products')}>go to products</button>
    </>

  )
}

export default Login