import React from "react";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 fixed top-0 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <div className="flex">
          <Icon icon="mdi:react" width="24" height="24" />
          <h1 className="text-2xl font-semibold">React　学習ページ</h1>
        </div>
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
