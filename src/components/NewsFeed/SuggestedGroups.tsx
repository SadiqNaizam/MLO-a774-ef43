import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  tagline?: string;
  members: number;
  coverImage: string;
  avatars: string[];
}

interface SuggestedGroupsProps {
  className?: string;
}

const groupsData: Group[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    coverImage: 'https://via.placeholder.com/300x100/FFD700/000000?text=Mad+Men+Cover',
    avatars: [
      'https://i.pravatar.cc/30?u=member1@madmen.com',
      'https://i.pravatar.cc/30?u=member2@madmen.com',
      'https://i.pravatar.cc/30?u=member3@madmen.com',
      'https://i.pravatar.cc/30?u=member4@madmen.com',
    ],
  },
  {
    id: '2',
    name: 'Dexter Morgan Fans',
    members: 6984,
    coverImage: 'https://via.placeholder.com/300x100/DC143C/FFFFFF?text=Dexter+Cover',
    avatars: [
      'https://i.pravatar.cc/30?u=member1@dexter.com',
      'https://i.pravatar.cc/30?u=member2@dexter.com',
      'https://i.pravatar.cc/30?u=member3@dexter.com',
    ],
  },
  {
    id: '3',
    name: 'Tech Innovators Hub',
    members: 12050,
    coverImage: 'https://via.placeholder.com/300x100/4682B4/FFFFFF?text=Tech+Hub',
    avatars: [
      'https://i.pravatar.cc/30?u=member1@tech.com',
      'https://i.pravatar.cc/30?u=member2@tech.com',
      'https://i.pravatar.cc/30?u=member3@tech.com',
      'https://i.pravatar.cc/30?u=member4@tech.com',
      'https://i.pravatar.cc/30?u=member5@tech.com',
    ],
  },
];

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  return (
    <Card className={cn('w-full bg-card text-card-foreground shadow rounded-lg', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border">
        <CardTitle className="text-lg font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" className="text-sm text-accent p-0 h-auto hover:underline">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {groupsData.map((group) => (
          <div key={group.id} className="border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-24 bg-cover bg-center" style={{ backgroundImage: `url(${group.coverImage})` }}>
              <div className="absolute bottom-2 left-2 flex -space-x-2">
                {group.avatars.slice(0, 4).map((avatarSrc, index) => (
                  <Avatar key={index} className="h-8 w-8 border-2 border-card">
                    <AvatarImage src={avatarSrc} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-semibold text-foreground truncate">{group.name}</h4>
              <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
              <Button variant="outline" size="sm" className="w-full mt-2 text-sm hover:bg-secondary">
                <Plus className="h-4 w-4 mr-1.5" /> Join
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
