import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white" style={{ position: "fixed", top: 0, left:0, width: "100%",  zIndex: "999"}}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="logo" style={{textAlign: "center"}}>
          <a href="/" className="text-xl font-bold">
            Multi-State Co-operative Societies
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
