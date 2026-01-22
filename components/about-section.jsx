import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  const stats = [
    { number: "50+", label: "Item of Coffee" },
    { number: "20+", label: "Order Running" },
    { number: "2k+", label: "Happy Customer" },
  ]

  return (
    <section className="bg-[#f8f0e3] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              MagicRoast Qoffee Pvt.Ltd
            </h2>
            <p className="text-[#4a4a4a] mb-4 leading-relaxed">
              MagicRoast Qoffee Pvt. Ltd. & Bharat Araku Coffee are engaged in the cultivation of coffee beans and the
              manufacturing of instant coffee powder. We are also involved in repacking and relabeling.
            </p>
            <p className="text-[#4a4a4a] mb-4 leading-relaxed">
              Our coffee beans are cultivated and grown in the Araku Valley, which is known for its organic soil and
              unique flavor notes. The cultivation is carried out by a group of tribal women. Once we receive the
              parchment coffee from them, it is hulled and then roasted as per market requirements.
            </p>
            <p className="text-[#4a4a4a] mb-6 leading-relaxed">
              The roasted beans are then ground and converted into instant coffee powder. We also have direct vendors
              supplying instant coffee powders from different parts of the country.
            </p>

            <Link
              href="/about"
              className="inline-block bg-[#d4a84b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c49a3f] transition-colors mb-8"
            >
              Explore More
            </Link>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="text-2xl md:text-3xl font-bold text-[#d4a84b]">{stat.number}</p>
                  <p className="text-sm text-[#4a4a4a]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Coffee Cup Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-qoffee-section.jpg"
                alt="Magic Roast Qoffee - Coffee cup with logo on coffee beans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
