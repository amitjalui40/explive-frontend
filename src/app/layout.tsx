import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/ui/navbar";
import { siteConfig, seoConfig, homepageData } from "@/config/siteData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "legalName": siteConfig.legalName,
  "url": siteConfig.url,
  "email": homepageData.contact.email.value,
  "address": {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  "areaServed": "India",
  "knowsAbout": ["Live Events", "Music Festivals", "Concert Production", "Artist Management", "Artist Tours", "IP Experiences"],
  "sameAs": homepageData.footer.socials.map((s) => s.url),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "url": siteConfig.url,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoConfig.pages.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: seoConfig.pages.home.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <ThemeProvider attribute="class" defaultTheme={siteConfig.theme.default} enableSystem={siteConfig.theme.enableSystem} disableTransitionOnChange>
          <Navbar />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
