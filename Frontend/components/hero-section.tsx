import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF8F0] to-[#FFE8D6] py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
              Voice AI for <span className="text-[#E94D35]">African</span> Languages
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Advanced speech recognition and synthesis technology specifically designed for African languages,
              dialects, and accents. Bridging communication gaps across the continent.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-[#E94D35] hover:bg-[#D43C25] text-white px-8 py-6 text-lg">Get Started</Button>
              <Link href="/demo">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Try Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#FFB347] flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="w-10 h-10 rounded-full bg-[#4CB944] flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold">
                  D
                </div>
              </div>
              <p className="text-gray-600">Trusted by 1000+ developers across Africa</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-500">AfricaVoiceAI Demo</div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E94D35] flex items-center justify-center text-white font-bold text-xs">
                      AI
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Assistant</p>
                      <p>Habari! Karibu kwenye AfricaVoiceAI. Ninaweza kukusaidia vipi leo?</p>
                      <p className="text-sm text-gray-500 mt-1 italic">
                        (Hello! Welcome to AfricaVoiceAI. How can I help you today?)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F0F9FF] rounded-lg p-4 ml-12">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-xs">
                      U
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">User</p>
                      <p>Ninahitaji kutafsiri barua pepe kwa Kiingereza.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E94D35] flex items-center justify-center text-white font-bold text-xs">
                      AI
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Assistant</p>
                      <p>Translated: "I need to translate an email to English."</p>
                      <p className="mt-2">
                        I can help with that. Please share the email content you'd like to translate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#E94D35] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#3B82F6] rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

