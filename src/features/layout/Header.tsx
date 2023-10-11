import React from 'react';
import {ThemeToggle} from "@/src/theme/ThemeToggle";
import {LoginButton} from "@/src/features/layout/auth/LoginButton";
import {getAuthSession} from "@/lib/auth";
import {UserProfile} from "@/src/features/layout/auth/UserProfile";

export const Header = async () => {
  const session = await getAuthSession()
  return (
    <header className='border-b border-b-accent fixed bg-background z-20 w-full'>
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className='text-2xl font-bold mr-auto'>Githread</h2>
        {session?.user ? <UserProfile/> : <LoginButton/>}
        <ThemeToggle/>
      </div>

    </header>
  );
};