import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { postAPI } from "@/services/fetchAPI";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    // CredentialsProvider ile email ve şifreyi kullanıcıdan alarak normal giriş yapmasını sağlarız.
    // farklı giriş yöntemleri ile (google - github - facebook) giriş için hazır "provider" ları kullanabiliriz.
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", //bunu yazmazsak hata alıyoruz.
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          // kontrol edilecek (email ve password) bilgilerini credentials değişkeninden alıyoruz.
          const { email, password } = credentials;
          // giriş yapılacak sayfayı role değişkeninden alıyoruz.

          if (email) {
            // yukarıda aldığımız giriş bilgilerini => [email eşleşmesi, password doğrulaması] için fonksiyonumuza gönderiyoruz.
            const data = await postAPI(`/auth/login`, { email, password });

            if (!data || data.error || data == null) {
              if (data) {
                throw new Error(data.error);
              } else {
                throw new Error(
                  "Giriş işleminde bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
                );
              }
            }

            const { userFromDB, success, error, status } = data;
            if (
              userFromDB === null ||
              !success ||
              userFromDB === undefined ||
              error ||
              !userFromDB
            ) {
              let error2 = new Error();
              error2.message = error;
              error2.status = status;
              throw error2;
            }
            if (!userFromDB.email || !userFromDB.id) {
              throw new Error("Giriş işleminde bir hata oluştu.");
            }
            const user = {
              id: userFromDB.id,
              name: userFromDB.name,
              email: userFromDB.email,
              role: userFromDB.role,
            };
            console.log(user);
            if (user) {
              return user;
            }
          } else {
            throw new Error("Giriş işleminde bir hata oluştu.");
          }
        } catch (er) {
          throw new Error(er);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },

  // kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini token değişkenine atıyoruz.
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, //1 * 24 * 60 * 60 1 days * 24 hours * 60 minutes * 60 seconds
  },

  callbacks: {
    // jwt fonksiyonu ile kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini token değişkenine atıyoruz.
    // bu bilgileri session fonksiyonunda kullanacağız.
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token = user;
      }
      if (trigger === "update" && session) {
        token = { ...token, ...session };
        return token;
      }
      return token;
    },
    //return { ...token, ...user };
    // session fonksiyonu ile kullanıcı giriş yaptıktan sonra giriş yapan kullanıcının bilgilerini session değişkenine atıyoruz.
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    // signIn fonksiyonu çalıştığında kulanıcıyı yönlendireceğimiz sayfayı belirtiyoruz.
    signIn: `/auth/login`,
    encryption: true,
  },
};
export { authOptions };
export default NextAuth(authOptions);
