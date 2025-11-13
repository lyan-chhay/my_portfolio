// "use client";

// import ReactMarkdown from "react-markdown";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import rehypeHighlight from "rehype-highlight";
// import { useState } from "react";

// export default function MarkdownRenderer({ content }) {
//   const [copiedIndex, setCopiedIndex] = useState(null);

//   const handleCopy = async (code, index) => {
//     try {
//       await navigator.clipboard.writeText(code);
//       setCopiedIndex(index);
//       setTimeout(() => setCopiedIndex(null), 2000);
//     } catch (err) {
//       console.error("Failed to copy text: ", err);
//     }
//   };

//   const getCodeText = (children) => {
//     if (typeof children === "string") return children;
//     if (Array.isArray(children)) {
//       return children
//         .map((child) =>
//           typeof child === "string"
//             ? child
//             : getCodeText(child?.props?.children || child)
//         )
//         .join("");
//     }
//     if (children?.props?.children) {
//       return getCodeText(children.props.children);
//     }
//     return String(children);
//   };

//   const generateSlug = (text) => {
//     return String(text)
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w\-]+/g, "")
//       .replace(/\-\-+/g, "-")
//       .replace(/^-+/, "")
//       .replace(/-+$/, "");
//   };

//   return (
//     <div className="markdown-content">
//       <ReactMarkdown
//         remarkPlugins={[remarkMath]}
//         rehypePlugins={[rehypeKatex, rehypeHighlight]}
//         components={{
//           code: ({ node, inline, className, children, ...props }) => {
//             const match = /language-(\w+)/.exec(className || "");
//             const language = match ? match[1] : "";
//             const codeContent = getCodeText(children);
//             const index = node?.position?.start.offset || Math.random();

//             if (!inline && language) {
//               return (
//                 <div className="code-block-container">
//                   <button
//                     className={`copy-button ${
//                       copiedIndex === index ? "copied" : ""
//                     }`}
//                     onClick={() => handleCopy(codeContent, index)}
//                   >
//                     {copiedIndex === index ? (
//                       // Check (tick) icon
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <path
//                           d="M20 6L9 17L4 12"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     ) : (
//                       // Copy icon
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <rect
//                           x="9"
//                           y="9"
//                           width="13"
//                           height="13"
//                           rx="2"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         />
//                         <path
//                           d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                     )}
//                   </button>
//                   <pre className={className}>
//                     <code {...props}>{children}</code>
//                   </pre>
//                 </div>
//               );
//             }

//             return (
//               <code className={className} {...props}>
//                 {children}
//               </code>
//             );
//           },

//           h1: ({ children }) => {
//             const slug = generateSlug(children);
//             return (
//               <h1 id={slug} className="heading-anchor">
//                 {children}
//               </h1>
//             );
//           },
//           h2: ({ children }) => {
//             const slug = generateSlug(children);
//             return (
//               <h2 id={slug} className="heading-anchor">
//                 {children}
//               </h2>
//             );
//           },
//           h3: ({ children }) => {
//             const slug = generateSlug(children);
//             return (
//               <h3 id={slug} className="heading-anchor">
//                 {children}
//               </h3>
//             );
//           },
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   );
// }

"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import { useState } from "react";

export default function MarkdownRenderer({ content }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getCodeText = (children) => {
    if (typeof children === "string") return children;
    if (Array.isArray(children)) {
      return children
        .map((child) =>
          typeof child === "string"
            ? child
            : getCodeText(child?.props?.children || child)
        )
        .join("");
    }
    if (children?.props?.children) {
      return getCodeText(children.props.children);
    }
    return String(children);
  };

  const generateSlug = (text) => {
    return String(text)
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            const codeContent = getCodeText(children);
            const index = node?.position?.start.offset || Math.random();

            if (!inline && language) {
              return (
                <div className="code-block-container">
                  <button
                    className={`copy-button ${
                      copiedIndex === index ? "copied" : ""
                    }`}
                    onClick={() => handleCopy(codeContent, index)}
                  >
                    {copiedIndex === index ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </button>
                  <pre className={className}>
                    <code {...props}>{children}</code>
                  </pre>
                </div>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          h1: ({ children }) => {
            const slug = generateSlug(children);
            return (
              <>
                <div className="h1-separator"></div>
                <h1 id={slug} className="heading-anchor main-header">
                  {children}
                </h1>
              </>
            );
          },
          h2: ({ children }) => {
            const slug = generateSlug(children);
            return (
              <h2 id={slug} className="heading-anchor sub-header">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const slug = generateSlug(children);
            return (
              <h3 id={slug} className="heading-anchor sub-sub-header">
                {children}
              </h3>
            );
          },
          h4: ({ children }) => {
            const slug = generateSlug(children);
            return (
              <h4 id={slug} className="heading-anchor">
                {children}
              </h4>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
