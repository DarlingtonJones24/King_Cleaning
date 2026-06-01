import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "King Cleaning B.V",
  description: "Professionele schoonmaakdiensten in Amsterdam"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
