import {Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const Navbar = () => {
    const { cart } = useContext(CartContext);
    const cartCount = (cart || []).reduce((acc, item) => acc + item.qty, 0);
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition">
          VibeShop
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            Cart
            {/* Cart Count Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
  )
}

export default Navbar
