
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Shop from './assets/components/Shop';
import Cart from './assets/components/Cart';

const router = createBrowserRouter([
  {
      path:"/",
      element: <div>
      <Navbar/>
      <Home/>
      
      </div>
  },
 {
  path:"/shop",
  element: <div>
    <Navbar/>
    <Shop/>
    </div>

 },
 {
  path:"/cart",
  element: <div>
    <Navbar/>
    <Cart/>
    </div>
 }
 
 
])


function App() {
    
  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
