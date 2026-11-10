import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
  let {place}=useParams();
  return (
    <h1>Home-{place}</h1>
  )
}

export default Home    