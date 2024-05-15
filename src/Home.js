// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        {/* Logo oder Titel der Anwendung */}
        <h1>Meine App</h1>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'text-gray-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'text-gray-300'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'text-gray-300'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'text-gray-300'
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
