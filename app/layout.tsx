import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClashLens",
  description: "Clan Analytics Platform for Clash of Clans Leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
