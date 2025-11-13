// // import { getPostData, getAllPostSlugs } from "../../../lib/posts";
// // import { notFound } from "next/navigation";
// // import MarkdownRenderer from "../../../components/Blog/MarkdownRenderer";
// // import TableOfContents from "../../../components/Blog/TableOfContents";
// // import { calculateReadingTime } from "../../../lib/utils";

// // export async function generateStaticParams() {
// //   return getAllPostSlugs();
// // }

// // export default async function BlogPost(props) {
// //   const { slug } = await props.params;

// //   let post;
// //   try {
// //     post = await getPostData(slug);
// //   } catch (error) {
// //     notFound();
// //   }

// //   return (
// //     <div
// //       className="min-h-screen pt-20"
// //       style={{
// //         background: "var(--background)",
// //         color: "var(--foreground)",
// //       }}
// //     >
// //       <div className="max-w-4xl mx-auto px-6 relative">
// //         {/* Fixed TOC on the left */}
// //         <div className="fixed-toc">
// //           <TableOfContents content={post.content} />
// //         </div>

// //         {/* Main Content */}
// //         <main className="main-content">
// //           <header
// //             className="pb-8 border-b mb-8"
// //             style={{
// //               borderColor: "var(--foreground)",
// //               opacity: 0.2,
// //             }}
// //           >
// //             {/* Page Title - Middle Aligned */}
// //             <h1
// //               className="text-4xl font-bold mb-6 text-center"
// //               style={{
// //                 color: "var(--title-color)",
// //               }}
// //             >
// //               {post.title}
// //             </h1>

// //             {/* Published Date & Reading Time - Middle Aligned */}
// //             <div
// //               className="flex justify-center items-center gap-4 mb-6"
// //               style={{
// //                 color: "var(--foreground)",
// //                 opacity: 0.7,
// //               }}
// //             >
// //               <span className="text-sm">
// //                 Published on{" "}
// //                 {new Date(post.date).toLocaleDateString("en-US", {
// //                   year: "numeric",
// //                   month: "long",
// //                   day: "numeric",
// //                 })}
// //               </span>

// //               <span className="text-sm">•</span>
// //               <span className="text-sm">
// //                 {calculateReadingTime(post.content)} min read
// //               </span>
// //             </div>

// //             {/* Categories - Clean Black Boxes, Middle Aligned */}
// //             {post.tags && post.tags.length > 0 && (
// //               <div className="flex justify-center flex-wrap gap-2 mb-6">
// //                 {post.tags.map((tag) => (
// //                   <span
// //                     key={tag}
// //                     className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
// //                     style={{
// //                       background: "var(--foreground)",
// //                       color: "var(--background)",
// //                     }}
// //                   >
// //                     #{tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             )}

// //             {/* SEO Keywords - Simple Text */}
// //             {post.keywords && (
// //               <div className="mt-6">
// //                 <div className="flex items-baseline gap-2">
// //                   <span
// //                     className="text-sm font-medium"
// //                     style={{
// //                       color: "var(--title-color)",
// //                     }}
// //                   >
// //                     KEYWORD:
// //                   </span>
// //                   <span
// //                     className="text-sm"
// //                     style={{
// //                       color: "var(--foreground)",
// //                       opacity: 0.8,
// //                     }}
// //                   >
// //                     {post.keywords
// //                       .split(",")
// //                       .map((keyword) => keyword.trim())
// //                       .join(", ")}
// //                   </span>
// //                 </div>
// //               </div>
// //             )}
// //           </header>

// //           {/* Article Content */}
// //           <article className="pb-12">
// //             <MarkdownRenderer content={post.content} />
// //           </article>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// import { getPostData, getAllPostSlugs } from "../../../lib/posts";
// import { notFound } from "next/navigation";
// import MarkdownRenderer from "../../../components/Blog/MarkdownRenderer";
// import TableOfContents from "../../../components/Blog/TableOfContents";
// import { calculateReadingTime } from "../../../lib/utils";

// export async function generateStaticParams() {
//   return getAllPostSlugs();
// }

// export default async function BlogPost(props) {
//   const { slug } = await props.params;

//   let post;
//   try {
//     post = await getPostData(slug);
//   } catch (error) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen pt-20 blog-page-container">
//       <div className="max-w-4xl mx-auto px-6 relative">
//         {/* Fixed TOC on the left */}
//         <div className="fixed-toc">
//           <TableOfContents content={post.content} />
//         </div>

//         {/* Main Content */}
//         <main className="main-content">
//           <header className="pb-8 mb-8 blog-header">
//             {/* Page Title - Middle Aligned */}
//             <h1 className="text-4xl font-bold mb-6 text-center blog-title">
//               {post.title}
//             </h1>

//             {/* Published Date & Reading Time - Middle Aligned */}
//             <div className="flex justify-center items-center gap-4 mb-6 blog-meta">
//               <span className="text-sm">
//                 Published on{" "}
//                 {new Date(post.date).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </span>

//               <span className="text-sm">•</span>
//               <span className="text-sm">
//                 {calculateReadingTime(post.content)} min read
//               </span>
//             </div>

