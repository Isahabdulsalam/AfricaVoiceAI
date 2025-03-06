"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Mic, StopCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Barka da warhaka, Sunana AfricaVoiceAI, Dame zan taimakeka yau?" },
  ])
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("hausa")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { role: "user", content: input }]
      setMessages(newMessages)
      setInput("")

      // Simulate AI response
      setTimeout(() => {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: "Barka dai ",
          },
        ])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Here you would typically start/stop the actual recording process
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#333333]">AfricaVoiceAI Chatbot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="swahili">Swahili</SelectItem>
              <SelectItem value="yoruba">Yoruba</SelectItem>
              <SelectItem value="hausa">Hausa</SelectItem>
              <SelectItem value="amharic">Amharic</SelectItem>
              <SelectItem value="igbo">Igbo</SelectItem>
              <SelectItem value="zulu">Zulu</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
              <div className={`flex items-end ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                </Avatar>
                <div
                  className={`mx-2 py-2 px-3 rounded-lg ${
                    message.role === "user" ? "bg-[#E94D35] text-white" : "bg-gray-200 text-[#333333]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex items-center w-full space-x-2">
          <Button
            size="icon"
            variant={isRecording ? "destructive" : "secondary"}
            className="flex-shrink-0"
            onClick={toggleRecording}
          >
            {isRecording ? <StopCircle className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Input
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSend} className="bg-[#E94D35] hover:bg-[#D43C25] text-white">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

