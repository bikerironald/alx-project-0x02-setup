import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  userId?: string | number;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => (
  <div className="bg-white rounded-lg shadow p-6 mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 mb-2">{content}</p>
    {userId && (
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    )}
  </div>
);

export default PostCard;