import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Product() {
  return (
    <div className="min-h-12 p-4 rounded-2xl bg-amber-50 border border-red-500">
      <h1 className="text-center">Product</h1>
      <hr />
      <div className='flex justify-between mx-3'>
        <Link to="details">Details</Link>
        <Link to="list">List</Link>
      </div> 
      <hr />
      <Outlet />
    </div>
  );
}

export default Product