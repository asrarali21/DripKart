import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Shop.css';

function SharedLayout() {
  return (
    <>
      <div className="shopnav-container">
        <NavLink to="/mencollection">Mens Collection</NavLink>
        <NavLink to="/jewellery">Jewellery</NavLink>
        <NavLink to="/womencollection">Women Collection</NavLink>
        <NavLink to="/electronic">Electronic Section</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default SharedLayout;