import { Header } from "@/components/header"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  title: string
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-[#333333] mb-8">{title}</h1>
        {children}
      </main>
      <footer className="bg-[#333333] text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} AfricaVoiceAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

