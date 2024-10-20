
'use client';

import Layout from '../components/Layout';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Welcome to Airdrop Admin Panel</h1>
      <p className="mt-4">Manage users, tasks, and monitor airdrop progress.</p>
      {session && (
        <p className="mt-4">Logged in as: {session.user?.name}</p>
      )}
    </Layout>
  );
}
