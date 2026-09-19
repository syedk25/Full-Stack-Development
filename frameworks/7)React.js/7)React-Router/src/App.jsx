import { useState } from "react"; 
import Home from "./Home.jsx";
import SignUp from "./SignUp";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Product from "./Product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  const [count, setCount] = useState(0);

  let user = { name: "k.syed", city: "solamadevi" };

  return (
    <div>
      <Router>
        <ol className="bg-gray-400 flex justify-around py-3 shadow-xl text-2xl fixed w-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>              
            <Link to={`/login/${user.name}`}>Login</Link>    {/*  route parameter */}
          </li>                                              {/*  passed inside the url */}
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ol>
        <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Home />} />          // Receive route parameter
            <Route path="/login/:user" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/product" element={<Product />}>
              <Route path="details" element={<ProductDetail />} />
              <Route index path="list" element={<ProductList />} />
              <Route index element={<ProductList />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
} 
