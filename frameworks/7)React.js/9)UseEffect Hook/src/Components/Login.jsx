import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

  let { user } = useParams();
  let navigate = useNavigate();

  function goHome() {
    navigate('/');
  }
  return (
    <>
      <h1>Login Successful!<br /><br />
        User Name: {user}</h1>
      <button onClick={goHome}>go home</button>
    </>

  )
}

export default Login