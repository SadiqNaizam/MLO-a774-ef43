import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PlusCircle, BookClock, Settings } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  userAvatar: string;
  storyImage: string;
  isViewed?: boolean;
}

interface StoriesWidgetProps {
  className?: string;
}

const storiesData: Story[] = [
  {
    id: '1',
    userName: 'Sarah Miller',
    userAvatar: 'https://i.pravatar.cc/60?u=sarah@example.com',
    storyImage: 'https://via.placeholder.com/100x150/FFA07A/FFFFFF?text=Story+1',
  },
  {
    id: '2',
    userName: 'David Kim',
    userAvatar: 'https://i.pravatar.cc/60?u=david@example.com',
    storyImage: 'https://via.placeholder.com/100x150/20B2AA/FFFFFF?text=Story+2',
    isViewed: true,
  },
  {
    id: '3',
    userName: 'Laura Chen',
    userAvatar: 'https://i.pravatar.cc/60?u=laura@example.com',
    storyImage: 'https://via.placeholder.com/100x150/7FFFD4/000000?text=Story+3',
  },
  {
    id: '4',
    userName: 'Michael B.',
    userAvatar: 'https://i.pravatar.cc/60?u=michael@example.com',
    storyImage: 'https://via.placeholder.com/100x150/FF69B4/FFFFFF?text=Story+4',
  },
  {
    id: '5',
    userName: 'Emily White',
    userAvatar: 'https://i.pravatar.cc/60?u=emily@example.com',
    storyImage: 'https://via.placeholder.com/100x150/BA55D3/FFFFFF?text=Story+5',
    isViewed: true,
  },
];

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('w-full bg-card text-card-foreground shadow rounded-lg', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border">
        <CardTitle className="text-lg font-semibold">Stories</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-secondary">
            <BookClock className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-secondary">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-3">
            <div className="flex-shrink-0 w-28 h-40 rounded-lg overflow-hidden relative border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center bg-secondary">
              <div className="absolute top-0 left-0 w-full h-2/3 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/100?u=currentuser@example.com')" }} />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-card flex flex-col items-center justify-end p-2 pt-3">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-1 border-2 border-card">
                   <PlusCircle className="h-5 w-5" />
                 </div>
                <p className="text-xs font-medium text-center text-foreground mt-1">Add to Story</p>
              </div>
            </div>

            {storiesData.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-28 h-40 rounded-lg overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={story.storyImage}
                  alt={`${story.userName}'s story`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Avatar className={cn(
                  'absolute top-2 left-2 h-8 w-8 border-2',
                  story.isViewed ? 'border-gray-400' : 'border-accent'
                )}>
                  <AvatarImage src={story.userAvatar} alt={story.userName} />
                  <AvatarFallback>{story.userName.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <p className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white truncate">
                  {story.userName}
                </p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
