import { Bell, Search, Settings, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export function DashboardHeader() {
  return (
    <header
      className="border-b border-gray-800 bg-black backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-white">
              FinLense
            </div>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search transactions..."
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400" />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-400 hover:text-white hover:bg-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Notifications"
            >
              <div className="relative">
                <Bell className="h-5 w-5" />
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-black font-medium">3</span>
                </span>
              </div>
            </Button>
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="relative h-8 w-8 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8 ring-2 ring-gray-700 hover:ring-white transition-all duration-200">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="bg-gray-700 text-white font-semibold">VP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 bg-black border border-gray-700 shadow-xl" 
                align="end" 
                forceMount
              >
                <DropdownMenuLabel className="font-normal text-white">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Vivek Prajapati</p>
                    <p className="text-xs leading-none text-gray-400">vivek@finlense.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-900 focus:bg-gray-900 focus:text-white cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-900 focus:bg-gray-900 focus:text-white cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-900 focus:bg-gray-900 focus:text-white cursor-pointer">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
         
        </div>
      </div>
    </header>
  );
}
