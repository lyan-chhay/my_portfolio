// "use client";
// import { useTheme } from "@/app/ThemeProvider";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
//       aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//     >
//       {theme === "dark" ? (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
//         </svg>
//       ) : (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
//         </svg>
//       )}
//     </button>
//   );
// }

// "use client";

// export default function ThemeToggle({ currentTheme, onThemeChange }) {
//   const cycleTheme = () => {
//     const themes = ["light", "dark", "system"];
//     const nextTheme =
//       themes[(themes.indexOf(currentTheme) + 1) % themes.length];
//     onThemeChange(nextTheme);
//   };

//   return (
//     <button
//       onClick={cycleTheme}
//       className="relative group p-2"
//       aria-label={`Current theme: ${currentTheme}`}
//     >
//       <div className="w-5 h-5">
//         {currentTheme === "light" && (
//           <svg fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
//           </svg>
//         )}
//         {currentTheme === "dark" && (
//           <svg fill="currentColor" viewBox="0 0 24 24">
//             <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
//           </svg>
//         )}
//         {currentTheme === "system" && (
//           <svg fill="currentColor" viewBox="0 0 24 24">
//             <path d="M2.25 6A2.25 2.25 0 014.5 3.75h15A2.25 2.25 0 0121.75 6v12a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6zM4.5 5.25a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-15zM9 17.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" />
//           </svg>
//         )}
//       </div>

//       <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
//         {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
//       </div>
//     </button>
//   );
// }

"use client";
import { useTheme } from "@/app/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes = ["light", "dark", "system"];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative group p-2"
      aria-label={`Current theme: ${theme}`}
    >
      <div className="w-5 h-5">
        {theme === "light" && (
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        )}
        {theme === "dark" && (
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
          </svg>
        )}
        {theme === "system" && (
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.25 6A2.25 2.25 0 014.5 3.75h15A2.25 2.25 0 0121.75 6v12a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6zM4.5 5.25a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-15zM9 17.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" />
          </svg>
        )}
      </div>

      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </div>
    </button>
  );
}
