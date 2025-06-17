
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { zap, trending-down } from "lucide-react";

const optimizationSuggestions = [
  {
    id: 1,
    title: 'Right-size EC2 instances',
    description: '3 instances are over-provisioned and can be downsized',
    potentialSaving: '$234',
    effort: 'Low',
    impact: 'Medium'
  },
  {
    id: 2,
    title: 'Use Reserved Instances',
    description: 'Convert 8 On-Demand instances to Reserved for better pricing',
    potentialSaving: '$892',
    effort: 'Low',
    impact: 'High'
  },
  {
    id: 3,
    title: 'Enable S3 Intelligent Tiering',
    description: 'Automatically optimize storage costs for 12 buckets',
    potentialSaving: '$156',
    effort: 'Low',
    impact: 'Low'
  },
  {
    id: 4,
    title: 'Optimize Lambda memory allocation',
    description: '5 functions are over-allocated and can be optimized',
    potentialSaving: '$67',
    effort: 'Medium',
    impact: 'Low'
  },
  {
    id: 5,
    title: 'Clean up unused EBS volumes',
    description: '4 unattached volumes are incurring unnecessary costs',
    potentialSaving: '$89',
    effort: 'Low',
    impact: 'Medium'
  }
];

export function OptimizationHub() {
  const totalSavings = optimizationSuggestions.reduce((sum, suggestion) => 
    sum + parseInt(suggestion.potentialSaving.replace('$', '')), 0
  );

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <zap className="w-5 h-5" />
          <span>Optimization Hub</span>
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Cost optimization recommendations</p>
          <div className="flex items-center space-x-2">
            <trending-down className="w-4 h-4 text-green-600" />
            <span className="text-lg font-bold text-green-600">${totalSavings} potential savings</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {optimizationSuggestions.map((suggestion) => (
          <div key={suggestion.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
              <span className="text-lg font-bold text-green-600">{suggestion.potentialSaving}</span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Badge variant="outline">
                  Effort: {suggestion.effort}
                </Badge>
                <Badge variant={suggestion.impact === 'High' ? 'default' : 'secondary'}>
                  Impact: {suggestion.impact}
                </Badge>
              </div>
              
              <Button size="sm">
                Apply
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
