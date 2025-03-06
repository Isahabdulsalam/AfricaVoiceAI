"use client"

import type React from "react"

import Link from "next/link"
import { Mic, Volume2, Globe, Code, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "@/components/language-selector"
import HeroSection from "@/components/hero-section"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"
import { Header } from "@/components/header"

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#333333]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <>
      <Header />
      <HeroSection />

      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#333333]">
          Powerful Features for African Languages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Mic className="h-10 w-10 text-[#E94D35]" />}
            title="Speech-to-Text"
            description="Accurately transcribe spoken African languages with support for multiple dialects and accents."
          />
          <FeatureCard
            icon={<Volume2 className="h-10 w-10 text-[#E94D35]" />}
            title="Text-to-Speech"
            description="Generate natural-sounding speech in various African languages with customizable voice models."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-[#E94D35]" />}
            title="Real-time Translation"
            description="Translate between African languages and global languages like English and French instantly."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-[#E94D35]" />}
            title="AI Chatbot"
            description="Interact with our AI assistant in multiple African languages for natural conversations."
          />
          <FeatureCard
            icon={<Code className="h-10 w-10 text-[#E94D35]" />}
            title="Developer API"
            description="Integrate our powerful voice recognition and synthesis capabilities into your applications."
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#E94D35]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="M8 11V9"></path>
                <path d="M12 11V9"></path>
                <path d="M16 11V9"></path>
              </svg>
            }
            title="Offline Capabilities"
            description="Use core features without an internet connection, perfect for areas with limited connectivity."
          />
        </div>
      </section>

      <section className="bg-[#333333] py-20 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Supported Languages</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Our platform currently supports these African languages with more being added regularly:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#444444] p-4 rounded-lg">Swahili</div>
            <div className="bg-[#444444] p-4 rounded-lg">Yoruba</div>
            <div className="bg-[#444444] p-4 rounded-lg">Amharic</div>
            <div className="bg-[#444444] p-4 rounded-lg">Hausa</div>
            <div className="bg-[#444444] p-4 rounded-lg">Igbo</div>
            <div className="bg-[#444444] p-4 rounded-lg">Zulu</div>
            <div className="bg-[#444444] p-4 rounded-lg">Xhosa</div>
            <div className="bg-[#444444] p-4 rounded-lg">Twi</div>
            <div className="bg-[#444444] p-4 rounded-lg">Wolof</div>
            <div className="bg-[#444444] p-4 rounded-lg">Oromo</div>
            <div className="bg-[#444444] p-4 rounded-lg">Somali</div>
            <div className="bg-[#444444] p-4 rounded-lg">Kinyarwanda</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20 px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#333333]">Try It Now</h2>
          <div className="mb-8">
            <LanguageSelector />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mic className="h-5 w-5 text-[#E94D35]" />
                Speech-to-Text
              </h3>
              <div className="flex flex-col items-center gap-4">
                <Button className="bg-[#E94D35] hover:bg-[#D43C25] text-white w-full py-8">
                  <Mic className="h-8 w-8 mr-2" />
                  Hold to Speak
                </Button>
                <div className="w-full h-32 bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-500 italic">Transcription will appear here...</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-[#E94D35]" />
                Text-to-Speech
              </h3>
              <div className="flex flex-col gap-4">
                <textarea
                  className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#E94D35]"
                  placeholder="Enter text to convert to speech..."
                ></textarea>
                <Button className="bg-[#E94D35] hover:bg-[#D43C25] text-white">
                  <Volume2 className="h-5 w-5 mr-2" />
                  Generate Speech
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/demo">
              <Button variant="outline" className="mt-4">
                Explore Full Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/chatbot">
              <Button className="mt-4 bg-[#E94D35] hover:bg-[#D43C25] text-white">
                Try AI Chatbot
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false)
        }}
      />
    </>
  )
}

