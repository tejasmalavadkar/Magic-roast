import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { Star, Filter, ShoppingCart, Heart, Eye } from "lucide-react";

export default function ShopPage() {
  const router = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartSuccess, setCartSuccess] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    "All Categories",
    "All",
    "Arabica Parchments",
    "Green Qoffee Beans",
    "Instant Qoffee Powder",
    "Roasted Qoffee Beans"
  ];

  const weights = [
    "1kg",
    "200 gm",
    "1 gm",
    "90 gm"
  ];

  const products = [
    {
      id: 1,
      name: "Bharat Araku Coffee (1 Kg)",
      rating: 4,
      price: "1600.00",
      originalPrice: "1850.00",
      image: "/bharat-araku-pouch.png",
      category: "Roasted Qoffee Beans",
      weight: "1kg"
    },
    {
      id: 2,
      name: "Qoffee Brew (200 Gm)",
      rating: 4,
      price: "250.00",
      originalPrice: "320.00",
      image: "/qoffee-brew-pouch.png",
      category: "Instant Qoffee Powder",
      weight: "200 gm"
    },
    {
      id: 3,
      name: "Qoffee (200 Gm)",
      rating: 4,
      price: "350.00",
      originalPrice: "450.00",
      image: "/qoffee-pouch-2.png",
      category: "Roasted Qoffee Beans",
      weight: "200 gm"
    },
    {
      id: 4,
      name: "Timeless Qoffee (90 Gm)",
      rating: 4,
      price: "450.00",
      originalPrice: "550.00",
      image: "/Timeless-tin.png",
      category: "Roasted Qoffee Beans",
      weight: "90 gm"
    },
    {
      id: 5,
      name: "Black Stallion (90 Gm)",
      rating: 4,
      price: "400.00",
      originalPrice: "550.00",
      image: "/Black-Stallion-tin.png",
      category: "Roasted Qoffee Beans",
      weight: "90 gm"
    },
    {
      id: 6,
      name: "Vanmaya Green Beans (1 Kg)",
      rating: 4,
      price: "800.00",
      originalPrice: "900.00",
      image: "/van-maya-pouch.png",
      category: "Green Qoffee Beans",
      weight: "1kg"
    },
    {
      id: 7,
      name: "Arabica Parchments (1 Kg)",
      rating: 4,
      price: "700.00",
      originalPrice: "850.00",
      image: "/araku-pouch-mockup-008.png",
      category: "Arabica Parchments",
      weight: "1kg"
    },
    {
      id: 8,
      name: "Signature Qoffee 80:20 (1 Kg)",
      rating: 4,
      price: "1500.00",
      originalPrice: "1650.00",
      image: "/signature-qoffee (2).png",
      category: "Roasted Qoffee Beans",
      weight: "1kg"
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setFilteredProducts(products);
      setIsLoading(false);
    }, 500);
    
    // Check for cart success message from login redirect
    const urlParams = new URLSearchParams(window.location.search);
    const addedItem = urlParams.get('added');
    if (addedItem) {
      setCartSuccess(decodeURIComponent(addedItem));
      // Clear the URL parameter
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const applyFilters = () => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = products;

      if (selectedCategory !== "All Categories" && selectedCategory !== "All") {
        filtered = filtered.filter(product => product.category === selectedCategory || selectedCategory === "All");
      }

      if (selectedWeight) {
        filtered = filtered.filter(product => product.weight === selectedWeight);
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Check for cart success message from login redirect
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const addedItem = urlParams.get('added');
      if (addedItem) {
        setCartSuccess(decodeURIComponent(addedItem));
        // Clear the URL parameter
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedWeight]);

  const resetFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedWeight(null);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} transition-all duration-300`} 
      />
    ));
  };

  const addToCart = (product) => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Store the product in localStorage to add after login
      localStorage.setItem('pendingCartItem', JSON.stringify(product));
      // Redirect to login page
      router.push('/login');
      return;
    }
    
    // User is logged in - add to cart in local state
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Update cart count in header
    const currentCartCount = parseInt(localStorage.getItem('cartCount') || '0');
    localStorage.setItem('cartCount', (currentCartCount + 1).toString());
    
    // Dispatch event to notify header of cart update
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show success message
    setCartSuccess(`${product.name} added to cart!`);
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setCartSuccess(null);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f0e3] via-[#fefaf7] to-[#f5e6d3] flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 px-0">
        <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
          {/* Success Message */}
          {cartSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg flex items-center justify-between animate-fadeIn">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>{cartSuccess}</strong> has been added to your cart!</span>
              </div>
              <button 
                onClick={() => setCartSuccess(null)}
                className="text-green-500 hover:text-green-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          )}
          <div className="text-center mb-12 relative">
            <h1 className="text-5xl md:text-6xl font-bold text-[#5a3921] mb-4 font-serif relative inline-block">
              <span className="relative z-10">Premium Coffee</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d4a84b] opacity-50 transform -skew-x-12"></span>
            </h1>
            <p className="text-lg text-[#6a6a6a] mb-6 max-w-2xl mx-auto">
              Discover our finest collection of ethically sourced and expertly roasted coffee beans
            </p>
            <div className="w-24 h-1 bg-[#d4a84b] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Filters Sidebar with Animation */}
            <div className="lg:w-1/6 flex-shrink-0">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#f5e6d3] sticky top-8 transition-all duration-500 hover:shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-[#5a3921] flex items-center gap-2">
                    <Filter size={20} />
                    Filters
                  </h2>
                  <button 
                    onClick={resetFilters}
                    className="text-[#d4a84b] text-sm font-medium hover:underline transition-all duration-300 hover:text-[#c49a3f]"
                  >
                    Reset All
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Categories Filter */}
                  <div className="animate-fadeIn">
                    <h3 className="font-bold text-[#5a3921] mb-3">Categories</h3>
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 border-2 border-[#d4a84b] rounded-xl bg-white text-[#5a3921] focus:outline-none focus:ring-2 focus:ring-[#d4a84b] focus:border-transparent transition-all duration-300"
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Weight Filter */}
                  <div className="animate-fadeIn">
                    <h3 className="font-bold text-[#5a3921] mb-3">Weight</h3>
                    <div className="space-y-2">
                      {weights.map((weight, index) => (
                        <label key={index} className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-[#f5e6d3] transition-all duration-300">
                          <input 
                            type="radio" 
                            name="weight" 
                            value={weight}
                            checked={selectedWeight === weight}
                            onChange={(e) => setSelectedWeight(e.target.value)}
                            className="mr-3 w-4 h-4 text-[#d4a84b] focus:ring-[#d4a84b]"
                          />
                          <span className="text-[#5a3921] transition-colors duration-300">{weight}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-5/6 flex-grow">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4a84b]"></div>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex justify-between items-center">
                    <p className="text-[#5a3921]">
                      Showing <span className="font-bold">{filteredProducts.length}</span> products
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {filteredProducts.map((product, index) => (
                      <div 
                        key={product.id} 
                        className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-[#f5e6d3] h-full flex flex-col"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#f5e6d3] to-[#e6d4b8] flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4a84b] to-[#c49a3f] text-[#3d2817] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            {product.weight}
                          </div>
                          
                          {/* Quick action buttons */}
                          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300">
                              <Heart size={16} className="text-[#5a3921]" />
                            </button>
                            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300">
                              <Eye size={16} className="text-[#5a3921]" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-bold text-[#5a3921] mb-3 text-center group-hover:text-[#d4a84b] transition-colors duration-300 flex-grow">{product.name}</h3>
                          
                          <div className="flex justify-center mb-4 space-x-1">
                            {renderStars(product.rating)}
                          </div>
                          
                          <div className="text-center mb-4">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-xl font-bold text-[#5a3921]">₹{product.price}</span>
                              <span className="text-sm text-[#6a6a6a] line-through">₹{product.originalPrice}</span>
                            </div>
                          </div>
                          
                          <div className="text-center mt-auto">
                            <button 
                              onClick={() => addToCart(product)}
                              className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3f] text-[#3d2817] px-6 py-3 rounded-full hover:from-[#c49a3f] hover:to-[#b48a2f] transition-all duration-300 font-semibold w-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                            >
                              <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform duration-300" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">☕</div>
                      <h3 className="text-xl font-bold text-[#5a3921] mb-2">No products found</h3>
                      <p className="text-[#6a6a6a]">Try adjusting your filters to see more results</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}