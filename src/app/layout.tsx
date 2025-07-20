import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helvetia PUB - Brienz, Switzerland",
  description: "Traditional Swiss pub in the heart of Brienz. Enjoy authentic cuisine, drinks, and warm hospitality in a cozy atmosphere.",
  keywords: "pub, restaurant, Brienz, Switzerland, Swiss cuisine, beer, pizza, pasta",
  authors: [{ name: "Helvetia PUB" }],
  openGraph: {
    title: "Helvetia PUB - Brienz, Switzerland",
    description: "Traditional Swiss pub in the heart of Brienz",
    url: "https://helvetia-pub.ch",
    siteName: "Helvetia PUB",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helvetia PUB - Brienz, Switzerland",
    description: "Traditional Swiss pub in the heart of Brienz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
