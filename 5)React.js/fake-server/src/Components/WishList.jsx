import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";

import { useNavigate } from 'react-router-dom';
import { removeItem } from '../store/cartSlice'; // Importing the removeItem action creator from the cartSlice to remove items from the cart in the Redux store
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux to dispatch actions to the Redux store

function WishList() {
    const dispatch = useDispatch(); // Initializing the useDispatch hook to get the dispatch function for dispatching actions to the Redux store

    let cartProducts = useSelector(state => state.cart) // Accessing the cart state from the Redux store using the useSelector hook to get the products added to the cart
    console.log(cartProducts) // Logging the cart products to the console for debugging purposes

    function handleDelete(id) {
        if (window.confirm("Are you sure you want to delete this product?")) {
            // Dispatch the removeItem action with the product ID as the payload to remove the product from the cart in the Redux store
            dispatch(removeItem(id))
        }
    }
    return (
        <>
            {(cartProducts.length === 0) ? <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Your WishList is Empty</h1> :
                <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
                    {
                        cartProducts.map((product) => (
                            <Card key={product.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
                                <Card.Img variant="top" src={product.image} style={{ width: '150px', margin: 'auto' }} />
                                <Card.Body >
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text> {product.price}</Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

                                    {/*   <Button variant="primary" onClick={() => addItemToCart(product)}><MdAddShoppingCart /></Button>
                                <Button variant="secondary" onClick={() => navigate(`/updateproduct/${product.id}`)}><FaEdit /></Button> */}
                                    <Button variant="danger" onClick={() => handleDelete(product.id)}><MdDelete /></Button>

                                </Card.Footer>
                            </Card>
                        ))
                    }
                </section>
            }</>
    )
}

export default WishList
