// app/blog/[slug]/page.jsx
import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  const posts = await getAllSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Your Name'],
      tags: post.tags,
    },
  };
}

export default async function BlogPost(props) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}