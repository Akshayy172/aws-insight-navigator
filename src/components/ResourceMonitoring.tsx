
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const resourceMetrics = [
  { 
    service: 'EC2 Instances', 
    count: 42, 
    utilization: 78, 
    status: 'healthy',
    cost: '$1,234'
  },
  { 
    service: 'RDS Databases', 
    count: 8, 
    utilization: 65, 
    status: 'healthy',
    cost: '$892'
  },
  { 
    service: 'S3 Buckets', 
    count: 156, 
    utilization: 45, 
    status: 'warning',
    cost: '$445'
  },
  { 
    service: 'Lambda Functions', 
    count: 23, 
    utilization: 34, 
    status: 'healthy',
    cost: '$334'
  },
  { 
    service: 'Load Balancers', 
    count: 6, 
    utilization: 89, 
    status: 'critical',
    cost: '$278'
  },
  { 
    service: 'CloudFront', 
    count: 12, 
    utilization: 56, 
    status: 'healthy',
    cost: '$223'
  }
];

export function ResourceMonitoring() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Resource Monitoring</CardTitle>
        <p className="text-sm text-gray-500">Real-time resource utilization and health</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resourceMetrics.map((resource) => (
            <div key={resource.service} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{resource.service}</h4>
                  <p className="text-sm text-gray-500">{resource.count} resources</p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={
                      resource.status === 'healthy' ? 'default' :
                      resource.status === 'warning' ? 'secondary' : 'destructive'
                    }
                  >
                    {resource.status}
                  </Badge>
                  <p className="text-sm font-medium mt-1">{resource.cost}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Utilization</span>
                  <span>{resource.utilization}%</span>
                </div>
                <Progress 
                  value={resource.utilization} 
                  className={`h-2 ${
                    resource.utilization > 80 ? 'bg-red-100' :
                    resource.utilization > 60 ? 'bg-yellow-100' : 'bg-green-100'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
