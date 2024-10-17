import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import SessionProvider from './session-provider'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SHOWup",
  description: "Pokemon Battle Simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased, flex flex-col items-center justify-center w-screen h-screen bg-black text-white flex-1`}
      >
        <SessionProvider>
          <Providers>
          <header className="fixed top-4 left-8">
            <h1 className="font-black text-3xl">
              SHOWup
            </h1>
            <h2 className="font-bold text-xl"> 
              Pokemon Battle Simulator
            </h2>
          </header>
          {children}
        </Providers>
        </SessionProvider>
        
      </body>
    </html>
  );
}
