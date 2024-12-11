import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend App",
  description: "Frontend Eboard Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
