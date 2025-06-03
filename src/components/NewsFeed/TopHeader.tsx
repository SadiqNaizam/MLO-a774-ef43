import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 h-16 bg-primary text-primary-foreground',
        'flex items-center justify-between px-4 shadow-md z-20',
        className
      )}
    >
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-white" />
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="bg-white/20 hover:bg-white/30 focus:bg-white text-primary-foreground placeholder-gray-300 border-none rounded-full pl-8 pr-3 py-1.5 h-9 w-60 text-sm"
          />
        </div>
      </div>

      {/* Center Section: Nav Links */}
      <nav className="hidden md:flex items-center space-x-2">
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: Users, label: 'Find Friends' },
        ].map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={cn(
              'px-6 py-2 h-full rounded-none text-sm font-medium hover:bg-black/10',
              item.active ? 'border-b-2 border-blue-300 text-blue-300' : 'text-primary-foreground/80 hover:text-primary-foreground'
            )}
            aria-label={item.label}
          >
            <item.icon className={cn('h-6 w-6', item.active ? 'text-blue-300' : 'text-primary-foreground/80')} />
          </Button>
        ))}
      </nav>

      {/* Right Section: User Profile and Action Icons */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="text-sm font-medium flex items-center space-x-1.5 p-1.5 rounded-full hover:bg-black/10">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://i.pravatar.cc/40?u=olenna@example.com" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <span className="hidden lg:inline">Olenna</span>
        </Button>

        {[
          { icon: Users, label: 'Friend Requests', notificationCount: 8 },
          { icon: MessageCircle, label: 'Messenger', notificationCount: 5 },
          { icon: Bell, label: 'Notifications', notificationCount: 36 },
        ].map((item, index) => (
          <Button key={index} variant="ghost" size="icon" className="relative rounded-full h-10 w-10 hover:bg-black/10" aria-label={item.label}>
            <item.icon className="h-5 w-5 text-primary-foreground" />
            {item.notificationCount > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] p-1 text-xs flex items-center justify-center">
                {item.notificationCount}
              </Badge>
            )}
          </Button>
        ))}
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-black/10" aria-label="Help">
          <HelpCircle className="h-5 w-5 text-primary-foreground" />
        </Button>
         <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-black/10" aria-label="Account Settings">
          <ChevronDown className="h-5 w-5 text-primary-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
