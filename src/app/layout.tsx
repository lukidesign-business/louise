import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create & Capture",
  description: "Creator-led content and management for brands built for now.",
  icons: {
    icon: [{ url: "/icon.png?v=2", type: "image/png" }],
    apple: [{ url: "/apple-icon.png?v=2", type: "image/png" }],
  },
  openGraph: {
    title: "Create & Capture",
    description: "Creator-led content and management for brands built for now.",
    siteName: "Create & Capture",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--ivory)] text-[var(--charcoal)]">
        {children}
      </body>
    </html>
  );
}
