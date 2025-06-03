import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Newspaper,
  MessageSquare,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserPlus,
  Heart,
  ChevronDown,
  PlusCircle,
  Settings,
  LogOut
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  isSectionTitle?: boolean;
  isUser?: boolean;
  avatarSrc?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, isSectionTitle, isUser, avatarSrc }) => {
  if (isSectionTitle) {
    return <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">{label}</h3>;
  }

  return (
    <a
      href={href}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150',
        isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground',
        isUser ? 'mb-2' : ''
      )}
    >
      {isUser && avatarSrc ? (
        <Avatar className="h-7 w-7 mr-3">
          <AvatarImage src={avatarSrc} alt={label} />
          <AvatarFallback>{label.substring(0, 1)}</AvatarFallback>
        </Avatar>
      ) : (
        <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
      )}
      <span className="truncate">{label}</span>
    </a>
  );
};

const SidebarNav: React.FC = () => {
  const navItems: NavItemProps[] = [
    { icon: UserPlus, label: 'Olenna Mason', avatarSrc: 'https://i.pravatar.cc/40?u=olenna@example.com', isUser: true },
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageSquare, label: 'Messenger' },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts: NavItemProps[] = [
    { isSectionTitle: true, label: 'Shortcuts', icon: Settings }, // Dummy icon, not displayed
    { icon: Gamepad2, label: 'FarmVille 2' },
  ];

  const exploreItems: NavItemProps[] = [
    { isSectionTitle: true, label: 'Explore', icon: Settings }, // Dummy icon
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: UserPlus, label: 'Friend Lists' },
    { icon: Heart, label: 'Fundraisers' },
    { icon: ChevronDown, label: 'See More...' },
  ];

  const createItems: NavItemProps[] = [
    { isSectionTitle: true, label: 'Create', icon: Settings }, // Dummy icon
    { icon: PlusCircle, label: 'Ad' },
    { icon: PlusCircle, label: 'Page' },
    { icon: PlusCircle, label: 'Group' },
    { icon: PlusCircle, label: 'Event' },
    { icon: PlusCircle, label: 'Fundraiser' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground flex flex-col z-10">
      {/* This padding accounts for the fixed TopHeader height (h-16 = 4rem) */}
      <ScrollArea className="flex-1 pt-16">
        <div className="p-2 space-y-1">
          {navItems.map((item, index) => <NavItem key={`nav-${index}`} {...item} />)}
          <Separator className="my-3 bg-sidebar-border" />
          {shortcuts.map((item, index) => <NavItem key={`shortcut-${index}`} {...item} />)}
          <Separator className="my-3 bg-sidebar-border" />
          {exploreItems.map((item, index) => <NavItem key={`explore-${index}`} {...item} />)}
          <Separator className="my-3 bg-sidebar-border" />
          {createItems.map((item, index) => <NavItem key={`create-${index}`} {...item} />)}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border">
        <NavItem icon={LogOut} label="Logout" />
      </div>
    </nav>
  );
};

export default SidebarNav;
