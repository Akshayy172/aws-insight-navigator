
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cloud, trending-up, trending-down, zap } from "lucide-react";

const regionData = [
  { name: "US East (N. Virginia)", code: "us-east-1", status: "active", cost: "$1,234" },
  { name: "US West (California)", code: "us-west-1", status: "active", cost: "$856" },
  { name: "EU (Ireland)", code: "eu-west-1", status: "active", cost: "$432" },
  { name: "Asia Pacific (Tokyo)", code: "ap-northeast-1", status: "active", cost: "$678" },
  { name: "Asia Pacific (Singapore)", code: "ap-southeast-1", status: "inactive", cost: "$0" }
];

const quickMetrics = [
  {
    title: "Monthly Spend",
    value: "$3,567",
    change: "+12%",
    trend: "up",
    icon: trending-up
  },
  {
    title: "Cost Savings",
    value: "$892",
    change: "This month",
    trend: "down",
    icon: trending-down
  },
  {
    title: "Active Resources",
    value: "234",
    change: "Across 4 regions",
    trend: "neutral",
    icon: cloud
  },
  {
    title: "Optimization Score",
    value: "87%",
    change: "+5% improvement",
    trend: "up",
    icon: zap
  }
];

export function OverviewSection() {
  return (
    <div className="space-y-6">
      {/* Quick Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className={`text-xs ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {metric.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${
                  metric.trend === 'up' ? 'bg-green-100' : 
                  metric.trend === 'down' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <metric.icon className={`w-6 h-6 ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Regions Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <cloud className="w-5 h-5" />
            <span>Active AWS Regions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionData.map((region) => (
              <div key={region.code} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{region.name}</h4>
                  <Badge variant={region.status === 'active' ? 'default' : 'secondary'}>
                    {region.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mb-1">{region.code}</p>
                <p className="text-lg font-semibold text-gray-900">{region.cost}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
