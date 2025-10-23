import React from 'react';
import { ImBook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoReddit } from "react-icons/io5";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Header() {
  return (
    <header className="w-full bg-white shadow flex flex-col">
      {/* Top header */}
      <div className="flex items-center justify-between px-8 py-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <ImBook className="text-3xl text-gray-700" />
        </div>
        {/* Store Title - absolutely centered */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-wide">BOOK STORE</h1>
        {/* Icons + Login */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-lg"><FaInstagram /></a>
          <a href="#" className="text-lg"><FaXTwitter /></a>
          <a href="#" className="text-lg"><IoLogoReddit /></a>
          <button
            className="ml-4 px-4 py-2 bg-transparent border border-black text-black rounded hover:bg-blue-50 transition"
          >
            Login
          </button>
        </div>
      </div>
      {/* Navigation Bar - centered */}
      <nav className="w-full bg-gray-900 text-white px-8 py-2 flex justify-center space-x-8">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/books" className="hover:text-gray-400">Books</a>
        <a href="/careers" className="hover:text-gray-400">Careers</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

