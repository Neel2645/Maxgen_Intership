import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
