import React from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Welcome to the ALX Project 2!</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is the home page of your Next.js application.
        </p>
        <Card
          title="Reusable Card 1"
          content="This is the content for the first card component."
        />
        <Card
          title="Reusable Card 2"
          content="This is the content for the second card component."
        />
      </main>
    </>
  );
};

export default Home;