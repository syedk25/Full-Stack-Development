import React from 'react'
import ProductItem from './ProductItem'
import UserProfile from './UserProfile';

function Shop() {
  const [products, setProducts] = React.useState(
    { id: 1, name: "2222", price: 100000, description: '8GB/256GB' });

  const [user, setUser] = React.useState(
    { id: 1, name: "John Doe", age: 30, isAdmin: true });

  return (
    <div>
      <h1>Welcome to My Shop!</h1>
      {/* <h2>{products.name}</h2>
        <p>Price: ${products.price.toFixed(2)}</p>
        <p>Description: {products.decscription}</p> */}

      <ProductItem products={products} />
      
      <UserProfile user={user} />
    </div>
  )
}

export default Shop

