import type { Metadata } from "next";
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
          <meta
            name="description"
            content="Welcome to my portfolio! I am [Your Name], a web developer with experience in building web applications, UI/UX design, and advanced technologies like React, Next.js, and Node.js. Explore my projects and skills to learn more."
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Bạn có thể chèn SVG này ở một vị trí khác trong body */}
          <header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="40"
              height="40"
              fill="#000000"
            >
              <g>
                <path d="M 15,3 A 12,12 0 0 0 3,15 12,12 0 0 0 15,27 12,12 0 0 0 27,15 12,12 0 0 0 15,3 Z m 1.800781,6 1.478516,0.6914062 -0.472656,0.9804688 6.048828,3.734375 v 1.380859 L 19.126953,18.720703 18.267578,17.412109 22.193359,15.097656 17.115234,12.126953 12.835938,21 11.345703,20.320312 11.830078,19.314453 6.1445312,15.787109 v -1.36914 l 4.7402348,-2.945313 0.847656,1.320313 -3.9394532,2.304687 4.7285152,2.775391 z" />
              </g>
            </svg>
            <h1>Giang Nguyen - Portfolio_Up</h1>
          </header>
          {children}
        </body>
      </html>
    </ModeProvider>
  );
}
