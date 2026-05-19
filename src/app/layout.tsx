import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/ui/navbar";
import { siteConfig } from "@/config/homepageData";

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
  "name": "Exp Live Entertainment",
  "legalName": "Exp Live Entertainment LLP",
  "url": "https://explive.in",
  "email": "info@explive.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop 2 Bldg 46 Deep Jyoti, CHS Vartak Nagar, Jekegram, Vartak Nagar Police Station",
    "addressLocality": "Thane",
    "addressRegion": "Maharashtra",
    "postalCode": "400606",
    "addressCountry": "IN"
  },
  "areaServed": "India",
  "knowsAbout": ["Live Events", "Music Festivals", "Concert Production", "Artist Management", "Artist Tours", "IP Experiences"],
  "sameAs": [
    "https://www.instagram.com/expliveent/",
    "https://www.facebook.com/profile.php?id=61579060607829",
    "https://x.com/expliveent",
    "https://www.youtube.com/@expliveent",
    "https://www.linkedin.com/company/exp-live-entertainment/"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Exp Live Entertainment",
  "url": "https://explive.in"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://explive.in"),
  title: {
    default: "Exp Live Entertainment — India's Premier Live Events Company",
    template: "%s | Exp Live Entertainment",
  },
  description: "Exp Live Entertainment organizes music festivals, concerts, artist tours, and immersive live cultural experiences across India. Based in Mumbai and Thane, Maharashtra.",
  keywords: ["live events India", "music festivals India", "concert organizer Mumbai", "artist management India", "live entertainment company", "event organizer Maharashtra"],
  authors: [{ name: "Exp Live Entertainment" }],
  creator: "Exp Live Entertainment",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://explive.in",
    siteName: "Exp Live Entertainment",
    title: "Exp Live Entertainment — India's Premier Live Events Company",
    description: "Exp Live Entertainment organizes music festivals, concerts, artist tours, and immersive live cultural experiences across India.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@expliveent",
    creator: "@expliveent",
    title: "Exp Live Entertainment — India's Premier Live Events Company",
    description: "Exp Live Entertainment organizes music festivals, concerts, artist tours, and immersive live cultural experiences across India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://explive.in",
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
