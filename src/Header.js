import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg">My React App</h1>
      <nav>
        <ul className="flex gap-4">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-gray-300'}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-gray-300'}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-gray-300'}>Contact</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? 'text-yellow-300' : 'text-gray-300'}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
