import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is the posts page. You can list your posts here.
        </p>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;