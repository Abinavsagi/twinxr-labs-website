import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TwinXR Labs - Digital Twin Platform for Real Estate & Cities",
  description: "AI-powered Digital Twin platforms for Real Estate, Smart Cities, Government and Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
