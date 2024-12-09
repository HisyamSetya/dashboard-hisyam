import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "@/data-access-layer/dal";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";
// import { saltAndHashPassword } from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  // session: {
  //   strategy: "jwt",
  // },
  ...authConfig,
  providers: [
    Credentials({
      // ? You can specify which fields should be submitted, by adding keys to the `credentials` object.
      //  e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const saltRounds = 10;
        if (credentials === null) return null;

        // ? logic to verify if the user exists

        const user = await getUserFromDb(credentials?.email);

        // console.log("🚀  ~ credentials?.password:", credentials?.password);

        if (!user) {
          // throw new Error("User not found");
          return null;
        } else {
          const match = await bcrypt.compare(credentials?.password, user.password);

          // console.log("🚀 ~ authorize ~ match:", match);
          if (!match) return null;
          if (match) return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
});
