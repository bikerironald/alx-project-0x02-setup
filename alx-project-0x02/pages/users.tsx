import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  username?: string;
  phone?: string;
  website?: string;
  address?: Address;
}

interface UsersPageProps {
  users: User[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => (
  <>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="w-full max-w-2xl">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map(user => (
            <UserCard key={user.id} {...user} address={user.address} />
          ))
        )}
      </div>
    </main>
  </>
);

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;