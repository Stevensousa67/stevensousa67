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
    "Steven Sousa is a freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Building impactful web applications for businesses with modern technologies.",
  keywords: [
    "Steven Sousa",
    "web developer",
    "freelance developer",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "Tailwind CSS",
    "frontend developer",
    "backend developer",
    "web applications",
    "software engineer",
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
    siteName: "Steven Sousa",
    title: "Steven Sousa | Freelance Web Developer & Full-Stack Engineer",
    description:
      "Freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Building impactful web applications for businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Sousa | Freelance Web Developer & Full-Stack Engineer",
    description:
      "Freelance web developer specializing in Next.js, TypeScript, React, and Tailwind CSS. Building impactful web applications.",
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
