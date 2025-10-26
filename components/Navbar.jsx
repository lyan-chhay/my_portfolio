// ///////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
// "use client";
// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const NavItems = ({ isNavOpen, setIsNavOpen }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   const handleItemClick = () => {
//     setIsNavOpen(false);
//   };
//   const navVariant = {
//     open: {
//       clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//     closed: {
//       clipPath: "circle(0px at calc(100% - 120px) 35px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 30,
//       },
//     },
//   };
//   useEffect(() => {
//     const updateScreenWidth = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Initial check and event listener
//     updateScreenWidth();
//     window.addEventListener("resize", updateScreenWidth);

//     // Clean up the event listener on unmount
//     return () => {
//       window.removeEventListener("resize", updateScreenWidth);
//     };
//   }, []);

//   // Check screen width and adjust clipPath for smaller screens
//   if (isMobile) {
//     (navVariant.open = {
//       clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "tween",
//       },
//     }),
//       (navVariant.closed = {
//         clipPath: "circle(0px at calc(100% - 35px) 35px)",
//         transition: {
//           delay: 0.5,
//           type: "spring",
//           stiffness: 400,
//           damping: 40,
//         },
//       });
//   } else {
//     (navVariant.open = {
//       clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     }),
//       (navVariant.closed = {
//         clipPath: "circle(0px at calc(100% - 120px) 35px)",
//         transition: {
//           delay: 0.5,
//           type: "spring",
//           stiffness: 400,
//           damping: 40,
//         },
//       });
//   }
//   const itemVariants = {
//     open: (custom) => ({
//       opacity: 1,
//       x: 0,
//       rotate: 0,
//       transition: {
//         delay: custom,
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     }),
//     closed: {
//       opacity: 0,
//       x: -80,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         className={`fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden`}
//         variants={navVariant}
//         animate={isNavOpen ? "open" : "closed"}
//         initial={false}
//       >
//         <div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700 min-w-[100vw] ">
//           <div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
//             {/* title */}
//             <motion.h1
//               variants={itemVariants}
//               animate={isNavOpen ? "open" : "closed"}
//               className="text-6xl font-bold text-white "
//             >
//               Menu
//             </motion.h1>

//             <Link href="/#home">
//               <div
//                 className="text-2xl font-bold text-white"
//                 onClick={handleItemClick}
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.1}
//                 >
//                   Home
//                 </motion.h2>
//               </div>
//             </Link>
//             <Link href="/about">
//               <div
//                 onClick={handleItemClick}
//                 className="text-2xl font-bold text-white"
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.2}
//                 >
//                   About
//                 </motion.h2>
//               </div>
//             </Link>
//             <Link href="/projects">
//               <div
//                 onClick={handleItemClick}
//                 className="text-2xl font-bold text-white"
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.3}
//                 >
//                   Projects
//                 </motion.h2>
//               </div>
//             </Link>
//             <Link href="/#contact">
//               <div
//                 onClick={handleItemClick}
//                 className="text-2xl font-bold text-white"
//               >
//                 <motion.h2
//                   className="text-white"
//                   variants={itemVariants}
//                   animate={isNavOpen ? "open" : "closed"}
//                   custom={0.4}
//                 >
//                   Contact
//                 </motion.h2>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const Navbar = () => {
//   const navRef = useRef(null);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <nav
//         ref={navRef}
//         className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
//           isNavOpen
//             ? "backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-50"
//             : "backdrop-filter backdrop-blur-md"
//         } inset-0  bg-opacity-50 flex flex-row justify-between items-center h-16 z-50 `}
//       >
//         {/* <div>
//           <Link href="/">
//             <h1
//               className={`text-2xl ml-2 md:ml-0 transition-colors ease duration-500 cursor-pointer hover:text-blue-600 ${
//                 isNavOpen ? "text-white hover:text-blue-300" : ""
//               }`}
//             >
//               Ly An CHHAY
//             </h1>
//           </Link>
//         </div> */}
//         {/* ===== FIXED: Logo now clicks to home section ===== */}
//         <div>
//           <a href="#home">
//             <h1
//               className={`text-2xl ml-2 md:ml-0 transition-colors ease duration-500 cursor-pointer hover:text-blue-600 ${
//                 isNavOpen ? "text-white hover:text-blue-300" : ""
//               }`}
//             >
//               Ly An CHHAY
//             </h1>
//           </a>
//         </div>

//         <div className="flex flex-row items-center">
//           <button
//             className="burger button flex flex-col justify-center items-center space-y-1.5 "
//             onClick={toggleNav}
//           >
//             <div
//               className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
//                 isNavOpen ? "rotate-45   bg-white translate-y-[2px]" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
//                 isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
//               }`}
//             ></div>
//           </button>
//         </div>
//       </nav>
//       {/* items */}
//       <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//     </>
//   );
// };
// export default Navbar;
// ///////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [theme, setTheme] = useState("system");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [effectiveTheme, setEffectiveTheme] = useState("light"); // Track actual theme
//   const audioRef = useRef(null);

