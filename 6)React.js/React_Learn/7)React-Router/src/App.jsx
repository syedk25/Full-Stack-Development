import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Product from "./Components/Product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";

function App() {
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
            <Link to={`/login/${user.name}`}>Login</Link>
          </li>
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
            <Route path="/:name" element={<Home />} />
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

export default App;
