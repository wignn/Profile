import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import ResponsiveNavbar from "../components/Home/ResponsiveNavbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wignn Profile",
  description: "modern web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ResponsiveNavbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
