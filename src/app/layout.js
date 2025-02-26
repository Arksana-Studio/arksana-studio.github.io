import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata = {
  title: "Arksana Studio - We Build Tech Solutions That Work",
  description: "We are a team of software engineers and designers who build tech solutions that work. We specialize in web and mobile app development, and we are experts in React, React Native, and Node.js.",
};

export default function RootLayout({children}) {
  return (<html lang="en">
  <head>
    <title>
      {metadata.title}
    </title>
  </head>
  <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  >
  {children}
  </body>
  </html>);
}
