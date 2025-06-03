import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  MapPin,
  Bookmark,
  Users
} from 'lucide-react';

export interface FeedCardData {
  id: string;
  userName: string;
  userAvatar: string;
  userHandle?: string;
  postTime: string;
  content?: string;
  imageSrc?: string;
  mapImageSrc?: string;
  location?: string;
  likedBy?: string[]; // List of names or IDs
  commentsCount: number;
  sharesCount: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

interface FeedCardProps {
  post: FeedCardData;
  className?: string;
}

const FeedCard: React.FC<FeedCardProps> = ({ post, className }) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(post.isLiked || false);
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>(post.isBookmarked || false);

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);

  return (
    <Card className={cn('w-full max-w-xl mx-auto bg-card text-card-foreground shadow-md rounded-lg', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.userAvatar} alt={post.userName} />
              <AvatarFallback>{post.userName.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.userName}</p>
              <p className="text-xs text-muted-foreground">
                {post.userHandle ? `${post.userHandle} · ` : ''}{post.postTime}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {post.content && <p className="px-4 pb-3 text-sm text-foreground whitespace-pre-wrap">{post.content}</p>}
        {post.imageSrc && (
          <img src={post.imageSrc} alt="Post content" className="w-full h-auto object-cover" />
        )}
        {post.mapImageSrc && (
          <div className="relative">
            <img src={post.mapImageSrc} alt={post.location || 'Map location'} className="w-full h-auto object-cover" />
            {post.location && (
              <div className="absolute bottom-0 left-0 w-full p-3 bg-black/50 text-white">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{post.location}</p>
                    {post.likedBy && post.likedBy.length > 0 && (
                      <p className="text-xs">
                        {post.likedBy[0]} {post.likedBy.length > 1 ? `and ${post.likedBy.length -1} others` : ''} have been here
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-2 flex flex-col space-y-2">
        {(post.likedBy || post.commentsCount > 0 || post.sharesCount > 0) && (
          <div className="w-full flex justify-between items-center px-2 py-1 text-xs text-muted-foreground">
            <div className="flex items-center">
             {post.likedBy && post.likedBy.length > 0 && 
                <><Users className="h-4 w-4 mr-1" /> {post.likedBy.length} {post.likedBy.length === 1 ? 'like' : 'likes'}</>
             }
            </div>
            <div className="space-x-2">
              <span>{post.commentsCount} Comments</span>
              <span>{post.sharesCount} Shares</span>
            </div>
          </div>
        )}
        <Separator className="bg-border"/>
        <div className="w-full grid grid-cols-3 gap-1 pt-1">
          <Button variant="ghost" className="w-full text-muted-foreground hover:bg-secondary" onClick={handleLike}>
            <ThumbsUp className={cn('h-5 w-5 mr-2', isLiked && 'text-accent fill-accent/20')} /> Like
          </Button>
          <Button variant="ghost" className="w-full text-muted-foreground hover:bg-secondary">
            <MessageSquare className="h-5 w-5 mr-2" /> Comment
          </Button>
          <Button variant="ghost" className="w-full text-muted-foreground hover:bg-secondary">
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
         {post.mapImageSrc && !post.imageSrc && (
          <div className="w-full px-2 pb-1">
            <Separator className="my-2 bg-border" />
            <Button variant="outline" className="w-full text-muted-foreground" onClick={handleBookmark}>
              <Bookmark className={cn('h-5 w-5 mr-2', isBookmarked && 'text-accent fill-accent')} /> {isBookmarked ? 'Saved' : 'Save'}
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export const sampleFeedCardData: FeedCardData[] = [
  {
    id: '1',
    userName: 'Julia Fillory',
    userAvatar: 'https://i.pravatar.cc/40?u=julia@example.com',
    postTime: '2 hrs ago',
    content: 'Checking out some new stores downtown!',
    mapImageSrc: 'https://via.placeholder.com/600x400.png?text=Map+of+Raleigh',
    location: 'Raleigh, North Carolina',
    likedBy: ['Bryan Durand', 'Anna Smith', 'John Doe'],
    commentsCount: 12,
    sharesCount: 5,
    isBookmarked: false,
  },
  {
    id: '2',
    userName: 'Alex Johnson',
    userAvatar: 'https://i.pravatar.cc/40?u=alex@example.com',
    postTime: '5 hrs ago',
    content: 'Just enjoyed a beautiful sunset. Nature is amazing! 🌅 #sunset #nature',
    imageSrc: 'https://via.placeholder.com/600x400.png?text=Beautiful+Sunset',
    likedBy: ['Maria Garcia', 'Chen Wang'],
    commentsCount: 25,
    sharesCount: 8,
    isLiked: true,
  },
];

export default FeedCard;
