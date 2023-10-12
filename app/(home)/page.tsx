import React from 'react';
import {getAuthSession} from "@/lib/auth";
import {getLatestPosts} from "@/src/query/post.query";
import {Post} from "@/src/features/post/Post";

export default async function Home() {
  const session = await getAuthSession()

  const posts = await getLatestPosts(session?.user.id)

  return (
    <div className='divide-y divide-muted'>
      {posts.map(post => <Post post={post} key={post.id}/>)}
    </div>
  );
};