import { Button } from '@/components/ui/button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { User } from 'lucide-react';

export const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-black">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem>Редактирование источников</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Выход</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
