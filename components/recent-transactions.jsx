import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react'

const transactions = [
  {
    id: 1,
    description: 'Grocery Store',
    category: 'Food & Dining',
    amount: -85.50,
    date: '2025-08-08',
    account: 'Main Checking',
    type: 'expense',
    merchant: 'Whole Foods'
  },
  {
    id: 2,
    description: 'Salary Deposit',
    category: 'Income',
    amount: 3500.00,
    date: '2025-08-07',
    account: 'Main Checking',
    type: 'income',
    merchant: 'Company Inc'
  },
  {
    id: 3,
    description: 'Gas Station',
    category: 'Transportation',
    amount: -45.20,
    date: '2025-08-07',
    account: 'Credit Card',
    type: 'expense',
    merchant: 'Shell'
  },
  {
    id: 4,
    description: 'Netflix Subscription',
    category: 'Entertainment',
    amount: -15.99,
    date: '2025-08-06',
    account: 'Credit Card',
    type: 'expense',
    merchant: 'Netflix'
  },
  {
    id: 5,
    description: 'Coffee Shop',
    category: 'Food & Dining',
    amount: -4.50,
    date: '2025-08-06',
    account: 'Main Checking',
    type: 'expense',
    merchant: 'Starbucks'
  },
  {
    id: 6,
    description: 'Online Transfer',
    category: 'Transfer',
    amount: 500.00,
    date: '2025-08-05',
    account: 'Savings Account',
    type: 'transfer',
    merchant: 'Internal Transfer'
  }
]

export function RecentTransactions() {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">Recent Transactions</CardTitle>
          <CardDescription className="text-gray-400">
            Your latest financial activity
          </CardDescription>
        </div>
        <Button
          variant="outline"
          className="border-gray-600 text-gray-300 hover:text-white">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 bg-gray-700">
                  <AvatarFallback className="bg-gray-700 text-white text-sm">
                    {transaction.merchant.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-white">{transaction.description}</p>
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                      {transaction.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>{transaction.account}</span>
                    <span>•</span>
                    <span>{new Date(transaction.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div
                    className={`text-sm font-medium ${
                      transaction.amount > 0 ? 'text-green-400' : 'text-white'
                    }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                  <div className="flex items-center justify-end">
                    {transaction.amount > 0 ? (
                      <ArrowDownRight className="h-3 w-3 text-green-400" />
                    ) : (
                      <ArrowUpRight className="h-3 w-3 text-gray-400" />
                    )}
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
