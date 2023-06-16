import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'; 

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setisCartVisible } = useContext(AppContext);

  return ( 
    <button type="button" className="cart__button" onClick={ () => setisCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
