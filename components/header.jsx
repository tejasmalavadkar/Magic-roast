"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Youtube, Linkedin, Facebook, User, ShoppingCart, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#5a3921] text-[#d4a84b] py-2 px-4 text-center text-sm flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2">
          <span className="text-[#d4a84b]">✦</span>
          <span className="uppercase tracking-wider text-xs md:text-sm">
            SUSTAINABLE PRACTICE • ORGANICALLY GROWN • CONTINUOUS INNOVATIONS • TRANSPARENCY
          </span>
          <span className="text-[#d4a84b]">✦</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="hover:text-white transition-colors">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <Youtube size={18} />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <Linkedin size={18} />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <Facebook size={18} />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-4 md:px-8 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#5a3921] flex items-center justify-center p-1">
            <div className="w-full h-full rounded-full bg-[#f5e6d3] flex items-center justify-center">
              <img 
                src="/magicroastlogo.png" 
                alt="Magic Roast Qoffee Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            HOME
          </Link>
          <Link href="#about" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            ABOUT US
          </Link>
          <Link href="#products" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            SHOP
          </Link>
          <Link href="#blogs" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            BLOGS
          </Link>
          <Link href="#contact" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            CONTACT
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors hidden md:block">
            <User size={20} className="text-[#5a3921]" />
          </button>
          <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors relative hidden md:block">
            <ShoppingCart size={20} className="text-[#5a3921]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4a84b] text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <Link href="#" className="text-[#5a3921] font-medium py-2 border-b">
              HOME
            </Link>
            <Link href="#about" className="text-[#5a3921] font-medium py-2 border-b">
              ABOUT US
            </Link>
            <Link href="#products" className="text-[#5a3921] font-medium py-2 border-b">
              SHOP
            </Link>
            <Link href="#blogs" className="text-[#5a3921] font-medium py-2 border-b">
              BLOGS
            </Link>
            <Link href="#contact" className="text-[#5a3921] font-medium py-2">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
