import React from "react"
import { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const _openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Magic Roast Qoffee - Premium Coffee Beans",
  description: "Instant Qoffee Manufacturer and Premium Quality Coffee Beans Cultivation Company in India.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}