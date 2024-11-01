"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import WillBeDeleted from "@/components/WillBeDeleted";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],

  variable: "--font-inter",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-poppins `}>
        <SessionProvider session={session}>
          <main className="overflow-hidden">
            <WillBeDeleted />

            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
