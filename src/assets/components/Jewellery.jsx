import React, { useEffect , useContext} from 'react'
import {  useNavigate } from 'react-router-dom'
import Footer from './Footer'
import './Collection.css'
import { StoreContext } from './StoreProvider';


function Jewellery() {

  const {storeData} =useContext(StoreContext)

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jewellery = storeData.filter((item) => item.category === "jewelery")

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
        <h1 className='collection-title'>Jewellery Collection</h1>

        <div className="collection-grid">
          {jewellery.map((item) => (
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

export default Jewellery