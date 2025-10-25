import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define navigation links
  const navLinks = [
    { name: "Principale", path: "/" },
    { name: "Á Propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Carriéres", path: "/careers" },
    { name: "Témoignages", path: "/testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(11,16,32,0.85)] backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/public/media/logo-removebg-preview.png"
            alt="Logo Rayan Protection Privée"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="font-bold text-2xl text-white hover:text-blue-400 transition-colors duration-300">
            RayanProtectionPrivée
          </span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative text-white font-medium transition-all duration-300 hover:text-(--color-primary)"
            >
              {name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--color-primary) transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Contact Button with animated snake border */}
          <Link
            to="/contact"
            className="relative inline-block px-5 py-2 font-semibold rounded-md text-black bg-white overflow-hidden transition-all duration-300 group"
          >
            <span className="absolute inset-0 rounded-md border-2 border-transparent bg-linear-to-r from-(--color-primary) to-blue-600 bg-size-[400%_400%] animate-snake opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
              Contact
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[rgba(11,16,32,0.95)] backdrop-blur-md py-4 space-y-4 transition-all duration-300">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white font-medium text-lg hover:text-(--color-primary) transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="relative inline-block px-4 py-2 font-semibold rounded-md text-black bg-white overflow-hidden transition-all duration-300 group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="absolute inset-0 rounded-md border-2 border-transparent bg-linear-to-r from-(--color-primary) to-blue-600 bg-size-[400%_400%] animate-snake opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
              Contact
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
