// import Footer from "@/components/Footer";

// export const metadata = {
//   title: "Ly An | Blog"
// };
// export default function Layout({ children }) {
//   return (
//     <>
//       {children}
//       <Footer />
//     </>
//   );
// }

// app/blog/layout.jsx
import { Inter, JetBrains_Mono } from 'next/font/google';
// import './blog-globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  title: {
    default: 'Blog - Your Name',
    template: '%s | Your Name Blog',
  },
  description: 'Thoughts, tutorials, and insights on web development and design',
  openGraph: {
    title: 'Blog - Your Name',
    description: 'Thoughts, tutorials, and insights on web development and design',
    type: 'website',
  },
};

export default function BlogLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}