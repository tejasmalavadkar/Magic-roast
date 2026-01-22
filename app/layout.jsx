import React from "react"
import { Metadata } from "next"
import { Playfair_Display, Open_Sans, Montserrat } from "next/font/google"
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

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Magic Roast Qoffee - Premium Coffee Beans",
  description: "Instant Qoffee Manufacturer and Premium Quality Coffee Beans Cultivation Company in India.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/magicroastlogo.png",
        type: "image/png",
      },
    ],
    apple: "/magicroastlogo.png",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${_openSans.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}