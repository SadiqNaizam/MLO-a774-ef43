import React from 'react';
import SidebarNav from '../NewsFeed/SidebarNav'; // Assuming SidebarNav is in NewsFeed folder as per context
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav component already handles its fixed positioning, width, height, and background
  // as per the layout requirements for the sidebar.
  // This Sidebar component acts as a structural element in the layout system,
  // delegating the actual rendering and styling to SidebarNav.
  // The className prop is provided for flexibility, though SidebarNav's styles are primary.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
