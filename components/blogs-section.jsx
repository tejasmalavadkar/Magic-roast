import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export function BlogsSection() {
  const blogPost = {
    title: "TYPES OF COFFEE BEANS",
    date: "Dec 29, 2024",
    author: "Admin",
    excerpt:
      "1. Arabica (Coffea Arabica) Global Share: 60-65 percent Altitude Range: 900-2,000 meters Caffeine Level: Low Bean Shape: Oval with a curved crea...",
    category: "Coffee",
    images: [
      { name: "ROBUSTA", src: "/placeholder.svg?height=100&width=150" },
      { name: "EXCELSA", src: "/placeholder.svg?height=100&width=150" },
      { name: "LIBERICA", src: "/placeholder.svg?height=100&width=150" },
      { name: "ARABICA", src: "/placeholder.svg?height=100&width=150" },
    ],
  }

  return (
    <section id="blogs" className="bg-[#f8f0e3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-12">BLOGS & ARTICLES</h2>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-2 p-4">
              {blogPost.images.map((image, index) => (
                <div key={index} className="text-center">
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-2">
                    <Image src={image.src || "/placeholder.svg"} alt={image.name} fill className="object-cover" />
                  </div>
                  <p className="text-xs font-semibold text-[#8b4513]">{image.name}</p>
                  {index < 2 && <span className="text-[#8b4513]">☕</span>}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-[#6a6a6a] mb-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {blogPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {blogPost.author}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{blogPost.title}</h3>
              <p className="text-sm text-[#6a6a6a] mb-4 leading-relaxed">{blogPost.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs border border-[#8b4513] text-[#8b4513] px-3 py-1 rounded">
                  {blogPost.category}
                </span>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-[#1a1a1a] font-medium hover:text-[#d4a84b] transition-colors"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
