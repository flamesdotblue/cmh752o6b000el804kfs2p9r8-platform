import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
          <span className="font-semibold tracking-tight group-hover:text-gray-900">NeonBlock AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black transition-colors">Get in touch</a>
      </div>
    </header>
  );
}
