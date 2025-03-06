import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Chatbot from "@/components/chatbot"

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold text-[#333333]">AfricaVoiceAI Chatbot</h1>
        <div></div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Chatbot />
      </main>
    </div>
  )
}

