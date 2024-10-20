
'use client';

import Layout from '../../components/Layout';
import { useSession } from 'next-auth/react';

export default function Users() {
  const { data: session } = useSession();

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telegram ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* We'll populate this with actual user data later */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">123456789</td>
              <td className="px-6 py-4 whitespace-nowrap">johndoe</td>
              <td className="px-6 py-4 whitespace-nowrap">100</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
