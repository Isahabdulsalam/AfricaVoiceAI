"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Volume2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-[#333333] hover:text-[#E94D35] font-medium transition-colors">
    {children}
  </Link>
)

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Volume2 className="h-8 w-8 text-[#E94D35]" />
            <span className="text-2xl font-bold text-[#333333]">AfricaVoiceAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/demo">Demo</NavItem>
            <NavItem href="/chatbot">Chatbot</NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" onClick={() => setIsAuthModalOpen(true)}>
              Sign In
            </Button>
            <Button className="bg-[#E94D35] hover:bg-[#D43C25] text-white" onClick={() => setIsAuthModalOpen(true)}>
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/demo">Demo</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/chatbot">Chatbot</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setIsAuthModalOpen(true)}>Sign In</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setIsAuthModalOpen(true)}>Get Started</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  )
}