import React from 'react';
import Layout from '../layouts/DefaultLayout';
import PostList from '../components/PostList';

export default function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-8">最新文章</h1>
          <PostList />
        </div>
      </div>
    </Layout>
  );
} 