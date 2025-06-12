import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Footer from './components/Footer'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
