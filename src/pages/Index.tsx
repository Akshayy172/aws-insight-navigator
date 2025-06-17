
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { OverviewSection } from "@/components/OverviewSection";
import { CostAnalytics } from "@/components/CostAnalytics";
import { ResourceMonitoring } from "@/components/ResourceMonitoring";
import { SecurityInsights } from "@/components/SecurityInsights";
import { OptimizationHub } from "@/components/OptimizationHub";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            <OverviewSection />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <CostAnalytics />
              <ResourceMonitoring />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <SecurityInsights />
              <OptimizationHub />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
