import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Product from './Components/Product'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import ProductList from './Components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  let user = "k.syed"
  let place = "solamadevi"
  return (
    <div className="App">
      <Router>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/login/${user}`}>Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ol>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home/:place' element={<Home />} />
          <Route path='/login/:user' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/product' element={<Product />} >
            <Route path='details' element={<ProductDetail />} />
            <Route path='list' element={<ProductList />} />
            <Route  index element={<ProductList />} />
          </Route>

        </Routes>
      </Router>
    </div>)
}

export default App
