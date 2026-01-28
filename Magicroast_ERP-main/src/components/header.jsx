import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Instagram, Youtube, Linkedin, Facebook, User, ShoppingCart, Menu, X } from "lucide-react"

export function Header() {
  const router = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // Initialize cart count from localStorage
  useEffect(() => {
    const initialCartCount = parseInt(localStorage.getItem('cartCount') || '0');
    setCartCount(initialCartCount);
    
    // Listen for storage changes from other components
    const handleStorageChange = () => {
      const newCartCount = parseInt(localStorage.getItem('cartCount') || '0');
      setCartCount(newCartCount);
    };
    
    // Listen for cart updated events
    const handleCartUpdated = () => {
      const newCartCount = parseInt(localStorage.getItem('cartCount') || '0');
      setCartCount(newCartCount);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleCartUpdated);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdated);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#5a3921] text-[#d4a84b] py-2 px-4 text-center text-sm flex items-center justify-between group cursor-pointer">
        <div className="flex-1 flex items-center justify-center gap-2 transition-all duration-500 group-hover:text-white group-hover:animate-pulse">
          <span className="font-bold">✦</span>
          <span className="uppercase tracking-wider text-xs md:text-sm">
            SUSTAINABLE PRACTICE • ORGANICALLY GROWN • CONTINUOUS INNOVATIONS • TRANSPARENCY
          </span>
          <span className="font-bold">✦</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://www.instagram.com/magicroast_qoffee/?hl=en" 
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Instagram size={16} className="text-white" />
          </a>
          <a 
            href="https://www.youtube.com/channel/UCaVueE_VFiV_IgHyum0Nteg" 
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Youtube size={16} className="text-white" />
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

      {/* Main Navigation */}
      <nav className="bg-[#FDEBC8] py-4 px-4 md:px-8 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="w-16 h-16 rounded-full border-2 border-[#5a3921] flex items-center justify-center p-1 transition-all duration-300 group-hover:border-[#d4a84b] group-hover:scale-105 group-hover:shadow-lg">
            <div className="w-full h-full rounded-full bg-[#f5e6d3] flex items-center justify-center transition-all duration-300 group-hover:bg-[#fff8eb]">
              <img 
                src="/magicroastlogo.png" 
                alt="Magic Roast Qoffee Logo" 
                className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            HOME
          </Link>
          <Link to="/about" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            ABOUT US
          </Link>
          <Link to="/shop" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            SHOP
          </Link>
          <Link to="/blogs" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            BLOGS
          </Link>
          <Link to="/contact" className="text-[#5a3921] font-medium hover:text-[#d4a84b] transition-colors">
            CONTACT
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {/* Account Dropdown */}
          <div className="relative hidden md:block">
            <button 
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            >
              <User size={20} className="text-[#5a3921]" />
            </button>
            
            {/* Dropdown Menu */}
            {accountMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                <Link 
                  to="/my-account" 
                  className="block px-4 py-3 text-[#5a3921] hover:bg-[#f5e6d3] hover:text-[#d4a84b] transition-colors font-medium"
                  onClick={() => setAccountMenuOpen(false)}
                >
                  My Account
                </Link>
                <Link 
                  to="/login" 
                  className="block px-4 py-3 text-[#5a3921] hover:bg-[#f5e6d3] hover:text-[#d4a84b] transition-colors font-medium"
                  onClick={() => setAccountMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-4 py-3 text-[#5a3921] hover:bg-[#f5e6d3] hover:text-[#d4a84b] transition-colors font-medium"
                  onClick={() => setAccountMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          
          <div className="relative hidden md:block">
            <button 
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors relative"
              onClick={() => {
                // Check if user is logged in before showing cart
                const token = localStorage.getItem('token');
                if (!token) {
                  // If not logged in, redirect to login
                  router.push('/login');
                } else {
                  // If logged in, toggle cart menu
                  setCartMenuOpen(!cartMenuOpen);
                }
              }}
            >
              <ShoppingCart size={20} className="text-[#5a3921]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4a84b] text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            
            {/* Cart Sidebar - Always Show Empty State First */}
            {cartMenuOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-8 z-50">
                <div className="px-4 py-2 border-b border-gray-100 mb-4">
                  <h3 className="font-bold text-[#5a3921] text-lg">Your Cart ({cartCount})</h3>
                </div>
                
                <div className="flex flex-col items-center justify-center px-8 py-12">
                  <div className="w-16 h-16 bg-[#f5e6d3] rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart size={24} className="text-[#d4a84b]" />
                  </div>
                  <h4 className="font-semibold text-[#5a3921] text-lg mb-2">Your cart is empty</h4>
                  <p className="text-[#6a6a6a] text-center mb-6">Looks like you haven't added anything to your cart yet</p>
                  
                  <button 
                    onClick={() => {
                      setCartMenuOpen(false);
                      router.push('/shop');
                    }}
                    className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3f] text-[#3d2817] py-3 px-6 rounded-lg font-semibold hover:from-[#c49a3f] hover:to-[#b48a2f] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" className="text-[#5a3921] font-medium py-2 border-b">
              HOME
            </Link>
            <Link to="/about" className="text-[#5a3921] font-medium py-2 border-b">
              ABOUT US
            </Link>
            <Link to="/shop" className="text-[#5a3921] font-medium py-2 border-b">
              SHOP
            </Link>
            <Link to="/blogs" className="text-[#5a3921] font-medium py-2 border-b">
              BLOGS
            </Link>
            <Link to="/contact" className="text-[#5a3921] font-medium py-2 border-b">
              CONTACT
            </Link>
            
            {/* Mobile Account Options */}
            <div className="pt-4 border-t">
              <Link to="/my-account" className="block text-[#5a3921] font-medium py-2 hover:text-[#d4a84b] transition-colors">
                My Account
              </Link>
              <Link to="/login" className="block text-[#5a3921] font-medium py-2 hover:text-[#d4a84b] transition-colors">
                Login
              </Link>
              <Link to="/register" className="block text-[#5a3921] font-medium py-2 hover:text-[#d4a84b] transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
