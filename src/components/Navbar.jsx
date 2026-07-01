import { useState } from "react";
import logo from "../assets/image copy.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 gap-2 text-sm">
        <p>info@nationalprofilefactory.com</p>
        <p>Download Brochure</p>
        <p>+973 17 641 999</p>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-10 py-4 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 md:w-16 object-contain"
          />

          <h1 className="text-lg md:text-2xl font-bold text-blue-900">
            National Profile Factory
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">Home</Link>

          <Link to="/About">About</Link>

          <div className="relative group">
            <Link to="/Products">Products</Link>

            <div className="absolute hidden group-hover:block bg-white shadow-lg w-72 mt-2 rounded-md z-50">
              <Link
                to="/products/false-ceiling-suspension-system"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                False Ceiling Suspension System
              </Link>

              <Link
                to="/products/drywall-partition-system"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Drywall Partition System
              </Link>

              <Link
                to="/products/gi-lintels"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                G.I Lintels
              </Link>

              <Link
                to="/products/c-truss-channels"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                C Truss Channels
              </Link>

              <Link
                to="/products/corrugated-roofing-sheet"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Corrugated Roofing Sheet
              </Link>

              <Link
                to="/products/gi-flat-sheet-ppgi-plain-sheet"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                G.I Flat Sheet & PPGI Plain Sheet
              </Link>

              <Link
                to="/products/liner-profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Liner Profile
              </Link>
            </div>
          </div>

          <Link to="/Contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md px-4 py-4 gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/About" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/Products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link to="/Contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;