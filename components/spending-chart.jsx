'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Housing', value: 1200, color: '#ffffff' },
  { name: 'Food & Dining', value: 450, color: '#d1d5db' },
  { name: 'Transportation', value: 320, color: '#9ca3af' },
  { name: 'Entertainment', value: 180, color: '#6b7280' },
  { name: 'Shopping', value: 280, color: '#4b5563' },
  { name: 'Healthcare', value: 150, color: '#374151' },
  { name: 'Other', value: 220, color: '#1f2937' }
]

const chartConfig = {
  spending: {
    label: "Spending",
  },
  housing: {
    label: "Housing",
    color: "#ffffff",
  },
  food: {
    label: "Food & Dining",
    color: "#d1d5db",
  },
  transportation: {
    label: "Transportation",
    color: "#9ca3af",
  },
  entertainment: {
    label: "Entertainment",
    color: "#6b7280",
  },
  shopping: {
    label: "Shopping",
    color: "#4b5563",
  },
  healthcare: {
    label: "Healthcare",
    color: "#374151",
  },
  other: {
    label: "Other",
    color: "#1f2937",
  },
}

export function SpendingChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Spending by Category</CardTitle>
        <CardDescription className="text-gray-400">
          This month's spending breakdown
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-300">{item.name}</span>
              </div>
              <div className="text-white font-medium">
                ${item.value} ({((item.value / total) * 100).toFixed(1)}%)
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
