import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas";

export default {
  trustHost: true,
  providers: [
    Credentials({
      async authorize(credentials, req) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const response = await fetch(
            "http://3.141.194.138:3000/users/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const user = await response.json();

          if (user && response.ok) {
            return user;
          }

          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
