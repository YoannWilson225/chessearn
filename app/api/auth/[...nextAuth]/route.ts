// import { authOptions } from "@/lib/auth";
// import NextAuth from "next-auth/next";

// export default NextAuth(authOptions);
import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };