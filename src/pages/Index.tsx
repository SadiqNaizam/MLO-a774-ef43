import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FeedCard, { sampleFeedCardData, FeedCardData } from '@/components/NewsFeed/FeedCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit3, Image as ImageIcon, Video, List, UserPlus, MoreHorizontal } from 'lucide-react';

// CreatePostWidget for the "What's on your mind" section
const CreatePostWidget: React.FC = () => {
  return (
    <Card className="w-full max-w-xl mx-auto bg-card text-card-foreground shadow-md rounded-lg">
      <CardHeader className="p-3 border-b border-border">
        <div className="flex items-center space-x-1 text-sm font-medium">
          <Button variant="ghost" className="flex-1 justify-start hover:bg-secondary px-2 py-1.5 h-auto text-primary font-semibold">
            <Edit3 className="h-5 w-5 mr-2 text-primary" />
            Make Post
          </Button>
          <div className="border-l h-6 border-border mx-1"></div>
          <Button variant="ghost" className="flex-1 justify-start hover:bg-secondary px-2 py-1.5 h-auto text-muted-foreground">
            <ImageIcon className="h-5 w-5 mr-2 text-green-500" />
            Photo/Video Album
          </Button>
          <div className="border-l h-6 border-border mx-1"></div>
          <Button variant="ghost" className="flex-1 justify-start hover:bg-secondary px-2 py-1.5 h-auto text-muted-foreground">
            <Video className="h-5 w-5 mr-2 text-red-500" />
            Live Video
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://i.pravatar.cc/40?u=olenna@example.com" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <Input
            type="text"
            placeholder="What's on your mind, Olenna?"
            className="flex-1 bg-secondary/30 hover:bg-secondary/50 focus:bg-secondary border-none rounded-full px-4 py-2.5 text-sm placeholder-muted-foreground focus:ring-1 focus:ring-ring h-10"
          />
        </div>
      </CardContent>
      <div className="px-4 pb-3 pt-0">
        <div className="mt-0 pt-3 border-t border-border flex justify-around items-center">
           <Button variant="ghost" className="text-muted-foreground hover:bg-secondary flex-1 py-2 h-auto">
            <List className="h-5 w-5 mr-2 text-blue-600" /> List
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-secondary flex-1 py-2 h-auto">
            <ImageIcon className="h-5 w-5 mr-2 text-green-600" /> Photo/Video
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-secondary flex-1 py-2 h-auto">
            <UserPlus className="h-5 w-5 mr-2 text-yellow-600" /> Tag Friends
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary ml-2 py-2 h-auto">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};


const NewsFeedPage: React.FC = () => {
  // Data for the feed cards. Using the sample data imported from FeedCard.tsx
  const feedPosts: FeedCardData[] = sampleFeedCardData;

  return (
    <MainAppLayout>
      {/* The CreatePostWidget is the first item in the feed */}
      <CreatePostWidget />
      
      {/* Map over the feedPosts to render FeedCard components */}
      {feedPosts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </MainAppLayout>
  );
};

export default NewsFeedPage;
