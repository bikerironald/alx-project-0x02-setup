import React from 'react';

const Header: React.FC = () => (
  <header className="w-full bg-blue-600 py-4 shadow">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">ALX Project 2</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:underline">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;