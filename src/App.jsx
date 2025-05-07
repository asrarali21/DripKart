
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Shop from './assets/components/Shop';
import Cart from './assets/components/Cart';
import Description from './assets/components/Description';
import MensCollection from './assets/components/MensCollection';
import Jewellery from './assets/components/Jewellery';
import WomensCollection from './assets/components/WomensCollection';
import Electronics from './assets/components/Electronics';

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
 },
 {
  path:"/description/:id",
  element: <div>
    <Navbar/>
   <Description />
    </div>
 },
 {
  path:"/mencollection",
  element: <div>
    <Navbar/>
   <MensCollection />
    </div>
 },
 {
  path:"/jewellery",
  element: <div>
    <Navbar/>
    <Jewellery/>
    </div>
 },
 {
  path:"/womencollection",
  element: <div>
    <Navbar/>
    <WomensCollection/>
    </div>
 },
 {
  path:"/electronic",
  element: <div>
    <Navbar/>
    <Electronics/>
    </div>
 },
 
 
])


function App() {
    
  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
