import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const products = [
  {
    name: "Timeless Qoffee",
    rating: 4.8,
    image: "/Timeless-tin.png",
  },
  {
    name: "Vanmaya",
    rating: 4.7,
    image: "/Van maya pouch.png",
  },
  {
    name: "Araku Qoffee",
    rating: 4.9,
    image: "/araku-pouch-mockup-008.png",
  },
  {
    name: "Bharat Araku Qoffee",
    rating: 4.6,
    image: "/bharat-araku-pouch.png",
  },
  {
    name: "Black Stallion",
    rating: 4.5,
    image: "/Black-Stallion-tin.png",
  },
  {
    name: "Qoffee Brew",
    rating: 4.8,
    image: "/qoffee-brew-pouch.png",
  },
  {
    name: "Qoffee",
    rating: 4.7,
    image: "/Qoffee-pouch (2).png",
  },
  {
    name: "Signature Qoffee",
    rating: 4.6,
    image: "/signature-qoffee (2).png",
  },
]

export default function ProductBasket() {
  const [currentPage, setCurrentPage] = useState(0)
  const productsPerPage = 4
  const totalPages = Math.ceil(products.length / productsPerPage)

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  const currentProducts = products.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={16} className="fill-[#d4a84b] text-[#d4a84b]" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} size={16} className="fill-[#d4a84b]/50 text-[#d4a84b]" />)
      } else {
        stars.push(<Star key={i} size={16} className="text-[#d4a84b]" />)
      }
    }
    return stars
  }

  return (
    <section id="products" className="bg-[#f8f0e3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-2">PRODUCT BASKET</h2>
        <p className="text-center text-[#6a6a6a] mb-8">
          Showing {productsPerPage} of {products.length} products
        </p>

        <div className="relative bg-[#1a1a1a] rounded-3xl p-8 md:p-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronRight size={24} className="text-[#1a1a1a]" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] rounded-2xl p-4 flex flex-col items-center group cursor-pointer hover:bg-[#333] transition-colors"
              >
                <div className="relative w-full aspect-[2/3] mb-4 rounded-xl overflow-hidden bg-[#3a3a3a] flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-white font-semibold text-center mb-2">{product.name}</h3>
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="text-white/70 text-sm ml-1">({product.rating})</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? "bg-[#d4a84b]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
