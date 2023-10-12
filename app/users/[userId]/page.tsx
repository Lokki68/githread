import {getAuthSession} from '@/lib/auth'
import React from 'react'
import {getUserProfile} from "@/src/query/user.query";
import {Profile} from "@/app/users/[userId]/Profile";
import {notFound, redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import {prisma} from "@/lib/prisma";
import {followUser} from "@/app/users/[userId]/follow.action";
import {Post} from "@/src/features/post/Post";
import {Metadata} from "next";

export const generateMetadata = async ({params}: PageParams): Promise<Metadata> => {
  const user = await getUserProfile(params.userId)

  if (!user) throw new Error('User not found')

  return ({
    title: `${user.name} (${user.username})`
  })
}

type PageParams = {
  params: {
    userId: string
  }
}

export default async function UserPage({params}: PageParams) {
  const session = await getAuthSession()
  const user = await getUserProfile(params.userId)

  if (!user) notFound()

  const isFollowing = session?.user.id ? await prisma.follow.findFirst({
    where: {
      followerId: session?.user.id,
      followingId: user.id
    },
    select: {
      id: true
    }
  }) : null

  const isCurrentUser = params.userId === session?.user.id

  if (isCurrentUser) redirect('/profile')

  return (
    <div>
      <Profile user={user}>
        <form className='mt-4'>
          <Button
            variant='outline'
            formAction={async () => {
              'use server'
              if (!session?.user.id) return

              await followUser(params.userId)
            }}>
            {isFollowing ? 'UnFollow' : 'Follow'}
          </Button>
        </form>
      </Profile>
      <div className="divide-y divide-accent mt-4 border-t border-accent">
        {user.posts.map(post => <Post post={post} key={post.id}/>)}
      </div>
    </div>
  )
}
