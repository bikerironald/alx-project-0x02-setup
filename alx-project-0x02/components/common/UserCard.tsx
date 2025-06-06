import React from 'react';
import { UserProps } from '../../interfaces';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface UserCardProps extends UserProps {
  address?: Address;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, username, phone, website, address }) => (
  <div className="bg-white rounded-lg shadow p-6 mb-4">
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p className="text-gray-700 mb-1">Email: {email}</p>
    {username && <p className="text-gray-700 mb-1">Username: {username}</p>}
    {phone && <p className="text-gray-700 mb-1">Phone: {phone}</p>}
    {website && <p className="text-gray-700 mb-1">Website: {website}</p>}
    {address && (
      <div className="text-gray-600 mt-2 text-sm">
        <div>Address:</div>
        <div>
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </div>
      </div>
    )}
  </div>
);

export default UserCard;