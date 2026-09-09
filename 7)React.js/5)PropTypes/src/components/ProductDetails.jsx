import React from 'react'
import PropTypes from 'prop-types'

function ProductDetails({ name, price = 0, description = 'Not specified'   }) {
  return (
    <div>
      <section>
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Description: {description}</p>
      </section>
    </div>
  )
}

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default ProductDetails
