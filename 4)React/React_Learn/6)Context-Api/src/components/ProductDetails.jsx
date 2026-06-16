import React, { useContext } from 'react'
import { UserContext } from '../App'

function ProductDetails({ name = 'Unspecified', price = 0, description = 'Not specified' }) {

  let { user } = useContext(UserContext);

  console.log('User from context:', user);

  return (
    <div>
      <section>
        <article>
          <h1>UserName :  {user.uname}</h1>
        </article>
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Description: {description}</p>
      </section>
    </div>
  )
}

export default ProductDetails
