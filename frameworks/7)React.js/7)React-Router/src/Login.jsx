import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

  let { user } = useParams();
  
  let navigate = useNavigate(); // hook to navigate programmatically

  return (
    <div className="bg-gray-400 p-4 rounded-xl   flex flex-col gap-4">
      <h1 className="bg-gray-600 rounded-md px-3">Login Successful! </h1>
      <h2> User Name: {user}</h2>
      <button onClick={()=>navigate("/")} className='bg-green-500 rounded-full'>go home</button>

      <button onClick={() => navigate("/product")} className='bg-red-500 rounded-full'>go to products</button>
    </div>
  );
}
 
  
export default Login
