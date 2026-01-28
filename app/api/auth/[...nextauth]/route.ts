import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

// In-memory user storage (replace with database in production)
const users: Array<{ id: string; name: string; email: string; password: string }> = []

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required")
        }

        const user = users.find(u => u.email === credentials.email)
        
        if (!user) {
          throw new Error("No user found with this email")
        }

        const isValid = await bcrypt.compare(credentials.password, user.password)
        
        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, users }
