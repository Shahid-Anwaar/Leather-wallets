import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Leather Wallets | Premium Leather Wallet Store",
    template: "%s | Leather Wallets",
  },
  description:
    "Discover premium leather wallets, bifold wallets, trifold wallets, slim wallets, card holders, and money clip wallets with Amazon affiliate shopping links.",
  keywords: [
    "leather wallets",
    "premium leather wallets",
    "men leather wallets",
    "bifold wallets",
    "trifold wallets",
    "slim wallets",
    "minimalist wallets",
    "card holders",
    "money clip wallets",
    "Amazon leather wallets",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cormorant.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex flex-col font-body text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}