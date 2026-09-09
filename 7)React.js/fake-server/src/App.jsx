import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Product from './Components/Product'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import ProductList from './Components/ProductList'
import NavScrollExample from './Components/NavScrollExample'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Components/Todo/Todo'
import NewProduct from './Components/NewProduct'
import UpdateProduct from './Components/UpdateProduct'
import WishList from './Components/WishList'

// Initializing the cart in localStorage as an empty array if it doesn't exist, to persist the cart state across page reloads.
 if(localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", JSON.stringify([]))
}
 
function App() {
  const [count, setCount] = useState(0)
  let user = "k.syed"
  let place = "solamadevi"
  return (
    <div className="App">
      <Router>
        <NavScrollExample />
        {/* <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/login/${user}`}>Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ol> */}
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/login/:user' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/todo' element={<Todo />} />

          <Route path='/products' element={<Product />} >
            <Route path='list' element={<ProductList />} />
            <Route path='details' element={<ProductDetail />} />
            <Route index element={<ProductList />} />
          </Route>

          <Route path='*' element={<h1>404 Not Found</h1>} /> // catch all route like default in switch case

          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/updateproduct/:id' element={<UpdateProduct />} />
          <Route path='/wishlist' element={<WishList />} />

        </Routes>
      </Router>
    </div>)
}

export default App
