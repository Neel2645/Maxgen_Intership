import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import logo from '../assets/Pintola_Logo.avif'

export default function Footer() {
  return (
    <footer className="bg-white  border-t-4 mt-10 border-t-amber-600">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-gray-800">

        <div>
          <img src={logo} height={80} className='py-4 px-3 ' width={180} alt='logo'/>
          <p className="my-4 font-semibold mx-2">Follow Us:</p>
          <div className="flex gap-4 mt-2 text-2xl">
            <FaFacebookF className="hover:text-amber-600" />
            <FaInstagram  className="hover:text-amber-600"/>
            <FaLinkedinIn  className="hover:text-amber-600"/>
            <FaYoutube  className="hover:text-amber-600"/>
            <FaTwitter  className="hover:text-amber-600"/>
          </div>
        </div>

        <div>
          <h2 className="text-2xl  font-semibold mb-3">Shop</h2>
          <ul className="space-y-1 text-md">
            <li>All Products</li>
            <li>Natural Peanut Butter</li>
            <li>Premium Nut Butters</li>
            <li>High Protein & Performance Butter</li>
            <li>Certified Organic Products</li>
            <li>Nuts & seeds</li>
            <li>Rice Cakes</li>
            <li>High Protein Breakfast Cereals</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Pintola</h2>
          <ul className="space-y-1 text-md">
            <li>About Us</li>
            <li>Recipes</li>
            <li>Why Pintola?</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQs</li>
            <li>Refund & Cancellation Policy</li>
            <li>Shipping Policy</li>
            <li>Return Order</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Stay in the loop</h2>
          <input
            type="email"
            placeholder="Email*"
            className="w-full border px-3 py-2 mb-2 outline-orange-500"
          />
          <button className="w-full border border-orange-500 text-orange-500 py-2 hover:bg-orange-500 hover:text-white transition">
            Sign Up
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold  mb-3">
            Download Product Catalogue
          </h2>
          <button className="w-full border border-orange-500 py-2 hover:bg-orange-500 hover:text-white transition">
            Download
          </button>
        </div>
      </div>

      <div className="bg-gray-100 text-center py-3 text-sm text-gray-600">
        © 2025 Pintola.
      </div>
    </footer>
  );
}
