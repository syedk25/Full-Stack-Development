import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from '../store/hooks.ts';

export default function Header() {

  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartItems = useCartSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <h1>learn redux + Typescript with cart feature</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartItems})</button>
        </p>
      </header>
    </>
  );
}
