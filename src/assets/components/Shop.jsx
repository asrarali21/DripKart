import React,{useEffect,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'; 
import "./Shop.css"
function Shop() {
   
  function handleclick(id) {
    navigate(`/description/${id}`)
  }

   const [Storedata, setStoredata] = useState([])
   const navigate = useNavigate(); 

   const api = "https://fakestoreapi.com/products"
   const Datafetch = async ()=>{
    try {
    const FirstResponce = await fetch(api)
    const FirstResponcejson = await FirstResponce.json()
    console.log(FirstResponcejson);
    
    setStoredata(FirstResponcejson);
  }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }
    useEffect(() => {
      Datafetch(); 
    }, []);
    
    

  return (
    <>
    <div className="shopnav-container"> 
  <NavLink to="/mencollection"  >Mens Collection</NavLink>
  <NavLink to="/Jewellery" >Jewellery</NavLink>
  <NavLink to="/womencollection" >Women Collection</NavLink>
  <NavLink to="/electronic" >Electronic Section</NavLink>
    </div>
      <h1 className='All-product-heading'>All Product</h1>
    <div className='cart-data'>
     {Storedata.map((item)=>{
       return (
         <div key={item.id} className='cart-container' onClick={()=>handleclick(item.id)}>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <p> ${item.price}</p>
        </div>
      )
    })}
    </div>
    </>
  )
}

export default Shop