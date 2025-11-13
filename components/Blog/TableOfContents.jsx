// // // // tableOfContents.jsx
// // // "use client";

// // // import { useState, useEffect } from "react";

// // // export default function TableOfContents({ content }) {
// // //   const [headings, setHeadings] = useState([]);
// // //   const [activeId, setActiveId] = useState("");

// // //   useEffect(() => {
// // //     // Improved heading extraction that ignores code blocks and math formulas
// // //     const lines = content.split("\n");
// // //     const extractedHeadings = [];

// // //     let inCodeBlock = false;
// // //     let inMathBlock = false;

// // //     for (const line of lines) {
// // //       const trimmedLine = line.trim();

// // //       // Check if we're entering/exiting code blocks
// // //       if (trimmedLine.startsWith("```")) {
// // //         inCodeBlock = !inCodeBlock;
// // //         continue;
// // //       }

// // //       // Check if we're entering/exiting math blocks ($$)
// // //       if (trimmedLine === "$$") {
// // //         inMathBlock = !inMathBlock;
// // //         continue;
// // //       }

// // //       // Skip lines inside code blocks or math blocks
// // //       if (inCodeBlock || inMathBlock) {
// // //         continue;
// // //       }

// // //       // Only process markdown headers that are at the start of line (not in code/math)
// // //       const headerMatch = line.match(/^(#{1,3})\s+(.+)$/);
// // //       if (headerMatch) {
// // //         const level = headerMatch[1].length;
// // //         const text = headerMatch[2].replace(/`/g, ""); // Remove code ticks
// // //         const slug = text
// // //           .toLowerCase()
// // //           .replace(/[^\w\s-]/g, "")
// // //           .replace(/\s+/g, "-");

// // //         extractedHeadings.push({ level, text, slug });
// // //       }
// // //     }

// // //     setHeadings(extractedHeadings);
// // //   }, [content]);

// // //   // Better scroll detection with manual calculation
// // //   useEffect(() => {
// // //     if (headings.length === 0) return;

// // //     const handleScroll = () => {
// // //       const scrollPosition = window.scrollY + 100; // Offset for navbar

// // //       // Find which heading is currently in view
// // //       let currentActiveId = "";

// // //       for (let i = headings.length - 1; i >= 0; i--) {
// // //         const heading = headings[i];
// // //         const element = document.getElementById(heading.slug);

// // //         if (element) {
// // //           const elementTop = element.offsetTop;

// // //           if (elementTop <= scrollPosition) {
// // //             currentActiveId = heading.slug;
// // //             break;
// // //           }
// // //         }
// // //       }

// // //       // If no heading found, use the first one
// // //       if (!currentActiveId && headings.length > 0) {
// // //         currentActiveId = headings[0].slug;
// // //       }

// // //       setActiveId(currentActiveId);
// // //     };

// // //     // Add scroll listener
// // //     window.addEventListener("scroll", handleScroll);

// // //     // Initial check
// // //     handleScroll();

// // //     // Cleanup
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, [headings]);

// // //   const scrollToHeading = (slug) => {
// // //     const element = document.getElementById(slug);
// // //     if (element) {
// // //       const offset = 80; // Account for navbar
// // //       const elementPosition = element.getBoundingClientRect().top;
// // //       const offsetPosition = elementPosition + window.pageYOffset - offset;

// // //       window.scrollTo({
// // //         top: offsetPosition,
// // //         behavior: "smooth",
// // //       });

// // //       // Immediately set as active when clicked
// // //       setActiveId(slug);
// // //     }
// // //   };

// // //   if (headings.length === 0) {
// // //     return null;
// // //   }

// // //   return (
// // //     <div className="toc-container">
// // //       <div className="toc-header">
// // //         <h3>Contents</h3>
// // //       </div>
// // //       <nav className="toc-nav">
// // //         <ul className="space-y-1">
// // //           {headings.map((heading, index) => (
// // //             <li
// // //               key={index}
// // //               className={`toc-item ${
// // //                 heading.level === 1
// // //                   ? "ml-0"
// // //                   : heading.level === 2
// // //                   ? "ml-3"
// // //                   : "ml-6"
// // //               } ${activeId === heading.slug ? "active" : ""}`}
// // //             >
// // //               <button
// // //                 onClick={() => scrollToHeading(heading.slug)}
// // //                 className="text-left w-full py-1 px-2 rounded transition-all duration-200"
// // //                 title={heading.text}
// // //               >
// // //                 <span>{heading.text}</span>
// // //               </button>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </nav>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect, useRef } from "react";

// // export default function TableOfContents({ content }) {
// //   const [headings, setHeadings] = useState([]);
// //   const [activeId, setActiveId] = useState("");
// //   const observerRef = useRef(null);
// //   const clickedRef = useRef(false); // Track if user clicked a TOC item
// //   const clickTimeoutRef = useRef(null);

