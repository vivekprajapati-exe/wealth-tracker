'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', income: 4500, expenses: 3200 },
  { month: 'Feb', income: 4800, expenses: 3400 },
  { month: 'Mar', income: 4600, expenses: 3100 },
  { month: 'Apr', income: 5200, expenses: 3800 },
  { month: 'May', income: 4900, expenses: 3600 },
  { month: 'Jun', income: 5100, expenses: 3900 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "#ffffff",
  },
  expenses: {
    label: "Expenses",
    color: "#6b7280",
  },
}

export function IncomeExpenseChart() {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Income vs Expenses</CardTitle>
        <CardDescription className="text-gray-400">
          Monthly comparison over the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={data}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="income" fill="#ffffff" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="#6b7280" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
