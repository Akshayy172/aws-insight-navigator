
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  layout-dashboard, 
  chart-bar, 
  cloud, 
  shield, 
  settings,
  zap,
  bell
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    icon: layout-dashboard,
    isActive: true
  },
  {
    title: "Cost Analytics",
    icon: chart-bar,
    isActive: false
  },
  {
    title: "Resources",
    icon: cloud,
    isActive: false
  },
  {
    title: "Security",
    icon: shield,
    isActive: false
  },
  {
    title: "Optimization",
    icon: zap,
    isActive: false
  },
  {
    title: "Alerts",
    icon: bell,
    isActive: false
  },
  {
    title: "Settings",
    icon: settings,
    isActive: false
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <cloud className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">CloudScope</h2>
            <p className="text-xs text-gray-500">AWS Management</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={item.isActive}
                    className="w-full justify-start"
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button variant="outline" size="sm" className="w-full">
          <settings className="w-4 h-4 mr-2" />
          Account Settings
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
