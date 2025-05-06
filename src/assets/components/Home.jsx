import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

function Home() {
    const navigate =useNavigate();
        function handleclick() {
            navigate("/shop")
        }
  return (
    <>
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
 
 </>
  )
}

export default Home