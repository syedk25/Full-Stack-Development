import React from 'react'
import ProductItem from './ProductItem'
import { useState } from 'react'

function Shop() {
  const [products, setProducts] = useState({ id: 1, name: 'IPhone 17 pro', price: 100000, decscription: '8GB/256GB' });

  return (
    <div>
      <h1>Welcome to My Shop!</h1>
      <ProductItem products={products} />
    </div>
  )
}

export default Shop