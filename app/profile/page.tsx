import {getAuthSession} from "@/lib/auth";
import {getUserProfile} from "@/src/query/user.query";
import {Button, buttonVariants} from "@/components/ui/button";
import {followUser} from "@/app/users/[userId]/follow.action";
import {Post} from "@/src/features/post/Post";
import {Profile} from "@/app/users/[userId]/Profile";
import React from "react";
import {notFound} from "next/navigation";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await getAuthSession()
  if (!session?.user.id) notFound()

  const user = await getUserProfile(session.user.id)

  if (!user) notFound()

  return (
    <div>
      <Profile user={user}>
        <form className='mt-4'>
          <Link
            className={buttonVariants({variant: 'outline'})}
            href={'/profile/edit'}
          >
            Edit profile
          </Link>
        </form>
      </Profile>
      <div className="divide-y divide-accent mt-4 border-t border-accent">
        {user.posts.map(post => <Post post={post} key={post.id}/>)}
      </div>
    </div>
  );
}