//   useEffect(() => {
//     setIsMounted(true);

//     // Load saved theme from localStorage
//     const savedTheme = localStorage.getItem("theme") || "system";
//     setTheme(savedTheme);
//     applyTheme(savedTheme);

//     // Auto-play music
//     const playMusic = async () => {
//       try {
//         if (audioRef.current) {
//           audioRef.current.volume = 0.2;
//           await audioRef.current.play();
//           setIsPlaying(true);
//         }
//       } catch (error) {
//         console.log("Auto-play failed");
//       }
//     };

//     playMusic();

//     // Scroll event listener for blur effect
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Enhanced theme application with proper system detection
//   const applyTheme = (selectedTheme) => {
//     const root = document.documentElement;

//     // Remove all theme classes first
//     root.classList.remove("light", "dark");

//     let actualTheme = selectedTheme;

//     if (selectedTheme === "system") {
//       // Proper system preference detection
//       const systemPrefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       actualTheme = systemPrefersDark ? "dark" : "light";
//       console.log(
//         "System prefers dark:",
//         systemPrefersDark,
//         "Using theme:",
//         actualTheme
//       );
//     }

//     // Apply the actual theme class
//     root.classList.add(actualTheme);
//     setEffectiveTheme(actualTheme); // Update the effective theme state
//   };

//   const handleThemeChange = (newTheme) => {
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     applyTheme(newTheme);
//   };

//   // Toggle music function
//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch((error) => {
//           console.log("Play failed:", error);
//         });
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop preload="auto">
//         <source src="/mp3/default1.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Use effectiveTheme instead of theme for styling */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? "backdrop-blur-md" // Reduced to medium blur
//             : "bg-transparent"
//         } ${
//           effectiveTheme === "dark"
//             ? isScrolled
//               ? "bg-[#1a1a1a]/80" // Less transparent
//               : "bg-transparent"
//             : isScrolled
//             ? "bg-[rgb(230,230,230)]/80" // Less transparent
//             : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             {/* Brand */}
//             <Link
//               href="/"
//               className={`text-xl font-semibold transition-colors duration-500 ${
//                 effectiveTheme === "dark"
//                   ? "text-gray-100 hover:text-white"
//                   : "text-gray-900 hover:text-gray-600"
//               }`}
//             >
//               Ly An CHHAY
//             </Link>

//             {/* Navigation */}
//             <div className="flex items-center space-x-6">
//               <div className="hidden md:flex items-center space-x-6">
//                 {["about", "projects", "blog", "contact"].map((item) => (
//                   <Link
//                     key={item}
//                     href={`/${item}`}
//                     className={`capitalize text-sm font-medium transition-colors duration-300 ${
//                       effectiveTheme === "dark"
//                         ? "text-gray-300 hover:text-white"
//                         : "text-gray-700 hover:text-black"
//                     }`}
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               {/* Theme + Music Controls */}
//               {isMounted && (
//                 <div className="flex items-center space-x-3">
//                   {/* Theme Toggle */}
//                   <div className="relative group">
//                     <div
//                       className={`flex items-center gap-1 rounded-full px-1 transition-all duration-300 ${
//                         effectiveTheme === "dark"
//                           ? "bg-gray-800/80"
//                           : "bg-white/80"
//                       }`}
//                     >
//                       {["light", "dark", "system"].map((mode) => (
//                         <button
//                           key={mode}
//                           onClick={() => handleThemeChange(mode)}
//                           className={`p-2 rounded-full text-xs transition-all duration-200 ${
//                             theme === mode
//                               ? mode === "dark"
//                                 ? "bg-gray-700 text-white"
//                                 : mode === "light"
//                                 ? "bg-white text-yellow-600 shadow-sm"
//                                 : "bg-gray-300 text-purple-700"
//                               : effectiveTheme === "dark"
//                               ? "text-gray-400 hover:text-white"
//                               : "text-gray-600 hover:text-black"
//                           }`}
//                         >
//                           {mode === "light"
//                             ? "☀️"
//                             : mode === "dark"
//                             ? "🌙"
//                             : "💻"}
//                         </button>
//                       ))}
//                     </div>
//                     {/* Theme Tooltip */}
//                     <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
//                       Theme: {theme} ({effectiveTheme})
//                     </div>
//                   </div>

