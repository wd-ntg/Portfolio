import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ModeProvider } from "@/lib/context/modeContext";

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
  title: "Giang Nguyen - Portfolio_Up",
  description:
    "Welcome to my portfolio! I am [Your Name], a web developer with experience in building web applications, UI/UX design, and advanced technologies like React, Next.js, and Node.js. Explore my projects and skills to learn more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModeProvider>
      <html lang="en" className="bg-[#191919]">
        <head>
          {/* Thêm favicon SVG vào đây */}
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ModeProvider>
  );
}
