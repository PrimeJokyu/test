import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-semibold">My Website</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a className="hover:text-gray-400" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
