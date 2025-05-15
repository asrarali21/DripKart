import React,{useEffect,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'; 
import "./Shop.css"
function Shop() {
   
  function handleclick(id) {
    navigate(`/description/${id}`)
  }

   const [Storedata, setStoredata] = useState([])
   const [productname, setproductname] = useState("")
  const [FilterProduct, setFilterProduct] = useState([])
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
    
    useEffect (()=>{
    let filteredProducts = Storedata.filter((item , i)=>{
      if (item.title.toLowerCase().includes(productname.toLowerCase())) {
        return true ;
      }
  })
  console.log(filteredProducts);
  setFilterProduct(filteredProducts);
  
  }, [productname,Storedata])
   
  return (
    <>

    <div className="shopnav-container"> 
  <NavLink to="/mencollection"  >Mens Collection</NavLink>
  <NavLink to="/Jewellery" >Jewellery</NavLink>
  <NavLink to="/womencollection" >Women Collection</NavLink>
  <NavLink to="/electronic" >Electronic Section</NavLink>
    </div>
       <input type="text" 
       className='search-input'
       value={productname}
       placeholder='Search products here'
       onChange={(e)=>setproductname(e.target.value)}
       />
      
      <h1 className='All-product-heading'>All Product</h1>
      { FilterProduct.length === 0 ? <h3 className='product-not-found'>Product Not Found</h3> : null }
    <div className='cart-data'>
    { FilterProduct.length === 0 && productname === "" ? (
      Storedata.map((item) => {
        return (
          <div key={item.id} className='cart-container' onClick={() => handleclick(item.id)}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p> ${item.price}</p>
          </div>
        );
      })
    ) : (
      FilterProduct.map((item) => {
        return (
          <div key={item.id} className='cart-container' onClick={() => handleclick(item.id)}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p> ${item.price}</p>
          </div>
        );
      })
    )}
    </div>
    </>
  )
}

export default Shop