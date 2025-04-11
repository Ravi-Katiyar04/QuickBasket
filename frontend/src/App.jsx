
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {Toaster} from 'react-hot-toast'
import { useAppCOntext } from "./context/AppContext"
import Login from "./components/Login"
import AllProduct from "./pages/AllProduct"

const App = () => {

  const isSellerPath= useLocation().pathname.includes("seller");

  const {showUserLogin} = useAppCOntext();

  return (
    <div>
      {isSellerPath ? null : <Navbar/>} 

      {showUserLogin ? <Login/> : null}

      <Toaster/>
      
      <div className={`${isSellerPath ? "" : " px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProduct />} />

        </Routes>
      </div>

      {isSellerPath ? null : <Footer/>} 
    </div>
  )
}

export default App
