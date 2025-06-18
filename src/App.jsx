import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import Todos from "./Pages/Todos";
import Axios from "./Pages/Axios";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/axios" element={<Axios/>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
