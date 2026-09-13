import type { Metadata } from "next"
import ContactSham from "./ContactSham"

export const metadata: Metadata = {
  title: "Contact Sham",
  description:
    "Want to say hello, talk tech, discuss a project, or just get curious? Get in touch with Sham through shamvoke.com.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sham",
    description:
      "Get in touch with Sham, a creative designer and web developer exploring code, creativity, technology, and the web.",
    url: "https://shamvoke.com/contact",
    siteName: "shamvoke.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Sham",
    description:
      "Get in touch with Sham, a creative designer and web developer exploring code, creativity, technology, and the web.",
  },
}

export default function ContactPage() {
  return <ContactSham />
}