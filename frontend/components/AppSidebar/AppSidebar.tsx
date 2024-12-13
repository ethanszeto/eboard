"use client";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@shadcn/sidebar";
import { Switch } from "@shadcn/switch";
import { Label } from "@shadcn/label";
import { Box } from "@components/Box";
import { useEffect, useState } from "react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const bodyClassList = document.body.classList;

    if (isDarkMode) {
      bodyClassList.add("dark");
    } else {
      bodyClassList.remove("dark");
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <Sidebar>
      <SidebarHeader className="p-4">NU Sci</SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel>Eboard Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Box className="flex items-center space-x-2">
            <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={() => setIsDarkMode(!isDarkMode)} />
            <Label htmlFor="dark-mode">{isDarkMode ? "Dark Mode" : "Light Mode"}</Label>
          </Box>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
