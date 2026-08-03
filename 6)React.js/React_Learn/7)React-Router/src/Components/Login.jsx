import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

  let { user } = useParams();
  
  let navigate = useNavigate(); // hook to navigate programmatically

  return (
    <>
      <h1>Login Successful!<br /><br />
        User Name: {user}</h1>
      <button onClick={goHome}>go home</button>

      <button onClick={() => navigate('/product')}>go to products</button>
    </>

  )
}

  function goHome() {
    navigate('/syed');
  }
  
export default Login