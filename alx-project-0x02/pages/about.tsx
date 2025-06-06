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
          <Button size="small" shape="rounded-sm">
            Small Rounded-sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Rounded-md
          </Button>
          <Button size="large" shape="rounded-full">
            Large Rounded-full
          </Button>
        </div>
      </main>
    </>
  );
};

export default About;
// This code defines an About page for a Next.js application.
// It imports a Header component for the page header and a Button component for interactive buttons.