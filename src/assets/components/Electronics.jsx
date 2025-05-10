import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import './Collection.css'

function Electronics() {
  const location = useLocation();
  const data = location.state?.mydata || []
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const electronics = data.filter((item) => item.category === "electronics")

  function handleclick(id) {
    navigate(`/description/${id}`)
  }

  function HandleNavigate() {
    navigate("/shop")
  }

  return (
    <>
      <div className="collection-page">
        <button className='collection-nav-button' onClick={HandleNavigate}>Back</button>
        <h1 className='collection-title'>Electronics Collection</h1>

        <div className="collection-grid">
          {electronics.map((item) => (
            <div key={item.id} className='collection-card' onClick={() => handleclick(item.id)}>
              <img src={item.image} alt={item.title} />
              <p className="collection-card-title">{item.title}</p>
              <p className="collection-card-price">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Electronics