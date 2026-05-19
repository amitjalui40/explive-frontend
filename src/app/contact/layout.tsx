import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Exp Live Entertainment for event bookings, artist management, or collaborations. Email us at info@explive.in or fill out our contact form.",
  openGraph: {
    title: "Contact Us | Exp Live Entertainment",
    description: "Get in touch with Exp Live Entertainment for event bookings, artist management, or collaborations.",
    url: "https://explive.in/contact",
  },
  alternates: {
    canonical: "https://explive.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
