import React from 'react';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Welcome to the ALX Project 2!</h1>
        <p className="text-lg text-gray-700">
          This is the home page of your Next.js application.
        </p>
      </main>
    </>
  );
};

export default Home;