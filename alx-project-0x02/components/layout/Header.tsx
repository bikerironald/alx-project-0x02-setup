import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="w-full bg-blue-600 py-4 shadow">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">ALX Project 2</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;