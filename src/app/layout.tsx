import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louisrca",
  description:
    "Welcome to my portofolio. Let's discover who I am, and enjoy it 😀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
