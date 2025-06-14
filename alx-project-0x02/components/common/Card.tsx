import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow p-6 mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default Card;
// This code defines a reusable Card component in React.
// It accepts `title` and `content` as props and renders them inside a styled card.