import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Blog",
  description: "Blog built in Next JS that uses AI",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
