import { Calendar, Home, Inbox, Search, Settings, PackageSearch, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { MasterDataSubmenu } from "@/components/MasterDataSubmenu";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Menu items.
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
  // async function onClick() {
  //   await signOut();
  // }

  return (
    <Sidebar>
      <SidebarHeader>
        Cashier HiDev
        <form
          action={async () => {
            "use server";
            await signOut();
            redirect("/login");
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
        <SidebarContent>
          <SidebarGroup>
            {/*  Collapse */}
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Link href="#">
                        <span>Master Data</span>
                      </Link>
                      <ChevronDown className="ml-24 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* <SidebarMenuSubItem asChild>
                        <SidebarMenuSubButton asChild>
                          <Link href="dashboard/product">
                            <span>Product</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem> */}
                      <MasterDataSubmenu />
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            {/* --End  colapse */}
          </SidebarGroup>
        </SidebarContent>
      </SidebarHeader>
    </Sidebar>
  );
}
