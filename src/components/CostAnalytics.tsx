
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const monthlyData = [
  { month: 'Jan', actual: 2800, forecast: 2900 },
  { month: 'Feb', actual: 3200, forecast: 3100 },
  { month: 'Mar', actual: 2900, forecast: 3000 },
  { month: 'Apr', actual: 3400, forecast: 3300 },
  { month: 'May', actual: 3100, forecast: 3200 },
  { month: 'Jun', actual: 3567, forecast: 3400 },
];

const serviceBreakdown = [
  { service: 'EC2', cost: 1234, percentage: 35 },
  { service: 'RDS', cost: 892, percentage: 25 },
  { service: 'S3', cost: 445, percentage: 12 },
  { service: 'Lambda', cost: 334, percentage: 9 },
  { service: 'CloudFront', cost: 223, percentage: 6 },
  { service: 'Others', cost: 439, percentage: 13 },
];

export function CostAnalytics() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Cost Analytics</CardTitle>
        <p className="text-sm text-gray-500">Monthly spending trends and forecasts</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Monthly Trend Chart */}
        <div>
          <h4 className="text-sm font-medium mb-3">Monthly Spend vs Forecast</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, '']} />
              <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="forecast" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="Forecast" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service Breakdown */}
        <div>
          <h4 className="text-sm font-medium mb-3">Cost by Service</h4>
          <div className="space-y-3">
            {serviceBreakdown.map((service) => (
              <div key={service.service} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: `hsl(${service.percentage * 10}, 70%, 50%)` }}
                  />
                  <span className="text-sm font-medium">{service.service}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">${service.cost}</p>
                  <p className="text-xs text-gray-500">{service.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
