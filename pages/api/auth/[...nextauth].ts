import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "../../../apollo/prisma";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // async jwt({ user, token }) {
    //   if (user) {
    //     token.uid = user.id;
    //   }
    //   return token;
    // },
    async session({ session, user }) {
      if (session?.user) {
        session.user = user;
      }

      return session;
    },
  },
};
export default NextAuth(authOptions);
