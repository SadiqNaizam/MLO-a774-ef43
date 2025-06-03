import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import StoriesWidget from '../NewsFeed/StoriesWidget';
import SuggestedGroups from '../NewsFeed/SuggestedGroups';
import ChatWidget from '../NewsFeed/ChatWidget';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-appLayoutBackground", className)}>
      <Header /> {/* Fixed header, z-index managed by TopHeader component */}
      <Sidebar /> {/* Fixed sidebar, z-index managed by SidebarNav component */}
      
      {/* This div wraps the main content and right sidebar, offset for fixed Header and Sidebar */}
      {/* ml-64 accounts for sidebar width (w-64 = 16rem) */}
      {/* pt-16 accounts for header height (h-16 = 4rem) */}
      <div className="flex ml-64 pt-16">
        
        {/* Main Content Area */}
        {/* - flex-1: Takes up available space
            - min-w-0: Prevents content from overflowing flex container
            - overflow-y-auto: Enables vertical scrolling for main content
            - grid grid-cols-1 gap-4: For stacking feed items (children)
            - py-4 px-6: Padding as per mainContent layout requirements
        */}
        <main className="flex-1 min-w-0 overflow-y-auto grid grid-cols-1 gap-4 py-4 px-6">
          {children}
        </main>
        
        {/* Right Sidebar Area */}
        {/* - w-80: Fixed width as per rightSidebar sizing (80 = 20rem)
            - flex-shrink-0: Prevents shrinking when main content is wide
            - bg-surface: Background color
            - p-4: Padding
            - flex flex-col gap-4: For stacking widgets vertically
        */}
        <aside className="w-80 flex-shrink-0 bg-surface p-4 flex flex-col gap-4">
          <StoriesWidget />
          <SuggestedGroups />
          {/* Other right sidebar content would go here */}
        </aside>
      </div>
      
      <ChatWidget /> {/* Fixed chat widget, z-index managed by ChatWidget component */}
    </div>
  );
};

export default MainAppLayout;
