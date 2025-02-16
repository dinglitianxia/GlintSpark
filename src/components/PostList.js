import React from 'react';
import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {post.coverImage && (
            <img 
              src={post.coverImage}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/posts/${post.slug}`}>
                <a className="hover:text-blue-600">{post.title}</a>
              </Link>
            </h2>
            <div className="text-gray-600 text-sm mb-4">
              <span>{post.date}</span>
              <span className="mx-2">·</span>
              <span>{post.readingTime} 分钟阅读</span>
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 