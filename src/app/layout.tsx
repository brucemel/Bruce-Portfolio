import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brucemelendez.dev"),
  title: {
    default: "Bruce Melendez — Full-Stack Developer",
    template: "%s | Bruce Melendez",
  },
  description:
    "Full-stack developer specializing in AI-integrated web applications. Building with Next.js, TypeScript, and Node.js.",
  keywords: [
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "AI",
    "remote developer",
    "Peru",
  ],
  authors: [{ name: "Bruce Melendez" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brucemelendez.dev",
    siteName: "Bruce Melendez",
    title: "Bruce Melendez — Full-Stack Developer",
    description:
      "Full-stack developer specializing in AI-integrated web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruce Melendez — Full-Stack Developer",
    description:
      "Full-stack developer specializing in AI-integrated web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      {/*
        Inline script runs synchronously before React hydrates to prevent
        a flash of the wrong theme when the page first loads.
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.classList.add('light')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-bg text-fg">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
