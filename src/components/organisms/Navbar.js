// components/Navbar.js
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-2 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo Icon.png" alt="Logo" className="w-6 h-6" />
          <span className="font-bold text-lg">whitepace</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <button className="bg-yellow-300 text-[#05356E] px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-2xl hover:cursor-pointer">Login</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer">Try Whitepace free</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <button className="bg-yellow-300 text-blue-900 px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-2xl">Login</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 hover:shadow-2xl">Try Whitepace free</button>
        </div>
      )}
    </nav>
  );
}