//                   {/* Music Toggle */}
//                   <button
//                     onClick={toggleMusic}
//                     className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
//                       isPlaying
//                         ? effectiveTheme === "dark"
//                           ? "bg-green-900/80 text-green-300"
//                           : "bg-green-200/80 text-green-700"
//                         : effectiveTheme === "dark"
//                         ? "bg-gray-800/80 text-gray-400 hover:text-white"
//                         : "bg-white/80 text-gray-600 hover:text-black"
//                     }`}
//                   >
//                     {isPlaying ? (
//                       <div className="flex items-end gap-0.5">
//                         <div className="w-1 h-2 bg-current animate-music-pulse rounded-full" />
//                         <div
//                           className="w-1 h-3 bg-current animate-music-pulse rounded-full"
//                           style={{ animationDelay: "0.1s" }}
//                         />
//                         <div
//                           className="w-1 h-1.5 bg-current animate-music-pulse rounded-full"
//                           style={{ animationDelay: "0.2s" }}
//                         />
//                       </div>
//                     ) : (
//                       <svg
//                         className="w-4 h-4"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";
// import { useTheme } from "@/app/ThemeProvider";

// export default function Navbar() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [theme, setTheme] = useState("system");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [effectiveTheme, setEffectiveTheme] = useState("light");
//   const audioRef = useRef(null);

//   useEffect(() => {
//     setIsMounted(true);

//     // Load saved theme from localStorage
//     const savedTheme = localStorage.getItem("theme") || "system";
//     setTheme(savedTheme);
//     applyTheme(savedTheme);

//     // Auto-play music by default
//     const playMusic = async () => {
//       try {
//         if (audioRef.current) {
//           audioRef.current.volume = 0.2;
//           await audioRef.current.play();
//           setIsPlaying(true);
//         }
//       } catch (error) {
//         console.log("Auto-play failed, waiting for user interaction");
//         // If auto-play fails, it will be handled by the interaction listener
//       }
//     };

//     // Small delay to ensure component is mounted
//     const timer = setTimeout(playMusic, 500);

//     // Handle user interaction for browsers that block auto-play
//     const handleFirstInteraction = () => {
//       if (!isPlaying && audioRef.current) {
//         audioRef.current.play().then(() => {
//           setIsPlaying(true);
//         });
//       }
//     };

//     document.addEventListener("click", handleFirstInteraction, { once: true });
//     document.addEventListener("keydown", handleFirstInteraction, {
//       once: true,
//     });

//     // Scroll event listener for blur effect
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       clearTimeout(timer);
//       document.removeEventListener("click", handleFirstInteraction);
//       document.removeEventListener("keydown", handleFirstInteraction);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Enhanced theme application with proper system detection
//   const applyTheme = (selectedTheme) => {
//     const root = document.documentElement;

//     // Remove all theme classes first
//     root.classList.remove("light", "dark");

//     let actualTheme = selectedTheme;

//     if (selectedTheme === "system") {
//       // Proper system preference detection
//       const systemPrefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       actualTheme = systemPrefersDark ? "dark" : "light";
//     }

//     // Apply the actual theme class
//     root.classList.add(actualTheme);
//     setEffectiveTheme(actualTheme); // Update the effective theme state
//   };

//   const handleThemeChange = (newTheme) => {
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     applyTheme(newTheme);
//   };

//   // Toggle music function
//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch((error) => {
//           console.log("Play failed:", error);
//         });
//     }
//   };

