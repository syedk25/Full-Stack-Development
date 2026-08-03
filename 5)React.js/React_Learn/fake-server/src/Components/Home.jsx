import React from 'react'
import useFetch from '../CustomHook/useFetch';

function Home() {

  let { products } = useFetch("http://localhost:3000/Products");

  return (
    <div>
      <h2>This is Home Page</h2>
      <h2>Products: {products.length}</h2>
    </div>
  )
}

export default Home    