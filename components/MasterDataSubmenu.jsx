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
import Link from "next/link";

export const MasterDataSubmenu = () => {
  return (
    <>
      <SidebarMenuSubItem asChild>
        <SidebarMenuSubButton asChild>
          <Link href="dashboard/users">
            <span>Users</span>
          </Link>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </>
  );
};
