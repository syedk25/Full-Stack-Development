import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
  let {name}=useParams();
  return (
    <>
     {name ? <h2>Welcome to Home, Mr. {name.toLocaleUpperCase()}</h2> : <h2>Welcome to Home...</h2>}
    
     </>
  )
}

export default Home    