import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@shadcn/sidebar";
import { AppSidebar } from "@components/AppSidebar";
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
      <body className="bg-background dark">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
