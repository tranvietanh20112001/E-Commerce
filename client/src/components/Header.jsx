import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-extrabold">
            SparkTech
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="ml-4 p-2 rounded-md bg-gray-700 text-white hidden sm:block"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hidden sm:block ml-2">
            Search
          </button>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <Link to="/cart" className="text-white flex items-center">
            <FiShoppingCart className="mr-1" />
            Cart
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 ml-2"></span>
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mt-4 sm:hidden">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-md bg-gray-700 text-white w-full mb-2"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mb-2">
            Search
          </button>
          <div className="space-y-2">
            <Link to="/cart" className="text-white flex items-center">
              <FiShoppingCart className="mr-1" />
              Cart
              <span className="bg-blue-500 text-white rounded-full px-2 py-1 ml-2"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
