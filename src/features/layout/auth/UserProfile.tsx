import React from 'react';
import {getAuthSession} from "@/lib/auth";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {User2} from "lucide-react";
import {DropdownMenuItemLogout} from "@/src/features/layout/auth/LogoutButton";

export const UserProfile = async () => {
  const session = await getAuthSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {session?.user.name ?? ''}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href='/profile'>
            <User2 className='mr-2 h-4 w-4'/>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItemLogout/>
      </DropdownMenuContent>

    </DropdownMenu>
  );
};