import React from "react"
import { Link } from "react-router-dom"
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
            <Link to="/" className="group">
              <div className="w-20 h-20 rounded-full border-2 border-[#d4a84b] flex items-center justify-center p-1 bg-[#f5e6d3] transition-all duration-300 group-hover:border-white group-hover:scale-105 group-hover:shadow-xl group-hover:bg-[#fff8eb]">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <img 
                    src="/magicroastlogo.png" 
                    alt="Magic Roast Qoffee Logo" 
                    className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>
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
              <a
                href="https://www.youtube.com/channel/UCaVueE_VFiV_IgHyum0Nteg"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Youtube size={16} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/magicroast_qoffee/?hl=en"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/magicroast-qoffee/about/"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/people/Magic-Roast-Qoffee/61572673342331/?mibextid=ZbWKwL"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook size={16} className="text-white" />
              </a>
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
            <Link to="/about" className="hover:text-[#d4a84b] transition-colors">
              About
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link to="/shop" className="hover:text-[#d4a84b] transition-colors">
              Qoffee
            </Link>
            <span className="text-[#5a4535]">|</span>
            <a href="#" className="hover:text-[#d4a84b] transition-colors">
              Career
            </a>
            <span className="text-[#5a4535]">|</span>
            <Link to="/blogs" className="hover:text-[#d4a84b] transition-colors">
              Blogs
            </Link>
            <span className="text-[#5a4535]">|</span>
            <Link to="/contact" className="hover:text-[#d4a84b] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-[#a0a0a0]">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="text-[#5a4535]">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#5a4535]">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Disclaimer
            </a>
            <span className="text-[#5a4535]">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Cancellation Policy
            </a>
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
