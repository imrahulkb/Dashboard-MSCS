import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="logo">
          <a href="/" className="text-xl font-bold">
            My Website
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
