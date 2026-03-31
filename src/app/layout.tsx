import { Metadata } from "next";
import { Titillium_Web, Caveat, Rampart_One } from "next/font/google"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import "highlight.js/styles/monokai-sublime.css";
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ["300","400","700"],
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-post",
});

const rampart = Rampart_One ({
  subsets: ["latin"],
  variable: "--font-rampart",
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shamvoke.com'),
  title: {
    default: "shamvoke blog",
    template: "%s | shamvoke blog",
  },
  description: "Personal blog of Sham Voke, sharing thoughts on web development, design, creativity, branding, and digital ideas.",
  keywords: [
    "Sham Voke",
    "shamvoke",
    "web development",
    "web design",
    "graphic design",
    "branding",
    "Next.js blog",
    "creative developer",
    "Kenyan web designer",
    "Nairobi web developer",
  ],
  authors: [{ name: "Sham Voke", url: "https://shamvoke.com" }],
  creator: "Sham Voke",
  publisher: "Sham Voke",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
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
      className={cn("antialiased", "font-sans", titillium.variable, caveat.variable, rampart.variable)}
    >
      <body>
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
