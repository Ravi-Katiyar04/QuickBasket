
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {Toaster} from 'react-hot-toast'

const App = () => {

  const isSellerPath= useLocation().pathname.includes("seller")

  return (
    <div>
      {isSellerPath ? null : <Navbar/>} 

      <Toaster/>
      
      <div className={`${isSellerPath ? "" : " px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<div>Products</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/cart" element={<div>Cart</div>} />
          <Route path="/my-order" element={<div>My Orders</div>} />
          <Route path="/seller" element={<div>Seller</div>} />
          <Route path="/seller/products" element={<div>Seller Products</div>} />
          <Route path="/seller/orders" element={<div>Seller Orders</div>} /> */}
        </Routes>
      </div>

      {isSellerPath ? null : <Footer/>} 
    </div>
  )
}

export default App
