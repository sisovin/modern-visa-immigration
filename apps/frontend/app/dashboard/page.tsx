import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import BookingList from './components/BookingList';

const DashboardPage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This is a protected page. Only authenticated users can access it.</p>
      <BookingList />
    </div>
  );
};

export default DashboardPage;
