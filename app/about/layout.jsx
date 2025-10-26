// app/about/layout.jsx
import Footer from "@/components/Footer";

export const metadata = {
  title: "Alvalens | About",
};

export default function AboutLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
