import { Link } from 'react-router-dom'
import logo from '../assets/Pintola_Logo.avif'
import { useCart } from './CartContext'

const Navbar = () => {
  const {cartItems} = useCart();
  return (
    <nav className="bg-[#ffffff] fixed z-1000  w-full text-shadow-orange-300 flex px-12  justify-between border-b-amber-600 border-b-4">
      <div>
        <img src={logo} height={80} className='py-4 px-3 ' width={180} alt='logo'/>
      </div>
      <div className="space-x-10 my-auto text-xl">
        <Link to="/" className="hover:text-amber-600">Home</Link>
        <Link to="/aboutus" className="hover:text-amber-600">About Us</Link>
        <Link to="/contactus" className="hover:text-amber-600">Contact Us</Link>
        <Link to="/todos" className="hover:text-amber-600">TODOS</Link>
      </div>
      <div className='text-xl space-x-3 my-auto '>
          <i class="fa-solid fa-circle-user hover:text-amber-600"></i>
          <i class="fa-solid fa-magnifying-glass hover:text-amber-600"></i>
          <Link to="/cart">
          <i class="fa-solid fa-cart-shopping hover:text-amber-600"> {cartItems.length}</i>
          </Link>
      </div>
    </nav>
  )
}

export default Navbar
