import type { Metadata } from "next";
import { APP_NAME, APP_URL } from "@/lib/constants";
import { inter } from "./components/ui/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),

  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },

  description: "Modern analytics platform for Clash of Clans clan leaders.",

  applicationName: APP_NAME,

  icons: {
    icon: "/logo/icon.png",
    apple: "/logo/apple-icon.png",
  },

  openGraph: {
    title: APP_NAME,
    description: "Modern analytics platform for Clash of Clans clan leaders.",
    images: [
      {
        url: "/logo/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ClashLens",
      },
    ],
  },

  keywords: ["Clash of Clans", "Clan Analytics", "ClashLens", "Clan Management"],

  authors: [
    {
      name: "Mukteswar Tripathy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground")}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
