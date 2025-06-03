import React from 'react';
import TopHeader from '../NewsFeed/TopHeader'; // Assuming TopHeader is in NewsFeed folder as per context
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader component already handles its fixed positioning, height, and background
  // as per the layout requirements for the header.
  // This Header component acts as a structural element in the layout system,
  // delegating the actual rendering and styling to TopHeader.
  // The className prop is provided for flexibility, though TopHeader's styles are primary.
  return <TopHeader className={cn(className)} />;
};

export default Header;
