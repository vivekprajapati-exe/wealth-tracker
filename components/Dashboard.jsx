import { DashboardHeader } from '@/components/DashboardHeader'
import { AccountOverview } from '@/components/account-overview'
import { QuickActions } from '@/components/quick-actions'
import { SpendingChart } from '@/components/spending-chart'
import { RecentTransactions } from '@/components/recent-transactions'
import { BudgetProgress } from '@/components/budget-progress'
import { AIInsights } from '@/components/ai-insights'
import { IncomeExpenseChart } from '@/components/income-expense-chart'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Account Overview */}
        <AccountOverview />
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpendingChart />
          <IncomeExpenseChart />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <BudgetProgress />
            <AIInsights />
          </div>
        </div>
      </main>
    </div>
  );
}
