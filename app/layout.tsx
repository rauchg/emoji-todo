import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js TODO",
  metadataBase: new URL("https://emoji-todo.vercel.app"),
  openGraph: {
    title: "Emoji TODO",
    url: "https://emoji-todo.vercel.app",
    siteName: "Emoji TODO",
  },
  twitter: {
    title: "Emoji TODO",
    card: "summary_large_image",
    site: "@rauchg",
    creator: "@rauchg",
  },
  description: "A simple app to demonstate the ease of fetching and mutating data with Next.js App Router, RSC, and Server Actions."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
