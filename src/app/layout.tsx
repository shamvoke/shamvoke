import { Metadata } from "next";
import { Titillium_Web, Nanum_Pen_Script, Rampart_One } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "highlight.js/styles/monokai-sublime.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Script from "next/script";

const titillium = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ["300","400","700"],
})

const nanumpenscript = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-voke",
});

const rampart = Rampart_One ({
  subsets: ["latin"],
  variable: "--font-rampart",
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shamvoke.com'),
  title: {
    default: "sham voke blog",
    template: "%s | sham voke blog",
  },
  description: "Personal blog of Sham Voke, sharing thoughts on web development, design, creativity, branding, and digital ideas.",
  keywords: [
    "Sham Voke",
    "shamvoke",
    "web developer",
    "web design",
    "graphic design",
    "branding",
    "Next.js blog",
    "web designer",
    "creative developer",
    "Kenyan web designer",
    "Nairobi web developer",
  ],
  authors: [{ name: "Sham Voke", url: "https://shamvoke.com" }],
  creator: "Sham Voke",
  publisher: "Sham Voke",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "shamvoke blog",
    description: "Personal blog of Sham Voke, sharing thoughts on web development, design, creativity, branding, and digital ideas.",
    url: "https://shamvoke.com",
    siteName: "Shamvoke blog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shamvoke blog',
    description: 'Personal blog of Sham Voke, sharing thoughts on web development, design, creativity, branding, and digital ideas.',
    creator: '@shamvoke',
  },
  other: {
    "google-adsense-account": "ca-pub-9337281778223595"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", titillium.variable, nanumpenscript.variable, rampart.variable)}
    >
      <body>
      <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9337281778223595"
        />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
