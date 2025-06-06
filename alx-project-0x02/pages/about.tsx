import React from 'react';
import Header from '../components/layout/Header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-lg text-gray-700">
          This page provides information about the ALX Project 2.
        </p>
      </main>
    </>
  );
};

export default About;