import React from "react"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./globals.css"

// Font classes can be defined in CSS or imported from a font service

// Meta tags can be added in index.html or through React Helmet

export default function RootLayout({
  children,
}) {
  return (
    <Router>
      <div className="antialiased">
        {children}
      </div>
    </Router>
  )
}