import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import {ThemeProvider} from "@/components/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata = {
  title: "Arksana - We Build Tech Solutions That Work",
  description: "We are a team of software engineers and designers who build tech solutions that work. We specialize in web and mobile app development, and we are experts in React, React Native, and Node.js.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <title>
        {metadata.title}
      </title>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    </body>
    </html>);
}