//   // Keyboard shortcut for music toggle
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (
//         event.code === "Space" &&
//         !event.target.closest("input, textarea, [contenteditable]")
//       ) {
//         event.preventDefault();
//         toggleMusic();
//       }
//     };

//     if (isMounted) {
//       document.addEventListener("keydown", handleKeyPress);
//       return () => document.removeEventListener("keydown", handleKeyPress);
//     }
//   }, [isMounted, isPlaying]);

//   return (
//     <>
//       <audio ref={audioRef} loop preload="auto">
//         <source src="/mp3/default1.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Use effectiveTheme instead of theme for styling */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? "backdrop-blur-md" // Reduced to medium blur
//             : "bg-transparent"
//         } ${
//           effectiveTheme === "dark"
//             ? isScrolled
//               ? "bg-[#1a1a1a]/80" // Less transparent
//               : "bg-transparent"
//             : isScrolled
//             ? "bg-[rgb(230,230,230)]/80" // Less transparent
//             : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             {/* Brand */}
//             <Link
//               href="/"
//               className={`text-xl font-semibold transition-colors duration-500 ${
//                 effectiveTheme === "dark"
//                   ? "text-gray-100 hover:text-white"
//                   : "text-gray-900 hover:text-gray-600"
//               }`}
//             >
//               Ly An CHHAY
//             </Link>

//             {/* Navigation */}
//             <div className="flex items-center space-x-6">
//               <div className="hidden md:flex items-center space-x-6">
//                 {["about", "projects", "blog", "contact"].map((item) => (
//                   <Link
//                     key={item}
//                     href={`/${item}`}
//                     className={`capitalize text-sm font-medium transition-colors duration-300 ${
//                       effectiveTheme === "dark"
//                         ? "text-gray-300 hover:text-white"
//                         : "text-gray-700 hover:text-black"
//                     }`}
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>

//               {/* Theme + Music Controls */}
//               {isMounted && (
//                 <div className="flex items-center space-x-3">
//                   {/* Separator */}
//                   <div
//                     className={`w-px h-6 ${
//                       effectiveTheme === "dark" ? "bg-gray-600" : "bg-gray-300"
//                     }`}
//                   ></div>

//                   {/* Controlled Theme Toggle */}
//                   <ThemeToggle
//                     currentTheme={theme}
//                     onThemeChange={handleThemeChange}
//                   />

//                   {/* Music Toggle - No Circle Border */}
//                   <button
//                     onClick={toggleMusic}
//                     className={`flex items-center justify-center transition-all duration-300 ${
//                       isPlaying
//                         ? effectiveTheme === "dark"
//                           ? "text-gray-200"
//                           : "text-gray-700"
//                         : effectiveTheme === "dark"
//                         ? "text-gray-400 hover:text-white"
//                         : "text-gray-500 hover:text-black"
//                     }`}
//                     aria-label={isPlaying ? "Pause music" : "Play music"}
//                   >
//                     {isPlaying ? (
//                       <div className="flex items-end gap-0.5">
//                         <div className="w-1 h-2 bg-current animate-music-pulse rounded-full" />
//                         <div
//                           className="w-1 h-3 bg-current animate-music-pulse rounded-full"
//                           style={{ animationDelay: "0.1s" }}
//                         />
//                         <div
//                           className="w-1 h-1.5 bg-current animate-music-pulse rounded-full"
//                           style={{ animationDelay: "0.2s" }}
//                         />
//                       </div>
//                     ) : (
//                       <svg
//                         className="w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/app/ThemeProvider";

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef(null);

  // Use global theme state instead of local state
  const { theme, effectiveTheme, setTheme, isMounted } = useTheme();

  useEffect(() => {
    // Auto-play music by default
    const playMusic = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.2;
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play failed, waiting for user interaction");
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(playMusic, 500);

    // Handle user interaction for browsers that block auto-play
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        });
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    // Scroll event listener for blur effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle music function
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Play failed:", error);
        });
    }
  };

  // Keyboard shortcut for music toggle
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.code === "Space" &&
        !event.target.closest("input, textarea, [contenteditable]")
      ) {
        event.preventDefault();
        toggleMusic();
      }
    };

    if (isMounted) {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }
  }, [isMounted, isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/mp3/default1.mp3" type="audio/mpeg" />
      </audio>

      {/* Use effectiveTheme instead of theme for styling */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md" // Reduced to medium blur
            : "bg-transparent"
        } ${
          effectiveTheme === "dark"
            ? isScrolled
              ? "bg-[#1a1a1a]/80" // Less transparent
              : "bg-transparent"
            : isScrolled
            ? "bg-[rgb(230,230,230)]/80" // Less transparent
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <Link
              href="/"
              className={`text-xl font-semibold transition-colors duration-500 ${
                effectiveTheme === "dark"
                  ? "text-gray-100 hover:text-white"
                  : "text-gray-900 hover:text-gray-600"
              }`}
            >
              Ly An CHHAY
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                {["about", "projects", "blog", "contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className={`capitalize text-sm font-medium transition-colors duration-300 ${
                      effectiveTheme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Theme + Music Controls */}
              {isMounted && (
                <div className="flex items-center space-x-3">
                  {/* Separator */}
                  <div
                    className={`w-px h-6 ${
                      effectiveTheme === "dark" ? "bg-gray-600" : "bg-gray-300"
                    }`}
                  ></div>

                  {/* Controlled Theme Toggle - Remove props since it uses context now */}
                  <ThemeToggle />

                  {/* Music Toggle - No Circle Border */}
                  <button
                    onClick={toggleMusic}
                    className={`flex items-center justify-center transition-all duration-300 ${
                      isPlaying
                        ? effectiveTheme === "dark"
                          ? "text-gray-200"
                          : "text-gray-700"
                        : effectiveTheme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-black"
                    }`}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                  >
                    {isPlaying ? (
                      <div className="flex items-end gap-0.5">
                        <div className="w-1 h-2 bg-current animate-music-pulse rounded-full" />
                        <div
                          className="w-1 h-3 bg-current animate-music-pulse rounded-full"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-1 h-1.5 bg-current animate-music-pulse rounded-full"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
