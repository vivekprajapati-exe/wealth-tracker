import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CreditCard, Wallet, PiggyBank, TrendingUp } from 'lucide-react'

const accounts = [
  {
    id: 1,
    name: 'Main Checking',
    type: 'checking',
    balance: 5420.50,
    change: +125.30,
    icon: Wallet,
    isDefault: true
  },
  {
    id: 2,
    name: 'Savings Account',
    type: 'savings',
    balance: 12850.75,
    change: +450.00,
    icon: PiggyBank,
    isDefault: false
  },
  {
    id: 3,
    name: 'Credit Card',
    type: 'credit',
    balance: -1250.25,
    change: -85.50,
    icon: CreditCard,
    isDefault: false
  },
  {
    id: 4,
    name: 'Investment',
    type: 'investment',
    balance: 8750.00,
    change: +320.75,
    icon: TrendingUp,
    isDefault: false
  }
]

export function AccountOverview() {
  const totalBalance = accounts.reduce((sum, account) => {
    return account.type === 'credit' ? sum + account.balance : sum + account.balance
  }, 0)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Account Overview</h2>
        <div className="text-right">
          <p className="text-sm text-gray-400">Total Net Worth</p>
          <p className="text-2xl font-bold text-white">
            ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {accounts.map((account) => {
          const Icon = account.icon
          const isPositive = account.change > 0
          
          return (
            <Card
              key={account.id}
              className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  {account.name}
                  {account.isDefault && (
                    <Badge variant="secondary" className="ml-2 bg-white text-black text-xs">
                      Default
                    </Badge>
                  )}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  {account.type === 'credit' && account.balance < 0 && (
                    <span className="text-red-400"> DR</span>
                  )}
                </div>
                <p className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? '+' : ''}${account.change.toFixed(2)} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
