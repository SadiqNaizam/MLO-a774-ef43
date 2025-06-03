import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Search,
  UserPlus,
  Settings2,
  MessageSquarePlus,
  ChevronUp,
  ChevronDown,
  Users as UsersIcon // Renamed to avoid conflict
} from 'lucide-react';

interface ChatContact {
  id: string;
  name: string;
  avatarUrl: string;
  status: 'online' | 'offline' | 'away';
  lastMessage?: string;
  unreadCount?: number;
}

const chatContactsData: ChatContact[] = [
  {
    id: '1',
    name: 'Alice Wonderland',
    avatarUrl: 'https://i.pravatar.cc/40?u=alice@example.com',
    status: 'online' as const,
    lastMessage: 'Hey, how are you?',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Bob The Builder',
    avatarUrl: 'https://i.pravatar.cc/40?u=bob@example.com',
    status: 'offline' as const,
    lastMessage: 'Can we fix it?',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatarUrl: 'https://i.pravatar.cc/40?u=charlie@example.com',
    status: 'away' as const,
    lastMessage: 'Good grief!',
  },
  {
    id: '4',
    name: 'Diana Prince',
    avatarUrl: 'https://i.pravatar.cc/40?u=diana@example.com',
    status: 'online' as const,
    lastMessage: 'Wondering about the project.',
    unreadCount: 1,
  },
  {
    id: '5',
    name: 'Edward Scissorhands',
    avatarUrl: 'https://i.pravatar.cc/40?u=edward@example.com',
    status: 'online' as const,
    lastMessage: 'Just trimming the hedges.',
  },
];

interface ChatWidgetProps {
  className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const filteredContacts = chatContactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: ChatContact['status']) => {
    if (status === 'online') return 'bg-green-500';
    if (status === 'away') return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <Card
      className={cn(
        'fixed bottom-0 right-4 w-80 bg-card text-card-foreground shadow-xl rounded-t-lg z-30 flex flex-col',
        isOpen ? 'h-[28rem]' : 'h-14',
        className
      )}
    >
      <CardHeader
        className="flex flex-row items-center justify-between p-3 border-b border-border cursor-pointer bg-muted/50 rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CardTitle className="text-base font-semibold">Chat</CardTitle>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => e.stopPropagation()}>
            <MessageSquarePlus className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => e.stopPropagation()}>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => e.stopPropagation()}>
            <Settings2 className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>
      {isOpen && (
        <>
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search contacts..."
                className="pl-8 h-9 text-sm bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <CardContent className="p-0">
              {filteredContacts.length > 0 ? (
                <ul className="divide-y divide-border">
                  {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                      <Button
                        variant="ghost"
                        className="w-full h-auto justify-start p-3 space-x-3 rounded-none hover:bg-secondary"
                      >
                        <Avatar className="h-9 w-9 relative">
                          <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                          <AvatarFallback>{contact.name.substring(0, 1)}</AvatarFallback>
                          <span
                            className={cn(
                              'absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full border-2 border-card',
                              getStatusColor(contact.status)
                            )}
                          />
                        </Avatar>
                        <div className="text-left flex-1 overflow-hidden">
                          <p className="text-sm font-medium text-foreground truncate">{contact.name}</p>
                          {contact.lastMessage && (
                            <p className={cn('text-xs truncate', contact.unreadCount ? 'text-foreground font-medium' : 'text-muted-foreground')}>
                              {contact.lastMessage}
                            </p>
                          )}
                        </div>
                        {contact.unreadCount && contact.unreadCount > 0 && (
                           <div className="bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                             {contact.unreadCount}
                           </div>
                        )}
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-sm text-center text-muted-foreground">No contacts found.</p>
              )}
            </CardContent>
          </ScrollArea>
          <div className="p-2 border-t border-border text-center">
            <Button variant="link" size="sm" className="text-xs text-accent">
              <UserPlus className="h-3.5 w-3.5 mr-1.5" /> Add new contact
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default ChatWidget;
