import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import './Collection.css'

function WomensCollection() {
  const location = useLocation();
  const data = location.state?.mydata || []
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const womenClothes = data.filter((item) => item.category === "women's clothing")

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
        <h1 className='collection-title'>Women's Collection</h1>

        <div className="collection-grid">
          {womenClothes.map((item) => (
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

export default WomensCollection