// //   useEffect(() => {
// //     const parseHeadingsFromDOM = () => {
// //       const headingElements = document.querySelectorAll(
// //         ".markdown-content h1, .markdown-content h2, .markdown-content h3"
// //       );

// //       const extractedHeadings = Array.from(headingElements)
// //         .map((element) => {
// //           const level = parseInt(element.tagName.substring(1));
// //           const text = element.textContent || "";
// //           const slug = element.id;

// //           if (!slug) return null;

// //           return {
// //             level,
// //             text,
// //             slug,
// //             element,
// //           };
// //         })
// //         .filter(Boolean);

// //       setHeadings(extractedHeadings);
// //     };

// //     const timeoutId = setTimeout(parseHeadingsFromDOM, 100);

// //     return () => clearTimeout(timeoutId);
// //   }, [content]);

// //   // FIXED: Better Intersection Observer with threshold adjustment
// //   useEffect(() => {
// //     if (headings.length === 0) return;

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         // If user recently clicked a TOC item, ignore intersection changes for a moment
// //         if (clickedRef.current) return;

// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             // Only set active if the element is in the top half of the viewport
// //             const rect = entry.boundingClientRect;
// //             if (rect.top < window.innerHeight * 0.6) {
// //               setActiveId(entry.target.id);
// //             }
// //           }
// //         });
// //       },
// //       {
// //         rootMargin: "-100px 0px -40% 0px", // Adjusted for better detection
// //         threshold: [0, 0.25, 0.5, 0.75, 1],
// //       }
// //     );

// //     headings.forEach((heading) => {
// //       const element = document.getElementById(heading.slug);
// //       if (element) {
// //         observer.observe(element);
// //       }
// //     });

// //     return () => {
// //       headings.forEach((heading) => {
// //         const element = document.getElementById(heading.slug);
// //         if (element) {
// //           observer.unobserve(element);
// //         }
// //       });
// //     };
// //   }, [headings]);

// //   const scrollToHeading = (slug) => {
// //     // Set clicked flag to prevent Intersection Observer from interfering
// //     clickedRef.current = true;

// //     const element = document.getElementById(slug);
// //     if (element) {
// //       const offset = 100;
// //       const elementPosition = element.getBoundingClientRect().top;
// //       const offsetPosition = elementPosition + window.pageYOffset - offset;

// //       window.scrollTo({
// //         top: offsetPosition,
// //         behavior: "smooth",
// //       });

// //       // Immediately set as active when clicked
// //       setActiveId(slug);

// //       // Reset clicked flag after scroll completes
// //       if (clickTimeoutRef.current) {
// //         clearTimeout(clickTimeoutRef.current);
// //       }
// //       clickTimeoutRef.current = setTimeout(() => {
// //         clickedRef.current = false;
// //       }, 1000); // Keep flag true for 1 second after click
// //     }
// //   };

