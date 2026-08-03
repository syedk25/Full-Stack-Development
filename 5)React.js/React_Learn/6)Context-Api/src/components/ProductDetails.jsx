import React, { useContext } from 'react'
import { UserContext } from '../App'

function ProductDetails({ products }) 
{
  let {uname,price,description}=products;

  let { user } = useContext(UserContext);

  console.log('User from context:',user);

  return (
    <div>
      <section>
        <article>
          <h1>UserName :  {uname}</h1>
        </article>
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Description: {description}</p>
      </section>
    </div>
  )
}

export default ProductDetails
