import type { Metadata } from "next";
import { siteConfig, seoConfig } from "@/config/siteData";

export const metadata: Metadata = {
  title: seoConfig.pages.contact.title,
  description: seoConfig.pages.contact.description,
  openGraph: {
    title: `${seoConfig.pages.contact.title} | ${siteConfig.name}`,
    description: seoConfig.pages.contact.description,
    url: `${siteConfig.url}/contact`,
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
