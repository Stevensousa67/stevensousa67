import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/header/Navbar";
import AppBreadcrumb from "@/components/ui/AppBreadcrumb";
import Footer from "@/components/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://stevensousa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Steven Sousa | Freelance Web Developer & Full-Stack Engineer",
    template: "%s | Steven Sousa",
  },
  description:
    "Hire Steven Sousa, a freelance web developer for hire specializing in custom websites, web applications, and modern tech stacks including Next.js, React, and TypeScript. Available for freelance projects, contract work, and long-term partnerships.",
  keywords: [
    "freelance web developer",
    "web developer for hire",
    "hire freelance developer",
    "freelance website developer",
    "freelance React developer",
    "freelance Next.js developer",
    "custom website development",
    "freelance full-stack developer",
    "contract web developer",
    "small business web developer",
    "startup web developer",
    "website developer near me",
    "remote web developer",
    "affordable web developer",
    "professional web developer",
    "Steven Sousa developer",
  ],
  authors: [{ name: "Steven Sousa", url: siteUrl }],
  creator: "Steven Sousa",
  publisher: "Steven Sousa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Steven Sousa - Freelance Web Developer",
    title: "Hire a Freelance Web Developer | Steven Sousa",
    description:
      "Looking for a freelance web developer? I build custom websites and web applications for startups and small businesses using Next.js, React, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Freelance Web Developer | Steven Sousa",
    description:
      "Looking for a freelance web developer? I build custom websites and web applications for startups and small businesses.",
    creator: "@stevensousa",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-white via-white via-60% to-gray-300 dark:bg-gradient-to-b dark:from-black dark:via-black dark:via-60% dark:to-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow flex flex-col max-w-5xl w-full" style={{ position: 'relative', left: '50vw', transform: 'translateX(-50%)' }}>
            <AppBreadcrumb />
            {children}
          </main>
          <Footer />
          <Toaster  />
        </ThemeProvider>
        <JsonLd type="Person" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
