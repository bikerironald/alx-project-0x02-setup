 import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to the ALX Project 2!</h1>
      <p className="text-lg text-gray-700">
        This is a Next.js application with TypeScript and Tailwind CSS.
      </p>
    </div>
  );
};

export default Home;