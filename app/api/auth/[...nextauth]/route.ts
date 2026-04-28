import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return user.email === process.env.ADMIN_EMAIL;
    },
    async session({ session, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/no-autorizado",
  },
});

export { handler as GET, handler as POST };