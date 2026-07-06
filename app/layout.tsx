import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "King Cleaning B.V",
  description: "Professionele schoonmaak voor kantoren, scholen, sportscholen, trappenhuizen, restaurants en hotels in Amsterdam."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
