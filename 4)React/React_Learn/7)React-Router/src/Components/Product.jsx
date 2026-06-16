import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      <h1>Product</h1>

      <Link to='details'>Details</Link>
      <span>                   </span>
      <Link to='list'>List</Link>

      <hr />

      <Outlet />

    </div>
  )
}

export default Product