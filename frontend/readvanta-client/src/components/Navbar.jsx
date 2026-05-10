import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // 👈 IMPORT LOGO
import { useAuth } from "../context/AuthContext";



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-3 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-md border-b border-white/20"
            : "bg-black"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          {/* Logo Container */}
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 shadow-md overflow-hidden">
            <img
              src={logo}
              alt="ReadVanta"
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Brand Name */}
          <span className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            ReadVanta
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-purple-400">
            Home
          </Link>
          <Link to="/explore" className="text-white hover:text-purple-400">
            Explore
          </Link>
          <Link to="/clubs" className="text-white hover:text-purple-400">
            Clubs
          </Link>
          <Link to="/favorites" className="text-white hover:text-purple-400">
            Favorites
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white">Hi, {user.name}</span>

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-purple-400">
                Login
              </Link>

              <Link to="/register">
                <button className="bg-gradient-to-r from-purple-500 to-yellow-400 px-4 py-1 rounded-full text-black font-semibold">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 z-40">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            Explore
          </Link>
          <Link to="/clubs" onClick={() => setMenuOpen(false)}>
            Clubs
          </Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>
            Favorites
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white">Hi, {user.name}</span>

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-purple-400">
                Login
              </Link>

              <Link to="/register">
                <button className="bg-gradient-to-r from-purple-500 to-yellow-400 px-4 py-1 rounded-full text-black font-semibold">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
