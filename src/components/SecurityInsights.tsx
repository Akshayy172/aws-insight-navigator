
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { alert-triangle, shield, info } from "lucide-react";

const securityAlerts = [
  {
    id: 1,
    type: 'critical',
    title: 'IAM user access key is too old',
    description: 'Access key for user "api-service" has not been rotated in 180 days',
    recommendation: 'Rotate access keys every 90 days',
    severity: 'HIGH'
  },
  {
    id: 2,
    type: 'warning',
    title: 'S3 bucket policy allows public access',
    description: 'Bucket "company-data-backup" has public read permissions',
    recommendation: 'Review and restrict bucket permissions',
    severity: 'MEDIUM'
  },
  {
    id: 3,
    type: 'info',
    title: 'CloudWatch log retention period',
    description: 'Log group retention period should be at least 365 days',
    recommendation: 'Configure appropriate log retention',
    severity: 'LOW'
  },
  {
    id: 4,
    type: 'warning',
    title: 'Password policy is too weak',
    description: 'Minimum password length is 8, recommended is 14 characters',
    recommendation: 'Strengthen password policy requirements',
    severity: 'MEDIUM'
  }
];

export function SecurityInsights() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <shield className="w-5 h-5" />
          <span>Security Insights</span>
        </CardTitle>
        <p className="text-sm text-gray-500">Security recommendations and compliance alerts</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {securityAlerts.map((alert) => (
          <Alert key={alert.id} className={`${
            alert.type === 'critical' ? 'border-red-200 bg-red-50' :
            alert.type === 'warning' ? 'border-yellow-200 bg-yellow-50' :
            'border-blue-200 bg-blue-50'
          }`}>
            <div className="flex items-start space-x-3">
              {alert.type === 'critical' ? (
                <alert-triangle className="w-5 h-5 text-red-600 mt-0.5" />
              ) : alert.type === 'warning' ? (
                <alert-triangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              ) : (
                <info className="w-5 h-5 text-blue-600 mt-0.5" />
              )}
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{alert.title}</h4>
                  <Badge 
                    variant={
                      alert.severity === 'HIGH' ? 'destructive' :
                      alert.severity === 'MEDIUM' ? 'secondary' : 'outline'
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
                
                <AlertDescription className="text-sm text-gray-600 mb-2">
                  {alert.description}
                </AlertDescription>
                
                <p className="text-xs text-gray-500 mb-3">
                  <strong>Recommendation:</strong> {alert.recommendation}
                </p>
                
                <Button size="sm" variant="outline">
                  Fix Issue
                </Button>
              </div>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}
