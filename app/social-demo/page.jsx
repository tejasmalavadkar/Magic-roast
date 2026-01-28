import { SocialMediaIconsRow } from "../components/social-media-icons-row";

export default function SocialMediaDemo() {
  return (
    <div className="min-h-screen bg-[#f8f0e3] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#5a3921] mb-12">
          Social Media Icons Row Demo
        </h1>
        
        {/* Demo section with different background contexts */}
        <div className="space-y-16">
          {/* Light background demo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-[#5a3921] mb-6 text-center">
              On White Background
            </h2>
            <SocialMediaIconsRow />
          </div>
          
          {/* Coffee-themed background demo */}
          <div className="bg-gradient-to-br from-[#5a3921] to-[#3d2817] rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              On Coffee Background
            </h2>
            <SocialMediaIconsRow />
          </div>
          
          {/* Beige background demo (site default) */}
          <div className="bg-[#f8f0e3] rounded-2xl p-8 border border-[#e6d4b8]">
            <h2 className="text-xl font-semibold text-[#5a3921] mb-6 text-center">
              On Site Background
            </h2>
            <SocialMediaIconsRow />
          </div>
        </div>
        
        <div className="mt-12 text-center text-[#6a6a6a]">
          <p className="mb-2">Features:</p>
          <ul className="text-sm space-y-1">
            <li>• Perfect circular buttons with coffee-themed brown gradient</li>
            <li>• White icons with centered alignment</li>
            <li>• Subtle inner glow and soft shadows for 3D effect</li>
            <li>• Smooth hover lift animation with enhanced shadow</li>
            <li>• Even spacing and responsive design</li>
            <li>• Accessible with proper aria labels</li>
          </ul>
        </div>
      </div>
    </div>
  );
}