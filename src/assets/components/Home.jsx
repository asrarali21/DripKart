import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import Footer from './Footer'

function Home() {
    
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setStoreData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const navigate = useNavigate();
    function handleclick() {
        navigate("/shop")
    }
    function handleMenclick() {
        navigate('/mencollection', { state: { mydata: storeData } });
    }
    function handleWomenclick() {
        navigate('/womencollection', { state: { mydata: storeData } });
    }
    function handleElectroniclick() {
        navigate('/electronic', { state: { mydata: storeData } });
    }
    function handleJewelleryclick() {
        navigate('/jewellery', { state: { mydata: storeData } });
    }

  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="main-heading-container">
        <video autoPlay loop muted className="background-video">
          <source src="/BG-sitevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className='content'>
          <h1 className='main-heading'>Welcome To DripKart</h1>
          <button className='main-button' onClick={handleclick}>SHOP NOW !</button>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <h1 className='category-heading'>Category</h1>
        <div className='homeSections'>
          <div onClick={handleMenclick}>
            <h2>Men's Clothing</h2>
            <img src="https://image.hm.com/assets/hm/39/2e/392e227cbe047f0a8da5e88d2c4b1ad76b7779de.jpg?imwidth=1260" alt="Men's clothing collection" />
          </div>
          <div onClick={handleWomenclick}>
            <h2>Women's Clothing</h2>
            <img src="https://image.hm.com/assets/hm/26/77/26779aa1ee33a0eb12d4dc16ef71f837bd83d9fb.jpg?imwidth=1260" alt="Women's clothing collection" />
          </div>
          <div onClick={handleElectroniclick}>
            <h2>Electronics</h2>
            <img src="https://www.kuka.com/-/media/kuka-corporate/images/industries/electronics/3c-industry/teaser-3c-industry-electronics-production-2022-07-26.jpg?rev=-1&w=1900&hash=14A75B769BCD7B43DB803C9F15EFBFEB" alt="Electronics collection" />
          </div>
          <div onClick={handleJewelleryclick}>
            <h2>Jewellery</h2>
            <img src="https://image.hm.com/assets/hm/9a/8e/9a8e4c33980475d8da14bd08b9ba61430d477c93.jpg?imwidth=1260" alt="Jewellery collection" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default Home