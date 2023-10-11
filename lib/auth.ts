import GithubProvider from 'next-auth/providers/github'
import {env} from "@/lib/env";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";
import {getServerSession} from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          username: profile.login,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url
        }
      }
    })
  ],
  callbacks: {
    session({session, user}) {
      if (!session?.user) return session
      session.user.id = user.id
      return session
    }
  }
}

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions)
  return session
}