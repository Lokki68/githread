import {getUser} from "@/src/query/user.query";
import {createReply} from "@/app/posts/[postId]/reply/write-reply.action";
import {ReplyModal} from "@/app/@modal/(.)posts/[postId]/reply/ReplyModal";

export default async function Page({params}: { params: { postId: string } }) {
  const user = await getUser()

  return (
    <div>
      <ReplyModal user={user} createReply={async (values) => {
        'use server'

        return createReply(params.postId, values)
      }}/>
    </div>
  );
}
