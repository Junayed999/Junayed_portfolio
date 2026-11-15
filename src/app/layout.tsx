import type { Metadata } from "next";
import { Inter, Sora, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junayed.Here — Junayed Hossain",
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Junayed.Here — Junayed Hossain",
    description: site.description,
    url: site.url,
    siteName: "Junayed.Here",
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
    title: "Junayed.Here — Junayed Hossain",
    description: site.description,
    images: ["/portrait.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
