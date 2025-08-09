import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react'

const budgets = [
  {
    category: 'Food & Dining',
    spent: 450,
    budget: 600,
    status: 'on-track'
  },
  {
    category: 'Transportation',
    spent: 320,
    budget: 300,
    status: 'over-budget'
  },
  {
    category: 'Entertainment',
    spent: 180,
    budget: 250,
    status: 'on-track'
  },
  {
    category: 'Shopping',
    spent: 280,
    budget: 400,
    status: 'on-track'
  },
  {
    category: 'Healthcare',
    spent: 150,
    budget: 200,
    status: 'under-budget'
  }
]

export function BudgetProgress() {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Budget Progress</CardTitle>
        <CardDescription className="text-gray-400">
          Track your spending against budgets
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {budgets.map((budget, index) => {
          const percentage = (budget.spent / budget.budget) * 100
          const isOverBudget = percentage > 100
          const isNearLimit = percentage > 75 && percentage <= 100
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-white">{budget.category}</span>
                  {isOverBudget && <AlertTriangle className="h-4 w-4 text-red-400" />}
                  {isNearLimit && <Clock className="h-4 w-4 text-yellow-400" />}
                  {percentage < 75 && <CheckCircle className="h-4 w-4 text-green-400" />}
                </div>
                <Badge
                  variant={isOverBudget ? "destructive" : "secondary"}
                  className={`text-xs ${
                    isOverBudget 
                      ? "bg-red-900 text-red-300" 
                      : "bg-gray-700 text-gray-300"
                  }`}>
                  ${budget.spent} / ${budget.budget}
                </Badge>
              </div>
              <Progress value={Math.min(percentage, 100)} className="h-2" />
              <div className="flex justify-between text-xs text-gray-400">
                <span>{percentage.toFixed(1)}% used</span>
                <span>${budget.budget - budget.spent} remaining</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
