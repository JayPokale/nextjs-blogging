import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import Providers from "./providers";

const sailec = localFont({
  src: [
    {
      path: "../public/fonts/Sailec Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sailec Medium.otf",
      weight: "500",
      style: "medium",
    },
    { path: "../public/fonts/Sailec Bold.otf", weight: "700", style: "bold" },
  ],
});

export const metadata: Metadata = {
  title: "Home | Authors log",
  description:
    "Explore a world of inspiration and knowledge at Authors Log. Discover insightful articles, inspiring stories, and creative ideas. Join our community of learners and dreamers today!",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen dark ${sailec.className}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
