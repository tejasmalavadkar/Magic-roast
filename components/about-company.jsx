import Image from "next/image"
import Link from "next/link"
import { Globe, Leaf, Flame } from "lucide-react"

export function AboutCompany() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Ethically Sourced",
      description: "Beans from fair-trade certified farms.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-teal-500" />,
      title: "Sustainable Practices",
      description: "Eco-friendly roasting and packaging.",
    },
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "Artisanal Roasting",
      description: "Small-batch precision for bold flavors.",
    },
  ]

  const timeline = [
    {
      year: "2010",
      title: "Founded",
      description: "MagicRoast Qoffee was born with a mission to redefine coffee excellence.",
    },
    {
      year: "2015",
      title: "Global Sourcing",
      description: "Partnered with sustainable farms in Ethiopia, Colombia, and Brazil.",
    },
    {
      year: "2020",
      title: "Eco-Friendly Packaging",
      description: "Introduced 100% recyclable packaging for a greener future.",
    },
  ]

  return (
    <section id="about" className="bg-[#f8f0e3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-center text-[#1a1a1a] mb-4">
          About MagicRoast Qoffee
        </h2>
        <div className="w-16 h-1 bg-[#d4a84b] mx-auto mb-6" />
        <p className="text-center text-[#4a4a4a] max-w-3xl mx-auto mb-12 italic">
          Crafting exceptional coffee experiences with passion, precision, and a commitment to sustainability.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="bg-[#f5e6d3] rounded-2xl p-6 md:p-8 shadow-lg">
            <p className="text-[#4a4a4a] mb-4 leading-relaxed">
              At MagicRoast Qoffee, we believe coffee is more than a beverage—it's a ritual, a moment of connection, and
              a celebration of craftsmanship. Founded in 2010, our journey began with a vision to source the finest
              beans from ethical farms across the globe. From the lush hills of Araku Valley to the vibrant fields of
              Colombia, each bean is handpicked and roasted with care to unlock its unique flavor profile. Our
              commitment to sustainability ensures that every cup supports farmers and preserves the planet for future
              generations.
            </p>
            <p className="text-[#4a4a4a] mb-6 leading-relaxed">
              Our artisanal roasting process blends tradition with innovation, delivering a rich, aromatic experience in
              every sip. Whether you're a connoisseur or a casual coffee lover, MagicRoast Qoffee invites you to savor
              the magic of a perfectly brewed cup.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <h4 className="font-semibold text-[#1a1a1a]">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-[#6a6a6a]">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Our Journey</h3>
            <div className="space-y-4 mb-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#d4a84b] mt-2" />
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">
                      {item.year} - {item.title}
                    </p>
                    <p className="text-sm text-[#6a6a6a]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-block bg-[#d4a84b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c49a3f] transition-colors"
            >
              Explore Our Coffee
            </Link>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium transform rotate-12 z-10">
              Premium Quality
            </div>
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <Image src="/vanmaya-coffee-package-white-bag-green-design-trib.jpg" alt="Vanmaya Coffee Package" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
