// app/blog/page.jsx
import { getAllPosts } from '@/lib/posts';
import BlogClientPage from './BlogClientPage';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development and design',
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  return <BlogClientPage allPosts={allPosts} />;
}