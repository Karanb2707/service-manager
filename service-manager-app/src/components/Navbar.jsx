import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `transition-all duration-300 font-medium hover:scale-105 ${
      isActive ? 'text-cyan-400' : ''
    }`

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between md:justify-evenly items-center p-4 bg-black text-white shadow-2xl">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
        Service Manager
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        <NavLink to="/" className={linkClasses} end>
          Home
        </NavLink>
        <NavLink to="/services" className={linkClasses}>
          Services
        </NavLink>
        <NavLink to="/blogs" className={linkClasses}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black shadow-2xl md:hidden">
          <div className="flex flex-col gap-4 p-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-all duration-300 font-medium py-2 border-b border-gray-600 hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : ''
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-all duration-300 font-medium py-2 border-b border-gray-600 hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : ''
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `transition-all duration-300 font-medium py-2 border-b border-gray-600 hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : ''
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all duration-300 font-medium py-2 hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400' : ''
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