// //   if (headings.length === 0) {
// //     return (
// //       <div className="toc-container">
// //         <div className="toc-header">
// //           <h3>Contents</h3>
// //         </div>
// //         <div className="toc-empty">
// //           <p>No headings available</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="toc-container">
// //       <div className="toc-header">
// //         <h3>Contents</h3>
// //       </div>
// //       <nav className="toc-nav">
// //         <ul>
// //           {headings.map((heading, index) => (
// //             <li
// //               key={index}
// //               className={`toc-item level-${heading.level} ${
// //                 activeId === heading.slug ? "active" : ""
// //               }`}
// //             >
// //               <button
// //                 onClick={() => scrollToHeading(heading.slug)}
// //                 className="toc-link"
// //                 title={heading.text}
// //               >
// //                 <span className="toc-text">{heading.text}</span>
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function TableOfContents({ content }) {
//   const [headings, setHeadings] = useState([]);
//   const [activeId, setActiveId] = useState("");
//   const clickedRef = useRef(false);
//   const clickTimeoutRef = useRef(null);

//   useEffect(() => {
//     const parseHeadingsFromDOM = () => {
//       const headingElements = document.querySelectorAll(
//         ".markdown-content h1, .markdown-content h2, .markdown-content h3"
//       );

//       const extractedHeadings = Array.from(headingElements)
//         .map((element) => {
//           const level = parseInt(element.tagName.substring(1));
//           const text = element.textContent || "";
//           const slug = element.id;

//           if (!slug) return null;

//           return {
//             level,
//             text,
//             slug,
//             element,
//           };
//         })
//         .filter(Boolean);

//       setHeadings(extractedHeadings);
//     };

//     const timeoutId = setTimeout(parseHeadingsFromDOM, 100);

//     return () => clearTimeout(timeoutId);
//   }, [content]);

//   // Intersection Observer that activates headers when they reach top 20% of viewport
//   useEffect(() => {
//     if (headings.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (clickedRef.current) return;

//         // Sort entries by their position in the viewport
//         const visibleEntries = entries.filter((entry) => entry.isIntersecting);

//         if (visibleEntries.length > 0) {
//           // Find the entry that's closest to the top 20% of the viewport
//           const sortedEntries = visibleEntries.sort((a, b) => {
//             const aDistance = Math.abs(
//               a.boundingClientRect.top - window.innerHeight * 0.2
//             );
//             const bDistance = Math.abs(
//               b.boundingClientRect.top - window.innerHeight * 0.2
//             );
//             return aDistance - bDistance;
//           });

//           // Use the closest one to top 20%
//           const closestToTop = sortedEntries[0];
//           if (
//             closestToTop &&
//             closestToTop.boundingClientRect.top <= window.innerHeight * 0.3
//           ) {
//             setActiveId(closestToTop.target.id);
//           }
//         }
//       },
//       {
//         rootMargin: "-10% 0px -850% 0px", // Top 20% to 30% of viewport
//         threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
//       }
//     );

//     headings.forEach((heading) => {
//       const element = document.getElementById(heading.slug);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       headings.forEach((heading) => {
//         const element = document.getElementById(heading.slug);
//         if (element) {
//           observer.unobserve(element);
//         }
//       });
//     };
//   }, [headings]);

//   const scrollToHeading = (slug) => {
//     clickedRef.current = true;

//     const element = document.getElementById(slug);
//     if (element) {
//       const offset = 100;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });

//       setActiveId(slug);

//       if (clickTimeoutRef.current) {
//         clearTimeout(clickTimeoutRef.current);
//       }
//       clickTimeoutRef.current = setTimeout(() => {
//         clickedRef.current = false;
//       }, 1500);
//     }
//   };

//   if (headings.length === 0) {
//     return (
//       <div className="toc-container">
//         <div className="toc-header">
//           <h3>Contents</h3>
//         </div>
//         <div className="toc-empty">
//           <p>No headings available</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="toc-container">
//       <div className="toc-header">
//         <h3>Contents</h3>
//       </div>
//       <nav className="toc-nav">
//         <ul>
//           {headings.map((heading, index) => (
//             <li
//               key={index}
//               className={`toc-item ${
//                 activeId === heading.slug ? "active" : ""
//               }`}
//             >
//               <button
//                 onClick={() => scrollToHeading(heading.slug)}
//                 className="toc-link"
//                 title={heading.text}
//               >
//                 <span className="toc-text">{heading.text}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const parseHeadingsFromDOM = () => {
      const headingElements = document.querySelectorAll(
        ".markdown-content h1, .markdown-content h2, .markdown-content h3"
      );

      const extractedHeadings = Array.from(headingElements)
        .map((element) => {
          const level = parseInt(element.tagName.substring(1));
          const text = element.textContent || "";
          const slug = element.id;

          if (!slug) return null;

          return {
            level,
            text,
            slug,
            element,
            offsetTop: element.offsetTop,
          };
        })
        .filter(Boolean);

      setHeadings(extractedHeadings);
    };

    const timeoutId = setTimeout(parseHeadingsFromDOM, 100);
    return () => clearTimeout(timeoutId);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollOffset = 100;

      let currentActiveId = "";

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading.offsetTop <= scrollPosition + scrollOffset) {
          currentActiveId = heading.slug;
          break;
        }
      }

      setActiveId(currentActiveId);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [headings]);

  const scrollToHeading = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      // USE EVEN SMALLER VALUES to make headers appear at the very top
      const clickOffset = 10; // Try 60, 40, or 20
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - clickOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveId(slug);
    }
  };

  if (headings.length === 0) {
    return (
      <div className="toc-container">
        <div className="toc-header">
          <h3>Contents</h3>
        </div>
        <div className="toc-empty">
          <p>No headings available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="toc-container">
      <div className="toc-header">
        <h3>Contents</h3>
      </div>
      <nav className="toc-nav">
        <ul>
          {headings.map((heading, index) => (
            // <li
            //   key={index}
            //   className={`toc-item ${
            //     activeId === heading.slug ? "active" : ""
            //   }`}
            // >
            //   <button
            //     onClick={() => scrollToHeading(heading.slug)}
            //     className="toc-link"
            //     title={heading.text}
            //   >
            //     <span className="toc-text">{heading.text}</span>
            //   </button>
            // </li>
            <li
              key={index}
              className={`toc-item level-${heading.level} ${
                activeId === heading.slug ? "active" : ""
              }`}
            >
              <button
                onClick={() => scrollToHeading(heading.slug)}
                className="toc-link"
                title={heading.text}
              >
                <span className="toc-text">{heading.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
