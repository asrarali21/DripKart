import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Description.css"

function Description() {
      const {id} = useParams()
      const [product, setproduct] = useState(null)

      
      const fetchproduct = async ()=>{
        try {
            const response =await  fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            console.log(data);
            
            setproduct(data)
        } catch (error) {
            
        }
      }
      useEffect(() => {
    fetchproduct()
      }, [id])

      if (!product) {
        return <p>Loading...</p>; 
      }
  return (
    <div className="description-container">
 
    <div className="product-image">
      <img src={product.image} alt={product.title} />
    </div>

 
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        <span>Price:</span> ${product.price}
      </p>
      <p>
        <span>Category:</span> {product.category}
      </p>
      <button>Add to Cart</button>
    </div>
  </div>
  )
}

export default Description