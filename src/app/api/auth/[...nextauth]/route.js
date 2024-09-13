import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    // jwt: {
    //     secret: process.env.JWT_SECRET,
    //     encryption: true,
    // },
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }

        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatch = bcrypt.compareSync(password, currentUser.password);
        if(!passwordMatch){
            return null
        }
        return currentUser
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
    // signOut:'/auth/signout',
    // error:'/auth/error',
    // verifyRequest:'/auth/verify-request',
    // newUser:'/auth/new-user'
  },
});

export { handler as GET, handler as POST };
