
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
import SharedLayout from './assets/components/SharedLayout';
import StoreProvider from './assets/components/StoreProvider';
import { CartProvider } from './assets/components/CardContext'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: '/shop',
    element: (
      <div>
        <Navbar />
        <Shop />
      </div>
    ),
  },
  {
    path: '/cart',
    element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    ),
  },
  {
    path: '/description/:id',
    element: (
      <div>
        <Navbar />
        <Description />
      </div>
    ),
  },
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <SharedLayout />
      </div>
    ),
    children: [
      {
        path: '/mencollection',
        element: <MensCollection />,
      },
      {
        path: '/jewellery',
        element: <Jewellery />,
      },
      {
        path: '/womencollection',
        element: <WomensCollection />,
      },
      {
        path: '/electronic',
        element: <Electronics />,
      },
    ],
  },
]);


function App() {
    
  return (
  <>
    <CartProvider>
     <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </CartProvider>
  </>
  )
}

export default App
