import { getSortedPosts } from "../../lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Thoughts on web development, projects, and learning.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500 mb-3">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            {post.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
