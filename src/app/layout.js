import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Osama Rizwan | Shopify & Web Developer",
  description:
    "Osama Rizwan is a professional Shopify and Web Developer specializing in custom Shopify themes, performance optimization, bug fixes, and modern web applications using React, Next.js, and Laravel.",
  keywords: [
    "Osama Rizwan",
    "Shopify Developer",
    "Shopify Expert",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Shopify Theme Customization",
    "Ecommerce Developer",
    "Freelance Shopify Developer",
  ],
  authors: [{ name: "Osama Rizwan", url: "https://osamarizwan.com" }],
  creator: "Osama Rizwan",
  metadataBase: new URL("https://osamarizwan.com"),
  openGraph: {
    title: "Osama Rizwan | Shopify & Web Developer",
    description:
      "Professional Shopify & Web Developer helping brands build fast, scalable, and conversion-focused websites.",
    url: "https://osamarizwan.com",
    siteName: "Osama Rizwan Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
