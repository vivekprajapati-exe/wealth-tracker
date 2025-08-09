import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Camera, Upload, Target, PieChart, Settings } from 'lucide-react'

const actions = [
  {
    icon: Plus,
    label: 'Add Transaction',
    description: 'Manually add a new transaction',
    color: 'bg-white text-black hover:bg-gray-200'
  },
  {
    icon: Camera,
    label: 'Scan Receipt',
    description: 'AI-powered receipt scanning',
    color: 'bg-gray-800 text-white hover:bg-gray-700'
  },
  {
    icon: Upload,
    label: 'Import Data',
    description: 'Upload CSV or connect bank',
    color: 'bg-gray-800 text-white hover:bg-gray-700'
  },
  {
    icon: Target,
    label: 'Set Budget',
    description: 'Create spending limits',
    color: 'bg-gray-800 text-white hover:bg-gray-700'
  },
  {
    icon: PieChart,
    label: 'View Reports',
    description: 'Detailed analytics',
    color: 'bg-gray-800 text-white hover:bg-gray-700'
  },
  {
    icon: Settings,
    label: 'Settings',
    description: 'Manage preferences',
    color: 'bg-gray-800 text-white hover:bg-gray-700'
  }
]

export function QuickActions() {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button
                key={index}
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center space-y-2 ${action.color} border-gray-600`}>
                <Icon className="h-6 w-6" />
                <div className="text-center">
                  <div className="text-sm font-medium">{action.label}</div>
                  <div className="text-xs opacity-70">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
