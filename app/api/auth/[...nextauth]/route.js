import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


















































// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account }) {
//       const { email, name } = user;

//       try {
//         await connectMongoDB();
//         const existingUser = await User.findOne({ email });

//         if (!existingUser) {
//           // If user doesn't exist, create a new user and mark their profile incomplete
//           await User.create({ name, email, profileComplete: false });
//         }

//         return true;
//       } catch (error) {
//         console.log(error);
//         return false;
//       }
//     },

//     async redirect({ url, baseUrl, user }) {
//       const { email } = user;
      
//       try {
//         await connectMongoDB();
//         const dbUser = await User.findOne({ email });

//         if (!dbUser) {
//           // If the user was not found (should not happen but for safety)
//           return baseUrl;
//         }

//         // Redirect logic based on email and profile completion status
//         if (email === "vkadyan@gmail.com") {
//           if (!dbUser.profileComplete) {
//             // First login, redirect to faculty complete profile page
//             return `${baseUrl}/faculty/completeprofile`;
//           }
//           return `${baseUrl}/faculty/facultydashboard`;
//         } else {
//           if (!dbUser.profileComplete) {
//             // First login, redirect to student complete profile page
//             return `${baseUrl}/student/completeprofile`;
//           }
//           return `${baseUrl}/student/studentdashboard`;
//         }
//       } catch (error) {
//         console.log(error);
//         // Fallback to the base URL if there's any issue
//         return baseUrl;
//       }
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
