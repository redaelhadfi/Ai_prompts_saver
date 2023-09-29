import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


//  console.log(process.env.GOOGLE_ID)




const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  
    async signIn({}) {
    
    },
    async session({ session}){

    }

  
});

export { handler as GET, handler as POST };



