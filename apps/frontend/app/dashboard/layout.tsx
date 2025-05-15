import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/client';

const DashboardLayout = ({ children }) => {
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
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="mt-2">Hello, {session.user.name}!</p>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-2">
              <Link href="/dashboard">
                <a className="hover:bg-gray-700 rounded p-2 block">Home</a>
              </Link>
            </li>
            <li className="p-2">
              <Link href="/dashboard/profile">
                <a className="hover:bg-gray-700 rounded p-2 block">Profile</a>
              </Link>
            </li>
            <li className="p-2">
              <Link href="/dashboard/settings">
                <a className="hover:bg-gray-700 rounded p-2 block">Settings</a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
