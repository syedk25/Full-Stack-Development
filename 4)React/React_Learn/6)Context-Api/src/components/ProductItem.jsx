import React from 'react'
import ProductDetails from './ProductDetails'

function ProductItem({ products }) {

// let { products } = props; //accessing props in another way

  return (
    <div>
      <ProductDetails
        name={products.name}
        price={products.price}
        description={products.description}
      />
    </div>
  )
}

export default ProductItem