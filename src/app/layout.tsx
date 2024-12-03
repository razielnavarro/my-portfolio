import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const retroFont = localFont({
  src: "./fonts/PressStart2P-vaV7.ttf",
  // variable: "--font-retro",
  weight: "100-900",
});

export const metadata: Metadata = {
  title: "Raziel Portfolio",
  description: "Raziel Navarro personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${retroFont.className} antialiased relative`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-#0a0a0a bg-[linear-gradient(to_right,#28133a_1px,transparent_1px),linear-gradient(to_bottom,#28133a_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        {children}
      </body>
    </html>
  );
}
