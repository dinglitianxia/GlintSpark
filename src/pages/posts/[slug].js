import React from 'react';
import Layout from '../../layouts/DefaultLayout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function PostPage({ post }) {
  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm">
                {post.date} · {post.readingTime} 分钟阅读
              </p>
            </div>
          </div>
        </header>
        
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}
        
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <footer className="mt-8 pt-8 border-t">
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
        </footer>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
} 