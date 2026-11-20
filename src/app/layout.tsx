import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junayed.JS — Junayed Hossain",
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Junayed.JS — Junayed Hossain",
    description: site.description,
    url: site.url,
    siteName: "Junayed.JS",
    type: "website",
    images: [
      {
        url: "/portrait.png",
        width: 1080,
        height: 1424,
        alt: "Portrait of Junayed Hossain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junayed.JS — Junayed Hossain",
    description: site.description,
    images: ["/portrait.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
