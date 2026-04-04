import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/shared/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Siyam Sikder - Full Stack Developer",
  description:
    "Full-stack developer specializing in Next.js, React, Node.js, and modern web technologies. Creating beautiful, performant web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Web Development",
    "Portfolio",
    "Web Design",
  ],
  authors: [{ name: "Siyam Sikder" }],
  creator: "Siyam Sikder",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen bg-[#121212] text-[#eeeeee] antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
