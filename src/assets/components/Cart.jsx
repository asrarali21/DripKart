import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from './CardContext'

function Cart() {
       const {cart} = useContext(CartContext)
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item, idx) => (
          <li>
          <img src={item.image} alt="" />
          <button>Remove from Cart</button>
          </li>
        ))
      )}
    </div>
  )
}

export default Cart