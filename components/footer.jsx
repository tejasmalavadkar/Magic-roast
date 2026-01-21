"use client"

import Link from "next/link"
import { Youtube, Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-[#3d2817] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-20 h-20 rounded-full border-2 border-[#d4a84b] flex items-center justify-center p-1 bg-[#f5e6d3]">
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <img 
                  src="/magicroastlogo.png" 
                  alt="Magic Roast Qoffee Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="text-center">
            <p className="text-[#d4a84b] mb-2">
              Contact: <span className="text-white">+91 9011211111/ +91 20-29911111</span>
            </p>
            <p className="text-[#d4a84b]">
              Email: <span className="text-white">connect@magicroastqoffee.com</span>
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#4a3525] flex items-center justify-center hover:bg-[#5a4535] transition-colors"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#4a3525] flex items-center justify-center hover:bg-[#5a4535] transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#4a3525] flex items-center justify-center hover:bg-[#5a4535] transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#4a3525] flex items-center justify-center hover:bg-[#5a4535] transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex flex-col items-center gap-2 hover:text-[#d4a84b] transition-colors"
            >
              <ArrowUp size={24} />
              <span className="text-sm">Back To Top</span>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-[#5a4535] pt-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            <Link href="#" className="hover:text-[#d4a84b] transition-colors">
              About
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-[#d4a84b] transition-colors">
              Qoffee
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-[#d4a84b] transition-colors">
              Career
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-[#d4a84b] transition-colors">
              Blogs
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-[#d4a84b] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-[#a0a0a0]">
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-[#5a4535]">
          <p className="text-sm text-[#a0a0a0]">© 2025. All rights reserved by MagicRoast Qoffee Private Limited.</p>
        </div>
      </div>
    </footer>
  )
}
