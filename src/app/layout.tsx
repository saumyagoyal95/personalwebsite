import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/siteConfig";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { themeInitScript } from "@/components/theme/ThemeToggle";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Saumya Goyal",
    "MLOps",
    "LLM observability",
    "keynote speaker",
    "data engineering",
    "machine learning speaker",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${spaceGrotesk.variable} ${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative flex min-h-full flex-col">
        {/*
          Applies the stored theme to <html> before the page paints, so a reload
          never flashes the wrong palette. Must stay the first thing in <body>:
          it runs during HTML parse, ahead of any content being rendered.
          Deliberately not in a manual <head> — the App Router owns that element.
        */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/*
          Scroll reveals are rendered by motion with an inline `opacity:0` in the
          SSR HTML, and only revealed once JS hydrates. Without JS that would
          leave the whole page blank, so undo the hidden state when scripting is
          off — the content is what matters, the animation is decoration.
        */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Nav />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
