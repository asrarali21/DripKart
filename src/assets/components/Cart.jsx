import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from './CardContext'

function Cart() {
       const {cart , handleRemoveClick} = useContext(CartContext)

      
  return (
    <div className="cart-main-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0  ? (
        <div className="cart-empty-message">Cart is empty.</div>
      ) : (
        cart.map((item, idx) => (
         <div className="cart-item-card" key={item.id}>
             <img src={item.image} alt={item.title} className="cart-item-image" />
             <div className="cart-item-details">
               <h3 className="cart-item-title">{item.title}</h3>
               <p className="cart-item-price">${item.price}</p>
               <button className="cart-remove-btn" onClick={()=>handleRemoveClick(idx)}>Remove from Cart</button>
             </div>
         </div>
        ))
      )}
    </div>
  )
}

export default Cart