import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./tailwind.css";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Bandit Chaluay</title>
        <meta
          name="description"
          content="Cyberpunk-themed portfolio of a Fullstack Developer"
        />
        <meta property="og:title" content="Portfolio Bandit Chaluay" />
        <meta
          property="og:description"
          content="Cyberpunk-themed portfolio of a Fullstack Developer"
        />
        <meta
          property="og:image"
          content="https://img2.pic.in.th/pic/port.md.jpg" 
        />
        <meta property="og:url" content="URL ของหน้าเว็บ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio Bandit Chaluay" />
        <meta
          name="twitter:description"
          content="Cyberpunk-themed portfolio of a Fullstack Developer"
        />
        <meta name="twitter:image" content="https://img2.pic.in.th/pic/port.md.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
