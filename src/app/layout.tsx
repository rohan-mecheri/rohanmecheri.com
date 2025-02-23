import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Mecheri - Personal Website",
  description: "Personal website showcasing projects and initiatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#ffffff !important", height: "100vh", width: "100vw" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rohan Mecheri - Personal Website</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "#ffffff !important",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          width: "100vw",
          display: "flex",
        }}
      >
        {children}
      </body>
    </html>
  );
}
