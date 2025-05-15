import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom'; 

function Navbar({count}) {
    const navigate = useNavigate();
    function handleclick() {
        navigate("/")
    }
  return (
    <>
   
    <div className='nav-cointainer'>
        <h1 className='nav-heading'  onClick={handleclick}>DripKart</h1>
        <div className="nav-links">
        <NavLink to='/'>home</NavLink>
        <NavLink to='/Shop'>shop</NavLink>
        </div>
        <NavLink to='/Cart'>
         <FontAwesomeIcon icon={faShoppingCart} value="1" className="cart-icon"  /> 
            <div className="cart-count">
        Cart: {count}
      </div>
          </NavLink>
    </div>
      
    </>
  
  )
}

export default Navbar