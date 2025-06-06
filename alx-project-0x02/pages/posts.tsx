import React from 'react';
import Header from '@/components/layout/Header';

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p className="text-lg text-gray-700">
          This is the posts page. You can list your posts here.
        </p>
      </main>
    </>
  );
};

export default Posts;