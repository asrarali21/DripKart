import React from 'react'
import { createContext ,useState,useEffect } from 'react'

export const StoreContext = createContext();
function StoreProvider({children}) {
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

  return (
      <StoreContext.Provider value={{ storeData }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider