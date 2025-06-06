import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "zeirrow.dev",
    template: "%s | zeirrow.dev",
  },
  description:
    "The portfolio of a frontend web developer building premium web experiences.",
  keywords: [
    "zeirrow.dev",
    "frontend",
    "portfolio",
    "React developer",
    "Next.js",
    "Tailwind",
  ],
  openGraph: {
    title: "zeirrow.dev",
    description: "Frontend web developer portfolio",
    url: "https://zeirrow-dev-jz8c.vercel.app",
    siteName: "zeirrow.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "zeirrow.dev preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zeirrow.dev",
    description: "Frontend web developer portfolio",
    creator: "@zeirrow",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
