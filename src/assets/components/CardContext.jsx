import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([]);
    
    const addToCart = (product) => {
        setcart((prev) => [...prev, product]);
    };
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};