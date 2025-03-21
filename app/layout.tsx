import type { Metadata } from "next";
import { Inter, Mulish, Roboto, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font--inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TrioCores Banking",
  description: "This is a modern banking app made, made for TrioCores.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
