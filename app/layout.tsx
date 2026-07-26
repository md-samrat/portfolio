import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://mdsamrat.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MD Samrat | Full Stack Web Developer",
    template: "%s | MD Samrat",
  },
  description:
    "MD Samrat is a Full Stack Web Developer from Chittagong, Bangladesh, building fast, scalable web applications with Next.js, React, Node.js and modern databases.",
  keywords: [
    "MD Samrat",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Bangladesh Web Developer",
  ],
  authors: [{ name: "MD Samrat", url: SITE_URL }],
  creator: "MD Samrat",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "MD Samrat | Full Stack Web Developer",
    description:
      "Full Stack Web Developer crafting modern, scalable web applications with Next.js, React and Node.js.",
    siteName: "MD Samrat",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Samrat | Full Stack Web Developer",
    description:
      "Full Stack Web Developer crafting modern, scalable web applications with Next.js, React and Node.js.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MD Samrat",
    jobTitle: "Full Stack Web Developer",
    url: SITE_URL,
    email: "md.samrat.dev@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chittagong",
      addressCountry: "BD",
    },
    sameAs: [
      "https://www.facebook.com/mohammad.samrat0/",
      "https://www.linkedin.com/in/md-samrat0/",
      "https://github.com/md-samrat",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