//             {/* Categories - Clean Black Boxes, Middle Aligned */}
//             {post.tags && post.tags.length > 0 && (
//               <div className="flex justify-center flex-wrap gap-2 mb-6 blog-tags">
//                 {post.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors blog-tag"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* SEO Keywords - Simple Text */}
//             {post.keywords && (
//               <div className="mt-6 blog-keywords">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-sm font-medium blog-keyword-label">
//                     KEYWORD:
//                   </span>
//                   <span className="text-sm blog-keyword-list">
//                     {post.keywords
//                       .split(",")
//                       .map((keyword) => keyword.trim())
//                       .join(", ")}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </header>

//           {/* Article Content */}
//           <article className="pb-12">
//             <MarkdownRenderer content={post.content} />
//           </article>
//         </main>
//       </div>
//     </div>
//   );
// }

import { getPostData, getAllPostSlugs } from "../../../lib/posts";
import { notFound } from "next/navigation";
import MarkdownRenderer from "../../../components/Blog/MarkdownRenderer";
import TableOfContents from "../../../components/Blog/TableOfContents";
import { calculateReadingTime } from "../../../lib/utils";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function BlogPost(props) {
  const { slug } = await props.params;

  let post;
  try {
    post = await getPostData(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 blog-page-container">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Fixed TOC on the left with back button */}
        <div className="fixed-toc">
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="back-to-blog-btn inline-flex items-center transition-all duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Blog
            </Link>
          </div>

          <TableOfContents content={post.content} />
        </div>

        {/* Main Content */}
        <main className="main-content">
          {/* Reduced spacing: removed mb-8 from header and pb-8 from article */}
          <header className="blog-header">
            {/* Page Title - Middle Aligned */}
            <h1 className="text-4xl font-bold mb-4 text-center blog-title">
              {post.title}
            </h1>

            {/* Published Date & Reading Time - Middle Aligned */}
            <div className="flex justify-center items-center gap-4 mb-4 blog-meta">
              <span className="text-sm">
                Published on{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>

              <span className="text-sm">•</span>
              <span className="text-sm">
                {calculateReadingTime(post.content)} min read
              </span>
            </div>

            {/* Categories - Clean Black Boxes, Middle Aligned */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex justify-center flex-wrap gap-2 mb-4 blog-tags">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors blog-tag"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* SEO Keywords - Simple Text */}
            {post.keywords && (
              <div className="blog-keywords">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium blog-keyword-label">
                    KEYWORD:
                  </span>
                  <span className="text-sm blog-keyword-list">
                    {post.keywords
                      .split(",")
                      .map((keyword) => keyword.trim())
                      .join(", ")}
                  </span>
                </div>
              </div>
            )}
          </header>

          {/* Article Content with reduced padding */}
          <article className="pt-4">
            {" "}
            {/* Reduced from pb-12 to pt-4 */}
            <MarkdownRenderer content={post.content} />
          </article>
        </main>
      </div>
    </div>
  );
}

// export default async function BlogPost(props) {
//   const { slug } = await props.params;

//   let post;
//   try {
//     post = await getPostData(slug);
//   } catch (error) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen pt-20 blog-page-container">
//       <div className="max-w-4xl mx-auto px-6 relative">
//         {/* Fixed TOC on the left with back button */}
//         <div className="fixed-toc">
//           {/* Back button */}
//           <div className="mb-6">
//             <Link
//               href="/blog"
//               className="back-to-blog-btn inline-flex items-center transition-all duration-200"
//             >
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="mr-2"
//               >
//                 <path
//                   d="M19 12H5M12 19l-7-7 7-7"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               Back to Blog
//             </Link>
//           </div>

//           <TableOfContents content={post.content} />
//         </div>

//         {/* Main Content */}
//         <main className="main-content">
//           <header className="pb-8 mb-8 blog-header">
//             {/* Page Title - Middle Aligned */}
//             <h1 className="text-4xl font-bold mb-6 text-center blog-title">
//               {post.title}
//             </h1>

//             {/* Published Date & Reading Time - Middle Aligned */}
//             <div className="flex justify-center items-center gap-4 mb-6 blog-meta">
//               <span className="text-sm">
//                 Published on{" "}
//                 {new Date(post.date).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </span>

//               <span className="text-sm">•</span>
//               <span className="text-sm">
//                 {calculateReadingTime(post.content)} min read
//               </span>
//             </div>

//             {/* Categories - Clean Black Boxes, Middle Aligned */}
//             {post.tags && post.tags.length > 0 && (
//               <div className="flex justify-center flex-wrap gap-2 mb-6 blog-tags">
//                 {post.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors blog-tag"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* SEO Keywords - Simple Text */}
//             {post.keywords && (
//               <div className="mt-6 blog-keywords">
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-sm font-medium blog-keyword-label">
//                     KEYWORD:
//                   </span>
//                   <span className="text-sm blog-keyword-list">
//                     {post.keywords
//                       .split(",")
//                       .map((keyword) => keyword.trim())
//                       .join(", ")}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </header>

//           {/* Article Content */}
//           <article className="pb-12">
//             <MarkdownRenderer content={post.content} />
//           </article>
//         </main>
//       </div>
//     </div>
//   );
// }
