import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Reusable Card 1', content: 'This is the content for the first card component.' },
    { title: 'Reusable Card 2', content: 'This is the content for the second card component.' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Welcome to the ALX Project 2!</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is the home page of your Next.js application.
        </p>
        <button
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Post
        </button>
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default Home;