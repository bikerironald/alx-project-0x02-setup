import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-lg text-gray-700 mb-8">
          This page provides information about the ALX Project 2.
        </p>
        <div className="flex space-x-4">
          <Button size="small" shape="rounded">
            Small Rounded
          </Button>
          <Button size="medium" shape="rounded">
            Medium Rounded
          </Button>
          <Button size="large" shape="rounded">
            Large Rounded
          </Button>
        </div>
      </main>
    </>
  );
};

export default About;