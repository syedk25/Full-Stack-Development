import React from 'react'
import ProductDetails from './ProductDetails';
import { useState } from 'react';

function Content() {
  const [products, setProducts] = useState({ id: 1, name: 'IPhone 17 pro', price: 100000, decscription: '8GB/256GB' });
  return (
    <main>
      <h1>Welcome to My Shop!</h1>
      <ProductDetails products={products}
      />
    </main>
  )
}

export default Content