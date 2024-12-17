import { cookies } from "next/headers";
import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@shadcn/sidebar";
import { AppSidebar } from "@components/AppSidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend App",
  description: "Frontend Eboard Management App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en">
      <body className="bg-background dark">
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarTrigger />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
