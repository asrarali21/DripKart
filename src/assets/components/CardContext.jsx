import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([]);
    
    const addToCart = (product) => {

        setcart((prev) => [...prev, product]);
        alert("item added to cart")
    };
    const handleRemoveClick = (index)=>{
        setcart((prev)=> prev.filter((_ , i ) => i !== index))
    }
    return (
        <CartContext.Provider value={{ cart, addToCart ,handleRemoveClick }}>
            {children}
        </CartContext.Provider>
    );
};