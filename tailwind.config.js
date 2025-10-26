// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./contexts/**/*.{js,ts,jsx,tsx,mdx}", // Add contexts folder
//   ],
//   darkMode: "class", // ← THIS IS CRITICAL
//   theme: {
//     extend: {
//       // Optional: Add custom colors for dark mode
//       colors: {
//         dark: {
//           100: "#1e293b",
//           200: "#334155",
//           300: "#475569",
//         },
//       },
//     },
//   },
//   plugins: [],
//   future: {
//     removeDeprecatedGapUtilities: true,
//     purgeLayersByDefault: true,
//   },
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // This is crucial - enables class-based dark mode
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
