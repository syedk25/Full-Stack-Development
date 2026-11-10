import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Slab } from 'react-loading-indicators';
import useFetch from '../CustomHook/useFetch';
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

import { useDispatch ,useSelector} from 'react-redux'; // Importing useDispatch hook from react-redux to dispatch actions to the Redux store
import { addItem } from '../store/cartSlice'; // Importing the addItem action creator from the cartSlice to add items to the cart in the Redux store


function ProductList() 
{
  // All hooks must be called at the top level, before any conditional logic
  let { products, loading, error, setProducts } = useFetch("http://localhost:3000/Products");

  let navigate = useNavigate(); // hook to navigate programmatically

  let dispatch = useDispatch(); // Initializing the dispatch function to dispatch actions to the Redux store
  
  let cartProducts = useSelector(state => state.cart) // Accessing the cart state from the Redux store using the useSelector hook to get the products added to the cart

  function addItemToCart(product) 
  {
    let isAlreadyInCart=cartProducts.some(item=>item.id===product.id) // Check if the product is already in the cart by comparing the product ID with the IDs of the products in the cart
    if(isAlreadyInCart) {
      Swal.fire({
        title: "Product Already in Cart",
        text: "This product is already in your cart.",
        icon: "info"
      });
    } else {
      dispatch(addItem(product)); // Dispatching the addItem action with the product as the payload to add the product to the cart in the Redux store
      Swal.fire({
        title: "Added to Cart",
        text: "The product has been added to your cart.",
        icon: "success"
      });
    }
  }

  if (loading) {
    return (
      <div >
        <Slab color="#ffe63c" size="large" text="Loading" textColor="red" />
      </div>
    )
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:3000/Products/${id}`)
        .then(() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          });

          let updatedProducts = products.filter((product) => product.id !== id);
          setProducts(updatedProducts);

          // After deletion, we can either refetch the products or update the state to remove the deleted product
          // For simplicity, let's just refetch the products
          navigate('/products'); // This will trigger a re-render and fetch the updated list of products
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div>
      <h1>Product List</h1>
      <Button variant="primary" onClick={() => navigate("/newproduct")}><MdAddShoppingCart /> Add New Product</Button>

      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
        {
          products.map((product) => (
            <Card key={product.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
              <Card.Img variant="top" src={product.image} style={{ width: '150px', margin: 'auto' }} />
              <Card.Body >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> {product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

                <Button variant="primary" onClick={() => addItemToCart(product)}><MdAddShoppingCart /></Button>
                <Button variant="secondary" onClick={() => navigate(`/updateproduct/${product.id}`)}><FaEdit /></Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}><MdDelete /></Button>

              </Card.Footer>
            </Card>
          ))
        }
      </section>
      {
        error && <p style={{ color: 'red' }}>Error: {error}</p>
      }
      <Outlet />
    </div>

  )
}

export default ProductList