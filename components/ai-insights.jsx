import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Brain, TrendingUp, AlertCircle, Target, X } from 'lucide-react'

const insights = [
  {
    id: 1,
    type: 'spending-pattern',
    title: 'Unusual Spending Detected',
    description: 'Your dining expenses are 23% higher than usual this month.',
    action: 'Review dining transactions',
    priority: 'medium',
    icon: AlertCircle
  },
  {
    id: 2,
    type: 'savings-opportunity',
    title: 'Savings Opportunity',
    description: 'You could save $45/month by switching to a different streaming plan.',
    action: 'Explore options',
    priority: 'low',
    icon: Target
  },
  {
    id: 3,
    type: 'positive-trend',
    title: 'Great Progress!',
    description: 'You\'re on track to save $200 more than last month.',
    action: 'Keep it up',
    priority: 'high',
    icon: TrendingUp
  }
]

export function AIInsights() {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-white" />
          <CardTitle className="text-white">AI Insights</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon
          const priorityColor = {
            high: 'bg-green-900 text-green-300',
            medium: 'bg-yellow-900 text-yellow-300',
            low: 'bg-blue-900 text-blue-300'
          }[insight.priority]
          
          return (
            <div
              key={insight.id}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-gray-400" />
                  <Badge className={`text-xs ${priorityColor}`}>
                    {insight.priority}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-gray-400 hover:text-white">
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <h4 className="text-sm font-medium text-white mb-1">
                {insight.title}
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                {insight.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-gray-600 text-gray-300 hover:text-white">
                {insight.action}
              </Button>
            </div>
          );
        })}
        
        <Button variant="ghost" className="w-full text-gray-400 hover:text-white">
          View All Insights
        </Button>
      </CardContent>
    </Card>
  );
}
